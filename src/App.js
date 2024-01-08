import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <h1>Pokemon</h1>
      <Pokemon name="Feuriegel" />
      <Pokemon name="Bisasam" />
      <Pokemon name="Raupi" />
      <Pokemon name="Flegmon" />
    </main>
  );
}

function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}

function Pokemon({ name }) {
  return (
    <>
      <Button>{name}</Button>
    </>
  );
}
