import React from "react";
import { Button } from "react-bootstrap";
import { FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating, photo_url } =
    recipe;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ width: "100%", height: "100%" }}
            src={photo_url}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title"> {recipe_name}</h3>
            <p className="card-text">
              <h5>Cooking Method:</h5> {cooking_method}
              <h6>Ingredient:</h6> {ingredients}
            </p>
            <div className="d-flex">
              <div className="flex-grow-1">
                <Rating
                  placeholderRating={rating}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span>{rating}</span>
              </div>
              <div>
                <h6>
                  Add to BookMark <FaRegBookmark></FaRegBookmark>{" "}
                </h6>
              </div>
            </div>
            <div className="text-center mt-1">
              <Link to='/'>
                <Button className="" variant="success">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
