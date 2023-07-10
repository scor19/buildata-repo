import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

function Home(props) {
  return (
    <>
      <Header />
      <div class="text-center p-4">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Mejor Data
          </span>{" "}
          Más oportunidades.
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          En BuilData nos concentramos en recopilar Data de alta calidad, ideal
          para el crecimiento economico de tu empresa.
        </p>
      </div>
      <div class="outline outline-offset-2 outline-2 outline-gray-200 grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3">
          <Card />
        </div>
        <div class="col-span-2">
          <Card />
        </div>
        <div class="row-span-2 col-span-2">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
