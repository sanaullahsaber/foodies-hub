import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";


  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating, photo_url } = recipe;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(true);
    toast("Recipe bookmarked successfully!");
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ width: "100%",}}
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
              <div></div>
            </div>
            <div className="text-center mt-1">
              <Button
                className=""
                variant="success"
                disabled={isBookmarked}
                onClick={handleBookmarkClick}
              >
                <h6>
                  {isBookmarked ? "Bookmarked" : "Add to Bookmark"}{" "}
                  <FaRegBookmark></FaRegBookmark>{" "}
                </h6>
              </Button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
