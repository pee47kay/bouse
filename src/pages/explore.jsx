import React from "react";

import { Link } from "react-router-dom";

import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../component/Slider";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">explore</p>
      </header>
      <main>
      <Slider/>
        <p>Recommendation</p>
        <p className="exploreCategoryHeading">
          Categories
        </p>
        <div className="exploreCategories">
          <Link to='/category/rent'>
            <img src={rentCategoryImage} alt="rentCategoryImage" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for Rent</p>
          </Link>
          <Link to='/category/sell'>
            <img src={sellCategoryImage} alt="sellCategoryImage" className="exploreCategoryImg" />
            <p className="exploreCategoryName"> Places for Sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
