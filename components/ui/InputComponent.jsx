import React from 'react'



export default function InputComponent({placeholder,
value,
type,
disabled,
onChange
}) {
  return (
    <input
    disabled={disabled}
   placeholder={placeholder}
    onChange={onChange}
    value={value}
    type={type}
    className={`
    w-full
    p-2
    text-lg
   bg-white
    border-2
    border-gray-400
    rounded-md
    outline-none
    text-black
    focus:border-blue-800
    focus:border-2 transition
    ${disabled?`bg-neutral-900`:``}
    ${disabled?`opacity-70`:``}
    ${disabled?`cursor-not-allowed`:``}
    '`}

    >

    </input>
  )
}