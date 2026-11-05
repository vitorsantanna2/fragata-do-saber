# Piloto — Date, capítulo 1

20 questões originais para revisão editorial, com cinco alternativas e uma resposta correta por item. Não são questões oficiais do CP-T nem transcrições dos exercícios do livro.

Referência: C. J. Date, Introdução a Sistemas de Bancos de Dados, tradução da 8ª edição, Elsevier, 2004. Os números abaixo identificam páginas do arquivo PDF fornecido, não a paginação impressa.

O [SQL de importação](../../supabase/seeds/date_capitulo_01_piloto.sql) insere os itens como rascunhos em Informática / CP-T / Banco de Dados. Execute-o no SQL Editor do Supabase após configurar a tabela de questões. Revise enunciados, alternativas, gabaritos e fontes no painel administrativo antes de publicar. Reexecutar preserva registros existentes com os mesmos IDs.

O JSON nesta pasta é a matriz editorial. Após editá-lo, execute node data/questions/generate-date-pilot.cjs na raiz do projeto para validar e regenerar o SQL e este documento. Os gabaritos no JSON e no SQL usam índices de zero a quatro.

## 1. Fácil — seção 1.2

Uma equipe chama o arquivo de dados de SGBD e o programa que gerencia seu acesso de banco de dados. Para corrigir a documentação, qual distinção deve ser adotada?

A) O banco de dados reúne os dados armazenados; o SGBD é o software que gerencia o acesso a eles.

B) O banco de dados corresponde à memória principal; o SGBD corresponde aos discos.

C) O banco de dados é o conjunto de consultas; o SGBD é o resultado dessas consultas.

D) O banco de dados é a interface gráfica; o SGBD é o conjunto de usuários.

E) Os dois termos designam componentes de hardware, diferenciados pela capacidade de armazenamento.

**Gabarito: A.** Banco de dados e SGBD são conceitos distintos: o primeiro corresponde aos dados, enquanto o segundo é a camada de software que trata as solicitações de acesso. O sistema de banco de dados envolve também hardware e usuários.

**Fonte:** capítulo 1, seção 1.2, PDF pp. 39–43.

## 2. Médio — seção 1.2

Uma escola mantém o endereço de cada aluno em um cadastro único. Os módulos de matrícula e biblioteca consultam esse cadastro, sem manter cópias próprias do endereço. Quais características estão diretamente ilustradas?

A) Distribuição física e exclusão mútua entre aplicações.

B) Integração dos dados e compartilhamento entre aplicações.

C) Redundância não controlada e independência de hardware.

D) Replicação integral e processamento em lote.

E) Fragmentação dos dados e isolamento entre cadastros.

**Gabarito: B.** A integração evita manter o mesmo endereço em arquivos independentes. O compartilhamento permite que diferentes aplicações utilizem esse dado comum. O cenário não informa distribuição física nem replicação.

**Fonte:** capítulo 1, seção 1.2, PDF pp. 41–42.

## 3. Médio — seção 1.2

Um banco de dados é utilizado por quarenta funcionários, mas o sistema permite que apenas um deles tenha acesso por vez. Considerando o critério de acesso simultâneo apresentado por Date, esse sistema é classificado como:

A) Multiusuário, porque existem quarenta contas cadastradas.

B) Distribuído, porque o acesso ocorre em momentos diferentes.

C) Monousuário, porque admite no máximo um usuário acessando em determinado momento.

D) Relacional, porque os usuários se alternam.

E) Multiusuário, porque a quantidade de registros independe dos usuários.

**Gabarito: C.** Nessa classificação, o critério é a possibilidade de vários usuários acessarem o banco ao mesmo tempo. A quantidade de pessoas cadastradas ou que o utilizam ao longo do dia não basta para caracterizar um sistema multiusuário.

**Fonte:** capítulo 1, seção 1.2, PDF pp. 40–41.

## 4. Fácil — seção 1.3

Um programa registra uma solicitação no banco de dados e encerra sua execução. Por que esse registro pode ser considerado persistente?

A) Porque um dado persistente não pode ser alterado.

B) Porque sua permanência depende de o programa continuar em execução.

C) Porque todo resultado intermediário de uma consulta também fica armazenado definitivamente.

D) Porque encerrar o programa não implica sua remoção; a exclusão exige uma operação apropriada no banco.

E) Porque a persistência dispensa mecanismos de armazenamento.

**Gabarito: D.** Persistência distingue os dados do banco de dados dos dados transitórios de uma execução. O término do programa não remove automaticamente o registro. Isso não significa que o registro seja imutável ou que não possa ser excluído.

**Fonte:** capítulo 1, seção 1.3, PDF pp. 46–47.

## 5. Fácil — seção 1.2

Um servidor público consulta dados por meio de um formulário, sem escrever instruções SQL. Qual interpretação é adequada?

A) Ele deixa de ser usuário do banco porque não utiliza uma linguagem de consulta.

B) O formulário substitui o SGBD na gestão do armazenamento físico.

C) O uso do formulário caracteriza uma função de administrador de dados.

D) Somente quem desenvolveu o formulário é considerado usuário do sistema.

E) Ele é um usuário final que acessa o banco indiretamente por meio de uma aplicação.

**Gabarito: E.** Usuários finais podem acessar os dados por aplicações, menus ou formulários. Não é necessário que escrevam SQL. A aplicação encaminha as operações ao SGBD, em vez de substituí-lo.

**Fonte:** capítulo 1, seção 1.2, PDF pp. 43–45.

## 6. Médio — seção 1.3

Um sistema registra pesquisadores, projetos e as participações de pesquisadores em projetos. Na distinção entre entidades e relacionamentos, qual interpretação é adequada?

A) Pesquisadores e projetos são entidades; as participações representam relacionamentos entre eles.

B) Apenas projetos são entidades; pesquisadores são necessariamente atributos.

C) A participação é uma estrutura de armazenamento físico, não uma associação do domínio.

D) Cada relacionamento só pode ser consultado a partir de uma de suas entidades.

E) Registrar relacionamentos torna o sistema automaticamente relacional.

**Gabarito: A.** Entidades são objetos distinguíveis do domínio, enquanto relacionamentos associam entidades. Uma participação permite identificar os projetos de um pesquisador e os pesquisadores de um projeto. A existência dessas associações, por si só, não define o modelo relacional.

**Fonte:** capítulo 1, seção 1.3, PDF pp. 47–48.

## 7. Médio — seção 1.3

Uma organização mantém um banco para registrar atendimentos diários e outro com totais mensais e indicadores históricos usados pela direção. Qual associação descreve melhor as finalidades desses ambientes?

A) O primeiro é de apoio à decisão; o segundo é exclusivamente de entrada de dados.

B) O primeiro atende ao processamento operacional; o segundo pode constituir um data warehouse de apoio à decisão.

C) Ambos são necessariamente bancos transitórios, pois recebem atualizações.

D) Somente o primeiro pode conter dados persistentes.

E) O segundo é o catálogo do SGBD, pois contém informações resumidas.

**Gabarito: B.** O ambiente operacional dá suporte às atividades rotineiras. Um data warehouse pode reunir dados históricos e agregados para apoiar análises e decisões. Dados de apoio à decisão também são persistentes e não se confundem com o catálogo do SGBD.

**Fonte:** capítulo 1, seção 1.3, PDF pp. 47.

## 8. Médio — seção 1.4

Uma instituição define quais informações devem ser mantidas e quem poderá consultá-las. Em seguida, uma equipe implementa permissões e ajusta o desempenho do banco. Na divisão de responsabilidades apresentada por Date, essas atividades correspondem, respectivamente, a:

A) Usuário final e programador de relatórios.

B) DBA e administrador de dados, nessa ordem.

C) Administrador de dados e DBA, nessa ordem.

D) Projetista de hardware e usuário final.

E) Administrador de rede e operador de entrada de dados.

**Gabarito: C.** O administrador de dados estabelece políticas a partir das necessidades da organização. O DBA implementa tecnicamente essas decisões e atua sobre aspectos como controles de acesso e desempenho. A distinção trata de responsabilidades, que podem envolver equipes.

**Fonte:** capítulo 1, seção 1.4, PDF pp. 56–57.

## 9. Médio — seção 1.4

Por uma necessidade técnica, um sistema mantém duas representações armazenadas do mesmo fato. Para que essa redundância seja controlada, qual medida é coerente com a abordagem descrita por Date?

A) Permitir que cada aplicação atualize somente sua cópia, sem coordenação.

B) Considerar a duplicação suficiente para garantir a integridade dos dados.

C) Retirar as cópias do conhecimento do SGBD para reduzir seu processamento.

D) Manter a duplicação conhecida e coordenar a propagação das atualizações entre as representações.

E) Tratar valores contraditórios como visões equivalentes do mesmo fato.

**Gabarito: D.** A redução da redundância é desejável, mas nem toda duplicação precisa ser eliminada. Quando mantida, ela deve ser conhecida e controlada, de modo que alterações não produzam representações contraditórias do mesmo fato.

**Fonte:** capítulo 1, seção 1.4, PDF pp. 57–58.

## 10. Médio — seção 1.4

Um cadastro armazena cada matrícula apenas uma vez, mas aceita valores negativos para uma quantidade que, por regra do negócio, deve ser positiva. Qual conclusão é correta?

A) A ausência de duplicação torna o valor negativo necessariamente válido.

B) O problema é exclusivamente de segurança, pois o usuário conseguiu inserir dados.

C) A integridade depende apenas de manter cópias adicionais do cadastro.

D) A unicidade da matrícula impede a existência de qualquer outro erro no registro.

E) Eliminar redundância não basta: uma restrição de integridade deve representar a regra da quantidade positiva.

**Gabarito: E.** Dados incorretos podem existir mesmo sem redundância. A unicidade de um identificador não valida os demais atributos. Restrições de integridade devem expressar as condições que os valores precisam satisfazer.

**Fonte:** capítulo 1, seção 1.4, PDF pp. 58–59.

## 11. Médio — seção 1.4

Uma operação deve registrar uma reserva de material e reduzir a quantidade disponível. Uma falha ocorre depois do primeiro registro, antes da redução. Se as duas alterações compõem uma transação atômica, qual resultado deve ser garantido após o tratamento da falha?

A) As duas alterações produzem efeito em conjunto, ou nenhuma delas permanece como efeito da transação.

B) O primeiro registro permanece confirmado, ainda que o segundo não seja executado.

C) A operação de redução pode ser descartada sem afetar o significado da reserva.

D) A presença de dois comandos impede que exista uma única unidade lógica de trabalho.

E) A atomicidade determina apenas qual usuário pode consultar o material.

**Gabarito: A.** A atomicidade trata a unidade lógica de trabalho de forma indivisível: seus efeitos são confirmados em conjunto ou desfeitos. A falha não deve deixar apenas a reserva efetivada. Isso não significa que a transação tenha obrigatoriamente de ser concluída com sucesso.

**Fonte:** capítulo 1, seção 1.4, PDF pp. 58.

## 12. Médio — seção 1.4

Em um cadastro compartilhado, um grupo pode consultar registros, mas não alterá-los. Qual mecanismo expressa diretamente essa exigência?

A) Uma restrição de integridade que exija valores positivos.

B) Uma restrição de segurança que diferencie as permissões de consulta e atualização.

C) Uma cópia redundante de cada registro para cada usuário.

D) A conversão do cadastro em arquivo exclusivo de uma aplicação.

E) A criação de um índice para todas as colunas consultadas.

**Gabarito: B.** A exigência define quem pode executar quais operações, portanto pertence à segurança. Restrições de integridade tratam da validade dos dados; índices e duplicação não estabelecem, por si mesmos, permissões de acesso.

**Fonte:** capítulo 1, seção 1.4, PDF pp. 59.

## 13. Médio — seção 1.4

Duas aplicações compartilham dados, mas têm necessidades de desempenho diferentes. Uma escolha de organização física melhora a aplicação mais importante para a instituição e torna a outra um pouco mais lenta. Qual avaliação corresponde ao controle centralizado descrito por Date?

A) A escolha deve maximizar o desempenho de cada aplicação separadamente, mesmo quando os requisitos entram em conflito.

B) Compartilhar dados elimina os conflitos entre requisitos de desempenho.

C) O controle centralizado permite equilibrar requisitos concorrentes considerando as prioridades globais da organização.

D) O DBA deve ignorar os requisitos das aplicações ao escolher a representação física.

E) Uma diferença de desempenho entre aplicações caracteriza necessariamente corrupção dos dados.

**Gabarito: C.** A administração centralizada pode avaliar os requisitos da organização como um todo e escolher compromissos entre aplicações. O compartilhamento não elimina conflitos, e não há garantia de que uma única organização física seja a melhor para todas as cargas de trabalho.

**Fonte:** capítulo 1, seção 1.4, PDF pp. 60.

## 14. Médio — seção 1.4

Unidades de uma instituição passam a adotar convenções comuns para nomes, representação e documentação de dados. Qual benefício está mais diretamente associado a essa padronização?

A) Eliminar a necessidade de definir permissões de acesso.

B) Garantir que nenhuma informação incorreta possa ser registrada.

C) Substituir o SGBD por arquivos independentes de cada unidade.

D) Facilitar o intercâmbio, a compreensão e o compartilhamento dos dados.

E) Tornar idênticas todas as necessidades de desempenho das aplicações.

**Gabarito: D.** Padrões de representação favorecem intercâmbio e migração. Convenções de nomenclatura e documentação ajudam a compreender e compartilhar dados. Essas medidas não substituem controles de segurança, restrições de integridade nem decisões de desempenho.

**Fonte:** capítulo 1, seção 1.4, PDF pp. 60.

## 15. Médio — seção 1.5

O DBA altera a técnica de acesso físico aos registros, preservando a interface lógica usada pelas aplicações. Os programas continuam funcionando sem mudanças no código. Qual objetivo foi atendido?

A) Independência de dados lógica, demonstrada pela mudança no significado dos atributos.

B) Eliminação de todos os índices do banco de dados.

C) Transformação de um sistema multiusuário em monousuário.

D) Dispensa de armazenamento secundário para dados persistentes.

E) Independência de dados física, pela imunidade das aplicações à mudança na técnica de acesso.

**Gabarito: E.** A independência física busca permitir alterações na representação física e nas técnicas de acesso sem exigir mudanças nas aplicações. O cenário preserva a interface lógica e não envolve alteração do significado dos dados.

**Fonte:** capítulo 1, seção 1.5, PDF pp. 61–63.

## 16. Médio — seção 1.5

Um programa percorre registros assumindo uma sequência determinada por um índice específico. Ao substituir esse índice por outra técnica de acesso, é necessário reescrever o programa. O caso evidencia:

A) Dependência da aplicação em relação à técnica de acesso físico aos dados.

B) Independência física plenamente alcançada, porque os valores não mudaram.

C) Uma consequência necessária de qualquer operação de consulta relacional.

D) Uma violação de segurança causada pela existência de índices.

E) A impossibilidade de compartilhar os dados entre aplicações.

**Gabarito: A.** O programa incorporou conhecimento sobre a técnica de acesso. Por isso, uma alteração física obriga a modificar seu código. A preservação dos valores, sozinha, não caracteriza independência física.

**Fonte:** capítulo 1, seção 1.5, PDF pp. 61–62.

## 17. Difícil — seção 1.5

Duas aplicações precisam de representações diferentes de um mesmo valor. O SGBD mantém uma representação armazenada e realiza as conversões necessárias para cada interface. Qual interpretação é adequada?

A) As duas aplicações precisam manter bancos privados para que seus formatos sejam respeitados.

B) A representação apresentada à aplicação pode diferir da representação armazenada, favorecendo a integração sem duplicação desnecessária.

C) O formato escolhido por uma aplicação deve obrigatoriamente determinar o armazenamento físico de todo o banco.

D) A conversão torna os valores transitórios e impede sua persistência.

E) As diferenças de representação significam que as aplicações não podem compartilhar o mesmo fato.

**Gabarito: B.** O SGBD pode separar a forma armazenada da forma apresentada a cada aplicação. As conversões permitem compartilhar uma representação armazenada mesmo quando as interfaces têm exigências distintas. Diferença de formato não implica diferença no fato representado.

**Fonte:** capítulo 1, seção 1.5, PDF pp. 62.

## 18. Médio — seção 1.6

Na caracterização introdutória do modelo relacional apresentada por Date, o que explica o termo relacional?

A) A existência obrigatória de diagramas de entidades e relacionamentos.

B) A ligação física entre registros por ponteiros visíveis às aplicações.

C) O uso do conceito matemático de relação, representado informalmente por uma tabela.

D) A conexão de computadores por uma rede de comunicação.

E) A dependência de cada programa em relação à organização dos arquivos.

**Gabarito: C.** O termo remete às relações da matemática, tratadas introdutoriamente como tabelas. Não deriva dos relacionamentos de um diagrama E/R nem da conexão entre máquinas. A aproximação entre relação e tabela aqui é informal.

**Fonte:** capítulo 1, seção 1.6, PDF pp. 69–70.

## 19. Médio — seção 1.6

Considere a relação INSCRICAO, com os atributos candidato, curso e situacao. Deseja-se obter os nomes dos candidatos cuja situacao seja aprovada. Em termos de operações relacionais, qual sequência descreve essa obtenção?

A) Projetar as linhas aprovadas e depois restringir as colunas ao atributo candidato.

B) Restringir a relação ao atributo candidato e depois ordenar pelo curso.

C) Projetar apenas curso e depois restringir pelo atributo situacao, já removido.

D) Restringir as linhas pela condição sobre situacao e depois projetar o atributo candidato.

E) Substituir os atributos por ponteiros e percorrer fisicamente os registros aprovados.

**Gabarito: D.** A restrição, também chamada seleção, escolhe linhas conforme uma condição. A projeção escolhe atributos. Aplicar essas operações nessa ordem permite filtrar pela situação antes de obter apenas os nomes. Os resultados continuam sendo relações.

**Fonte:** capítulo 1, seção 1.6, PDF pp. 69–70.

## 20. Difícil — seção 1.6

Uma implementação de SGBD usa ponteiros em suas estruturas internas, mas apresenta ao usuário relações e operadores relacionais, sem navegação por esses ponteiros. Qual conclusão é adequada?

A) A existência de qualquer ponteiro físico descaracteriza o modelo relacional.

B) O sistema é hierárquico, independentemente da interface apresentada ao usuário.

C) Os usuários precisam conhecer esses ponteiros para realizar projeções.

D) A classificação do modelo depende exclusivamente do meio físico de armazenamento.

E) O uso interno de ponteiros não contradiz, por si só, a apresentação de um modelo relacional ao usuário.

**Gabarito: E.** É necessário distinguir o modelo exposto ao usuário da implementação física. A ausência de navegação por ponteiros no nível do modelo relacional não proíbe que mecanismos internos usem ponteiros para implementar o armazenamento e o acesso.

**Fonte:** capítulo 1, seção 1.6, PDF pp. 70–71.
