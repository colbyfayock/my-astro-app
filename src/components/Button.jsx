import React from 'react';

const Button = ({ children }) => {
  function handleOnClick() {
    alert('Hello, Astro!');
  }
  return (
    <button onClick={handleOnClick}>{ children }</button>
  )
}

export default Button;