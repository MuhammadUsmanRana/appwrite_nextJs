import { InputProps } from '@/types/typs';
import React, { useState } from 'react'

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
  onBlur,
  id,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => setIsActive(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsActive(e.target.value !== "");
    onBlur(e);
  };
  return (
    <div className={`w-full ${padding} ${className}`} >
      <label htmlFor={id} className={`text-sm color-primary font-ibmplexserif-regular ${isActive || value !== "" ? "color-primary" : "red"}`}>
        {label && <span className='text-sm color-primary p-2'>{label}</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full border border-gray-300 rounded-md p-2'
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error && <span className='text-red-500 text-sm'>{error}</span>}
    </div >
  )
}

export default InputField;