"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/(routes)/action/action";
import { useFormStatus } from "react-dom";

const ResponseMessage = ({ state }) => {
  return (
    <>
      {state.error?.productName && <p className="text-red-600">{state.error.productName}</p>}
      {state.error?.productPrice && <p className="text-red-600">{state.error.productPrice}</p>}
      {state.succes === true && <p className="text-green-600">Tillykke din formular er sendt!</p>}
      {state.succes === false && <p className="text-red-600">Noget er gået galt </p>}
    </>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={`justify-center items-center px-4 py-2 rounded-lg text-white bg-blue-600 ${pending ? "opacity-50 cursor-not-allowed" : ""}`} disabled={pending}>
      {pending ? "Submitting" : "Submit product"}
    </button>
  );
};

const ProductForm = () => {
  const [state, postProduct] = useActionState(submitProduct, {
    succes: null,
    error: {},
    field: {},
  });
  return (
    <form action={postProduct}>
      {/* Synlig fejlbesked: */}
      <ResponseMessage state={state} />

      {/* {state.error?.productName && <p className="text-red-600">{state.error.productName}</p>} */}

      <input type="text" name="productname" placeholder="Product name..." className="rounded-lg border border-gray-300 px-3 py-2 " defaultValue={state.productName}></input>

      {/* {state.error?.productPrice && <p className="text-red-600">{state.error.productPrice}</p>} */}

      <input name="productprice" placeholder="Product price..." className="rounded-lg border border-gray-300 px-3 py-2 " defaultValue={state.productPrice}></input>
      <SubmitButton />
    </form>
  );
};

export default ProductForm;
