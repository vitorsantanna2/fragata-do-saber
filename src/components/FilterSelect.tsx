import type { Dispatch, SetStateAction } from 'react'

type FilterSelectProps = {
  label: string
  value: string
  options: string[]
  onChange: Dispatch<SetStateAction<string>>
}

export function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="block text-xs font-bold text-ink">
      {label}
      <select className="mt-2 block w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-medium outline-none transition focus:border-sea focus:ring-2 focus:ring-sea/10" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}
