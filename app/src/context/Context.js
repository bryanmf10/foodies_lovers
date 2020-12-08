import React from "react";

const valoresPorDefecto = {
    name: "",
    setName: () => {},
    rating: "",
    setRating: () => {}
};
const Context = React.createContext(valoresPorDefecto);
export default Context;