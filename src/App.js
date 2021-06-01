import React, { useRef } from 'react'
import Test from './Test.vue'
import ReactBox from "./react-components/ReactBox";
import Xarrow from "react-xarrows";
import { boxStyle } from "./react-components/ReactBox";

const canvasStyle = {
  background: 'white',
  display: "flex",
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const VueButton = (props) => {
  return (
      <span id="vue-button">
        <Test/>
      </span>
  );
}
 
export default () => {
  return ( 
    <div class="container">
      <div class="container-row">
        <h1>This is a React App</h1>
      </div>
      <div class="container-row">
        <h4 
          id="react-callout"
          style={boxStyle}
          >This is a React component
        </h4>
        <ReactBox
          message={"hello"}
          id={"box1"}
        ></ReactBox>
        <Xarrow color="#03fcf0" path={"grid"} 
          gridBreak={0.2} start="react-callout" end="box1"
          strokeWidth={10}></Xarrow>
      </div>
      <div class="container-row">
        <h4
          id="vue-callout"
          style={boxStyle}
          >This is a Vue button
        </h4>
        <VueButton></VueButton>
        <Xarrow color="#03fcf0" path={"grid"} 
        gridBreak={0.2} start="vue-callout" end="vue-button"
        strokeWidth={10}></Xarrow>
      </div>

    </div>

  );
}