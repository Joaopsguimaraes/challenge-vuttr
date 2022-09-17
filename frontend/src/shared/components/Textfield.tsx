import './Textfield.css';

import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLInputTypeAttribute
} from 'react';

interface TextfieldProps {
  type?: string;
  id?: string;
  name?: string;
  label: string;
  placeholder: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  multipleLine?: boolean;
  rows?: number;
  value: HTMLInputTypeAttribute;
  disabled?: boolean;
}

const TextfieldBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextfieldProps
> = (
  {
    type,
    id,
    label,
    value,
    placeholder,
    onChange,
    multipleLine,
    rows = 3,
    disabled
  },
  ref
) => {
  return (
    <>
      {multipleLine ? (
        <div className="form-group">
          <textarea
            disabled={disabled}
            id={id}
            value={value}
            className="form-field disabled:text-zinc-400"
            placeholder={placeholder}
            onChange={onChange}
          />
          <label className="form__label">{label}</label>
        </div>
      ) : (
        <div className="form-group">
          <input
            disabled={disabled}
            type={type}
            id={id}
            value={value}
            className="form-field disabled:text-zinc-400"
            placeholder={placeholder}
            onChange={onChange}
          />
          <label className="form__label">{label}</label>
        </div>
      )}
    </>
  );
};

export const Textfield = forwardRef(TextfieldBase);
