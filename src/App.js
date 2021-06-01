import React, { useRef } from 'react'
import Test from './Test.vue'
import ReactBox from "./react-components/ReactBox";
import Xarrow from "react-xarrows";
import { boxStyle } from "./react-components/ReactBox";

const canvasStyle = {
  position: 'relative',
  height: '20vh',
  background: 'white',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const VueButton = (props) => {
  return (
    <>
      <div id="vue-button">
        <Test/>
      </div>
    </>
  );
}
 
export default () => {
  const box1 = { id: 'box1', ref: useRef(null), message: "hello"};
  return ( 
    <>
    <div style={canvasStyle}>
      <ReactBox
        box={box1}
      ></ReactBox>
      <p 
        id="react-callout"
        style={boxStyle}
        >This is a React component!</p>
      <Xarrow color="#03fcf0" path={"grid"} 
        gridBreak={0.2} start="react-callout" end="box1"
        strokeWidth={10}></Xarrow>
      <p 
        id="vue-callout"
        style={boxStyle}
        >This is a Vue button</p>
        <VueButton></VueButton>
        <Xarrow color="#03fcf0" path={"grid"} 
        gridBreak={0.2} start="vue-callout" end="vue-button"
        strokeWidth={10}></Xarrow>
    </div>


    </>
  );
}