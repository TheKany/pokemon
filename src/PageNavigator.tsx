import React from "react";
import { Routes, Route } from "react-router-dom";
import PokemonDetail from "./Detail/PokemonDetail";
import PokeCardList from "./List/PokeCardList";

// interface Props {}

const PageNavigator = (): React.ReactElement => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<PokeCardList />}></Route>
        <Route path={"/pokemon/:name"} element={<PokemonDetail />}></Route>
      </Routes>
    </>
  );
};

export default PageNavigator;
