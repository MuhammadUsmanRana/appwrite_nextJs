import { InputProps } from '@/types/typs';
import React from 'react'

const InputField: React.FC<InputProps> = ({
  className,
  placeholder,
  padding,
  label,
  name,
  type = 'text',
  value,
  error,
  onChange,
  id
}) => {
  return (
    <div className={`w-full ${padding} ${className}`} >
      <label htmlFor={id}>
        {label && <span className='text-sm'>{label}</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className='text-red-500 text-sm'>{error}</span>}
    </div >
  )
}

export default InputField;