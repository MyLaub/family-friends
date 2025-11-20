"use client";
import { useActionState } from "react";
import { submitProduct } from "../action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log(state);
  return (
    <div>
    
        {state.succes &&(
            <p className="text-green-600">Tillykke din formular er sendt!</p>)}

    <form action={postProduct}>

        {/* Synlig fejlbesked: */}

        {state.error?.productName && 
        <p className="text-red-600">{state.error.productName}</p>}

      <input 
      type="text" 
      name="productname" 
      placeholder="Product name..." 
      className="rounded-lg border border-gray-300 px-3 py-2 "
      defaultValue={state.productName}>
      </input>
      <button 
      type="submit" 
      className="justify-center items-center px-4 py-2 rounded-lg text-white bg-blue-600 ">
        Submit product
      </button>
    </form>
    </div>
  );
};

export default addProduct;
