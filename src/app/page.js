import Image from "next/image";
import Link from "next/link";
import PetList from "./components/petlist";
import Header from "./components/header";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <>
      {/* <Header /> */}

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 md:px-6">
        <CategoryList />
      </div>

      <section className="grid w-full grid-cols-[repeat(auto-fit,minmax(0,300px))] justify-center gap-4">
        <Suspense>
          <PetListContainer searchParams={searchParams} />
        </Suspense>
      </section>
    </>
  );
}

async function PetListContainer({ searchParams }) {
  const { category } = await searchParams;

  return <PetList category={category} />;
}
