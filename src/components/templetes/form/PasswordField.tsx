import { PassworInputProps } from '@/types/typs';
import React from 'react'

const PasswordField: React.FC<PassworInputProps> = ({
    className,
    label,
    name,
    type = 'password',
    value,
    error,
    onChange,
    id,
    padding,
    placeholder,
    touched
}) => {
    return (
        <div className={`w-full ${padding} ${className}`} >
            <label htmlFor={id}>
                {label && <span className='text-sm color-primary font-ibmplexserif-regular p-2'>{label}</span>}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='w-full border border-gray-300 rounded-md p-2'
            />
            {error && <span className='text-red-500 text-sm'>{error}</span>}
        </div>
    )
}

export default PasswordField;