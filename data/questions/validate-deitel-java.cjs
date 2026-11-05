// Exige um JDK com javac --release (JDK 9+). Não depende de JavaFX nem do Supabase.
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const checks = JSON.parse(fs.readFileSync(path.join(__dirname, 'deitel_code_checks.json'), 'utf8'));
const folder = fs.mkdtempSync(path.join(os.tmpdir(), 'fragata-deitel-java-'));
function run(command, args, success = true) {
  const result = spawnSync(command, args, { cwd: folder, encoding: 'utf8', timeout: 60000, windowsHide: true });
  if (result.error) throw result.error;
  assert.equal(result.status === 0, success, `${command}: ${result.stderr}`);
  return result.stdout;
}
try {
  const methods = [];
  const calls = [];
  const seen = new Set();
  for (const [i, [chapter, question, body, expected]] of checks.entries()) {
    const key = `${chapter}:${question}`;
    assert.ok(!seen.has(key)); seen.add(key);
    const source = JSON.parse(fs.readFileSync(path.join(__dirname, `deitel_capitulo_${String(chapter).padStart(2, '0')}.json`), 'utf8'));
    assert.ok(source.some(q => q.question_number === question), key);
    // Cada caso usa um escopo separado e captura a saída sem depender do console global.
    methods.push(`static void c${i}() throws Exception { ${body} }`);
    calls.push(`check("${key}", () -> c${i}(), ${JSON.stringify(expected)});`);
  }
  const java = `import java.util.*;
import java.util.stream.*;
import java.math.*;
import java.io.*;
public class DeitelChecks {
  interface Case { void run() throws Exception; }
  static int passed;
  static void check(String id, Case action, String expected) throws Exception {
    ByteArrayOutputStream buffer = new ByteArrayOutputStream();
    PrintStream original = System.out;
    try(PrintStream capture = new PrintStream(buffer, true, "UTF-8")) {
      System.setOut(capture); action.run();
    } finally { System.setOut(original); }
    String actual = buffer.toString("UTF-8");
    if(!expected.equals(actual)) throw new AssertionError(id+": expected="+expected+", actual="+actual);
    passed++;
  }
  static void alterar(int x){x=9;}
  static void alterarArray(int[] a){a[0]=9;}
  static void substituirArray(int[] a){a=new int[2];}
  static int varargs(int... v){return v.length;}
  static class Contador { static int n; Contador(){n++;} }
  static class Animal { String som(){return "animal";} }
  static class Gato extends Animal { @Override String som(){return "miau";} }
  static int retornoFinally(){try{return 1;}finally{return 2;}}
  static class Recurso implements AutoCloseable {
    private final String nome; Recurso(String nome){this.nome=nome;}
    public void close(){System.out.print(nome);}
  }
  static int fatorial(int n){return n==0?1:n*fatorial(n-1);}
  static int fibonacci(int n){return n<2?n:fibonacci(n-1)+fibonacci(n-2);}
  static int soma(int n){return n==0?0:n+soma(n-1);}
  static int hanoi(int n){return n==0?0:2*hanoi(n-1)+1;}
  ${methods.join('\n')}
  public static void main(String[] args) throws Exception {
    ${calls.join('\n')}
    System.out.print(passed);
  }
}`;
  fs.writeFileSync(path.join(folder, 'DeitelChecks.java'), java, 'utf8');
  run('javac', ['--release', '8', '-encoding', 'UTF-8', 'DeitelChecks.java']);
  assert.equal(run('java', ['-Djava.awt.headless=true', '-cp', folder, 'DeitelChecks']), String(checks.length));
  const invalid = [
    { chapter: 20, question: 12, code: 'import java.util.*; class Invalid { List<Object> a = new ArrayList<String>(); }' },
    { chapter: 20, question: 3, code: 'import java.util.*; class Invalid { List<int> a; }' },
    { chapter: 20, question: 10, code: 'class Invalid<T> { T criar(){return new T();} }' },
    { chapter: 10, question: 18, code: 'interface A{default void x(){}} interface B{default void x(){}} class Invalid implements A,B{}' },
    { chapter: 6, question: 19, code: 'class Invalid {int x(){return 1;} double x(){return 2.0;} }' },
    { chapter: 9, question: 9, code: 'class A{public void x(){}} class Invalid extends A{protected void x(){}}' },
  ];
  for (const item of invalid) {
    fs.writeFileSync(path.join(folder, 'Invalid.java'), item.code, 'utf8');
    run('javac', ['--release', '8', '-encoding', 'UTF-8', 'Invalid.java'], false);
  }
  console.log(JSON.stringify({ target: 'Java SE 8', executionCases: checks.length, compilationRejections: invalid.length, passed: true }));
} finally {
  // Diretório criado pelo próprio processo exclusivamente para estes checks.
  const resolved = path.resolve(folder);
  assert.equal(path.dirname(resolved), path.resolve(os.tmpdir()));
  assert.ok(path.basename(resolved).startsWith('fragata-deitel-java-'));
  fs.rmSync(resolved, { recursive: true, force: true });
}
