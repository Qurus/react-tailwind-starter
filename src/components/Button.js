import React from 'react'

const sizes = {
    default: `py-4 px-4`,
    large: `py-6 px-6`,
    xl: `py-6 px-6 text-xl`,
}
const Button = ({children, size, className = ""}) => {
    return(
        <button className={`bg-green-500 ml-2 hover:bg-green-700 text-white font-bold ${className} ${sizes[size] || sizes.default}`}>
            {children}
        </button>
    )
}

export default Button;