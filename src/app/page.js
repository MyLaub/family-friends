"use client";
import Image from "next/image";
import Link from "next/link";
import PetList from "./components/petlist";
import Header from "./components/header";

export default function Home() {
  return (
    <Link href="/detalje">
      <Header />

      <section className="grid grid-cols-2 place-items-center gap-4 justify-items-start">
        <h1>Velkommen til PetList</h1>
        <PetList />
      </section>
    </Link>
  );
}
