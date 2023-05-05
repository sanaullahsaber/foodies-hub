import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaBookmark, FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
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
            style={{ width: "100%" }}
            src={photo_url}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{recipe_name}</h3>
            <div className="row">
              <div className="col-sm-6">
                <h5>Cooking Method:</h5>
                <p className="card-text">{cooking_method}</p>
              </div>
              <div className="col-sm-6">
                <h5>Ingredients:</h5>
                <p className="card-text">{ingredients}</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-6">
                <Rating
                  placeholderRating={rating}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span>{rating}</span>
              </div>
              <div className="col-sm-6">
                <div className="text-center mt-1">
                  <Button
                    className=""
                    variant="warning"
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
      </div>
    </div>
  );
};

export default Recipe;
