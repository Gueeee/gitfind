import React from 'react'
import './styles.css';

function Input({Name, Placeholder}) {
  return (
    <input name={Name} placeholder={Placeholder}/>
  )
}

export default Input;