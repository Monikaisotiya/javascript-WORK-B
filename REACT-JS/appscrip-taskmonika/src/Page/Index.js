import React, { useState, useEffect } from "react";
import "../css/style.css";
import {
  faChevronDown,
  faChevronLeft,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [Products, setProducts] = useState([]);
  const [SelectCategory, setSelectCategory] = useState("");
  const [SortBy, setSortBy] = useState("");
  const [isFilterHidden, setIsFilterHidden] = useState(false);
  const [IsChecked, setIsChecked] = useState(false);

  const handleCategoryClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleHideFilterClick = () => {
    setIsFilterHidden(!isFilterHidden);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!IsChecked);
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((Data) => setProducts(Data));
  }, []);

  const handalCategoryclick = (categ) => {
    setSelectCategory(categ);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = () => {
    if (IsChecked) {
      return Products;
    } else {
      if (SortBy === "high-to-low") {
        return Products.filter((product) => {
          if (SelectCategory === "") {
            return product;
          } else {
            return product.category === SelectCategory;
          }
        }).sort((a, b) => b.price - a.price);
      } else if (SortBy === "low-to-high") {
        return Products.filter((product) => {
          if (SelectCategory === "") {
            return product;
          } else {
            return product.category === SelectCategory;
          }
        }).sort((a, b) => a.price - b.price);
      } else if (SortBy === "productName-ascending") {
        return Products.filter((product) => {
          if (SelectCategory === "") {
            return product;
          } else {
            return product.category === SelectCategory;
          }
        }).sort((a, b) => a.title.localeCompare(b.title));
      } else if (SortBy === "productName-descending") {
        return Products.filter((product) => {
          if (SelectCategory === "") {
            return product;
          } else {
            return product.category === SelectCategory;
          }
        }).sort((a, b) => b.title.localeCompare(a.title));
      } else {
        return Products.filter((product) => {
          if (SelectCategory === "") {
            return product;
          } else {
            return product.category === SelectCategory;
          }
        });
      }
    }
  };
  return (
    <div className="layout">
      <div>
        <div className="container">
          <div className="layout1">
            <div className="contain">
              <h1>DISCOVER OUR PRODUCTS</h1>
              <p>
                I’ll teach you to write great product descriptions and show how
                successful businesses are using the very same techniques.
              </p>
            </div>
          </div>

          <div className="layout2">
            <div className="part1">
              <div className="layout-head1">
                <p>ITEM'S</p>
              </div>
              <div className="layout-head2">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <span onClick={handleHideFilterClick}>
                    {isFilterHidden ? "SHOW FILTER" : "HIDE FILTER"}
                  </span>
                </p>
              </div>
            </div>
            <div className="part2">
              <div className="layout-head3">
                <div>
                  <select
                    id="SHORT-BY"
                    value={SortBy}
                    onChange={handleSortByChange}
                  >
                    <option value="shortby">SHORT-BY</option>
                    <option value="high-to-low">Price High to Low</option>
                    <option value="low-to-high">Price Low to High</option>
                    <option value="productName-ascending">
                      Alphabetically, A-Z
                    </option>
                    <option value="productName-descending">
                      Alphabetically, Z-A
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-layout">
            {isFilterHidden ? null : (
              <div className="sidebar">
                <div className="sidebarmenu">
                  <div className="frist">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      value={IsChecked}
                      onChange={handleCheckboxChange}
                    />
                    SHOW ALL PRODUCTS
                  </div>

                  <div className="secound">
                    <div>
                      <div className="categoeis" onClick={handleCategoryClick}>
                        <h5>ALL CATEGORY</h5>
                        <FontAwesomeIcon
                          icon={isDropdownOpen ? faChevronUp : faChevronDown}
                          style={{ marginTop: "15px" }}
                        />
                      </div>

                      {isDropdownOpen && (
                        <div>
                          <li
                            onClick={() =>
                              handalCategoryclick("men's clothing")
                            }
                          >
                            men's clothing <span className="count">(4)</span>
                          </li>

                          <li
                            onClick={() =>
                              handalCategoryclick("women's clothing")
                            }
                          >
                            women's clothing <span className="count">(6)</span>
                          </li>

                          <li onClick={() => handalCategoryclick("jewelery")}>
                            jewelery <span className="count">(4)</span>
                          </li>

                          <li
                            onClick={() => handalCategoryclick("electronics")}
                          >
                            electronics <span className="count">(6)</span>
                          </li>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="sidebarright">
              <div
                className={`gridproduct ${isFilterHidden ? "full-width" : ""}`}
              >
                {sortedProducts().map((product, index) => (
                  <div key={index} className="products-item">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.category}</h3>
                    <h3>{product.price}</h3>
                    <p>{product.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
