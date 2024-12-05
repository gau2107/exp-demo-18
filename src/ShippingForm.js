import { memo } from "react";

const ShippingForm = memo(({ onSubmit }) => {
  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
  return (

    <div>
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  )
});

export default ShippingForm;