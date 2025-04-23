import { PassworInputProps } from '@/types/typs';
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import React, { useState } from 'react'

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
    touched,

}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div className={`w-full relative ${padding} ${className}`} >
            <label htmlFor={id}>
                {label && <span className='text-sm color-primary font-ibmplexserif-regular p-2'>{label}</span>}
            </label>
            <input
                id={id}
                name={name}
                type={showPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='w-full border border-gray-300 rounded-md p-2'
            />
            <button type="button" onClick={handleClick} className='absolute right-2 top-7 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200'>
                {showPassword ? <FiEye /> : <GoEyeClosed />}
            </button>
            {error && <span className='text-red-500 text-sm'>{error}</span>}
        </div>
    )
}

export default PasswordField;