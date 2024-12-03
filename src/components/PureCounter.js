import React, { memo } from "react";
const PureComponent = memo(({ counter }) => {
  console.log('pure component rendered');
  return (
    <h1>Counter count: {counter}</h1>
  )
});

export default PureComponent;