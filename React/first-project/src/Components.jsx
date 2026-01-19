import React, { Component } from "react";

// 1. 클래스 형태의 컴포넌트
class ClassComp extends Component {
  render() {
    return <p>Class Comp</p>;
  }
}

// 2. 함수 형태의 컴포넌트
function FunctionComp() {
  return <p>Funtion Comp</p>;
}

// 3. 화살표 함수 형태의 컴포넌트
const ArrowFunctionComp = () => {
  return <p>Arrow Function Comp</p>;
};

export { ClassComp, FunctionComp, ArrowFunctionComp };
