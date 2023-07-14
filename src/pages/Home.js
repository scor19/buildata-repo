import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";

function Home(props) {
  return (
    <>
      <Header />
      <div className="text-center p-4">
        <h1 className="mb-8 mt-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Mejor Data
          </span>{" "}
          Más oportunidades.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-8">
          En BuilData nos concentramos en recopilar Data de alta calidad
          <br />
          ideal para el crecimiento economico de tu empresa.
        </p>
      </div>
      <div className="py-8 outline outline-offset-2 outline-2 outline-gray-200 gap-4">
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default Home;
