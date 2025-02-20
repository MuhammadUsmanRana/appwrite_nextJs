import { LoginSignupButtonProps } from '@/types/typs';
import React from 'react';

const LoginSignupButton: React.FC<LoginSignupButtonProps> = ({
  children,
  onClick,
  className,
  type,
  disabled,
  loading,
  padding,
  margin,
  width,
  height,
  boxShadow,
}) => {
  return (
    <div className={`${className} ${padding} ${margin} ${width} ${height}`}>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`w-full bg-blue-500 text-white rounded-md p-2  ${boxShadow} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {
          loading ? 'Loading...' : children
        }
      </button>
    </div>
  )
}

export default LoginSignupButton;