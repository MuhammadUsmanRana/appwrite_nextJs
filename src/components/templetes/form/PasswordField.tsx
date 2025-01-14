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
}) => {
    return (
        <div className={`w-full ${padding} ${className}`}>
            <label htmlFor={id}>
                {label && <span className='text-sm'>{label}</span>}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <span className='text-red-500 text-sm'>{error}</span>}
        </div>
    )
}

export default PasswordField;