import Link from "next/link";
import Image from "next/image";
import { IoStarOutline } from "react-icons/io5";

const PetList = () => {
  return (
    <>
      <Link href="/detalje">
        <article className="shadow-md p-2 rounded-2xl">
          {/* <div
            className="grid grid-cols-2"> 
            
            <Image 
            loading="eager"
            alt="cat" 
            src="https://placecats.com/neo/300/200/" 
            width={300} 
            height={200} 
            className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-2xl" col-span-full/>
            <IoStarOutline 
            className="col-start-2 col-end-3"/>
            </div> */}
          <div className="grid rounded-2xl overflow-hidden">
            <Image loading="eager" fill alt="cat" src="https://placecats.com/neo/300/200/" width={300} height={200} className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-2xl object-cover col-span-full" />

            <div className="col-start-2 row-start-1 justify-self-end self-start m-3">
              <IoStarOutline />
            </div>
          </div>

          <div className="font-semibold font-stretch-extra-condensed tracking-wide">Fido</div>
        </article>
      </Link>
    </>
  );
};

export default PetList;
