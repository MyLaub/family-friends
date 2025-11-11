import Image from "next/image";
import Link from "next/link";
import PetList from "./components/petlist";
import Header from "./components/header";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <>
      <Header />

      <CategoryList />

      <section className="p-2 grid grid-cols-2 place-items-center gap-4 justify-items-start">
        <Suspense>
          <PetListContainer seachParams={searchParams} />
        </Suspense>
      </section>
    </>
  );
}

async function PetListContainer(searchParams) {
  const category = await searchParams;

  return <PetList category={category}/>;
}
