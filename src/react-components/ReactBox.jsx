import React from 'react'

export const boxStyle = {
    border: '10px #03fcf0 dashed',
    borderRadius: "5px",
    textAlign: "center",
    width: "150px",
    height: "70px",
    fontSize: "18px",
    fontWeight: "bold"
};

export default (props) => {
    return (
      <span ref={props.ref} id={props.id} style={boxStyle}>
        {props.message}
      </span>
    );
  };