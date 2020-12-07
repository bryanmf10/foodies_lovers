import React from "react";
import Context from "./Context";

const valoresPorDefecto = {
  name: "",
  setName: name => (valoresPorDefecto.name = name),
  rating: "",
  setRating: rating => (valoresPorDefecto.rating = rating),
};

const ContenedorContexto = props => (
  <Context.Provider value={valoresPorDefecto}>
    {props.children}
  </Context.Provider>
);

export default ContenedorContexto;