import { DropDownProps, OptionProps } from '@/types/typs'
import React, { useId } from 'react'

const Dropdown: React.FC<DropDownProps> = ({
    className,
    label,
    options,
    ...props
}) => {
    const id = useId();
    return (
        <div className='w-full'>
            {
                label && <label
                    htmlFor={id}
                    className='w-full'
                >
                </label>
            }
            <select id={id} {...props} className={`w-full ${className}`}>
                {
                    options?.map((option: OptionProps) => {
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown;