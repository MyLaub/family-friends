import Link from "next/link";

async function detalje({params}){
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);

  return (
    <h1>{product.title}</h1>

 
  )
};
export default detalje;

