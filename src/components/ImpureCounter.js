import React from "react";
export default function ImpureComponent({counter}) {
  console.log('impure component rendered');
  return(
    <h1>Counter count: {counter}</h1>
  )
}