import { ChangeEvent } from 'react';

interface TextareaProps {
  label: string;
  name: string;
  id?: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export function TextArea({
  label,
  name,
  id,
  placeholder,
  onChange,
  rows = 5
}: TextareaProps) {
  return (
    <div className="flex flex-col w-[600px] gap-4 pb-2 justify-start items-center my-6  rounded-xl p-2 bg-transparent">
      <label htmlFor={name} className="mr-auto text-gray-800 font-medium">
        {label}
      </label>
      <textarea
        rows={rows}
        id={id}
        name={name}
        onChange={onChange}
        placeholder="Description about your tool"
        className="w-full h-32 pl-4 py-2 text-gray-800  bg-transparent border rounded-xl border-zinc-700 focus:outline-none transition-all ease-linear placeholder:text-gray-500"
      />
    </div>
  );
}
