import Link from "next/link";
import Image from "next/image";
import { IoStarOutline } from "react-icons/io5";
import { Suspense } from "react";

const productList = ({ category }) => {
  return (
    <Suspense>
      <PetList category={category} />
    </Suspense>
  );
};

const PetList = async ({ category }) => {
  "use server";
  console.log(category);
  const url = category ? `https://dummyjson.com/products/category/${category}` : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();

  return products.map((product) => (
    <Link href={`/detalje/${product.id}`} key={product.id}>
      <article className="shadow-md p-2 rounded-2xl">
        <div className="rounded-2xl overflow-hidden">
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

          <div className="col-start-2 row-start-1 justify-self-end self-start m-3">
            <IoStarOutline />
          </div>
        </div>

        <div className="font-semibold font-stretch-extra-condensed tracking-wide">{product.title}</div>
      </article>
    </Link>
  ));
};

export default productList;
