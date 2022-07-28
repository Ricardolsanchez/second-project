import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [productsInfo, setProductsInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [objectsToShow, setObjectsToShow] = React.useState(products);
  

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const selectedChangeFilter = (e) => {
    const { value } = e.target;
    
    if (value === "low-price") {
      const lowestPriceGoods = products.sort((el1, el2) =>
        el1.price.localeCompare(el2.price, undefined, { numeric: true })
      );
      setProductsInfo([...lowestPriceGoods]);
    }
    if (value === "high-price") {
    
      const highestPriceGoods = products.sort((el1, el2) =>
        el2.price.localeCompare(el1.price, undefined, { numeric: true })
      );
      setProductsInfo([...highestPriceGoods]);
    }
  };
  const searchProducts = (products) => {
    if (searchValue.toLowerCase().trim() === "") {
      setProductsInfo(products);
    } else {
      const seekedItem = productsInfo.filter(
        (product) =>
          product.name.toLowerCase().trim().includes(searchValue) ||
          product.category.toLowerCase().trim().includes(searchValue)
      );
      setProductsInfo(seekedItem);
    }
  };


  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50" onChange={selectedChangeFilter}>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard 
                item={item}
                products={products}
                searchValue={searchValue}
                searchProducts = {searchProducts}
                productsInfo ={productsInfo}
                />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;