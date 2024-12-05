import { useCallback } from "react";
import ShippingForm from "./ShippingForm";

export default function ProductPage({ productId, theme }) {

  const handleSubmit = useCallback(() => { console.log(productId) }, [productId])
  return (
    <div style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}