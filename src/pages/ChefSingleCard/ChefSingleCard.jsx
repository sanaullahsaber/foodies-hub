import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const ChefSingleCard = () => {
  const chefCard = useLoaderData();
  console.log(chefCard);
  return (
    <Container className="mt-5 pt-5">
      <h2>This is view Recipe Page: {chefCard.length}</h2>
      <h4 className="text-center"> Recipe Details</h4>
      {
        chefCard.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
      }
    </Container>
  );
};

export default ChefSingleCard;
