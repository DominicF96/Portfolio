import React from 'react';

const Button = ({ children, className, onClick, id }) => {
  return (
    <button className={className ? className : ""} id={id ? id : ""} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;