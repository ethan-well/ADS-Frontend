import React, { useState } from 'react';

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} name={"name"}/>;
}

export default forwardRef(FancyInput);