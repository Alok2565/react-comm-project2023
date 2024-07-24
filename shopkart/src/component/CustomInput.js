import React from 'react'

const CustomInput = (props) => {
    const{type, username, placeholder, className} =props;
  return (
    <>
      <div class="mb-1">
        <input 
            type={type}
            name={username}
            placeholder={placeholder}
            id={username}
            className={`form-control ${className}`} />
    </div>
    </>
  )
}

export default CustomInput
