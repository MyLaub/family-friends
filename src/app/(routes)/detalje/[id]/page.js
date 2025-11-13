import Link from "next/link";
import Image from "next/image";
import FavoritElement from "@/app/components/FavoriteElement";

async function detalje({params}){
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);

  return (
    <div>
    <h1>{product.title}</h1>
 <FavoritElement id={product.id} />
    <Image
               loading="eager"
               alt="cat"
               src={product.thumbnail}
               width={300}
               height={200}
               className=" 
               rounded object-cover 
             "
             />
 </div>
 
  )
};
export default detalje;

