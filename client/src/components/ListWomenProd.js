import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WomenProdCard from "./WomenProdCard";
import { Col, Container, Row } from "react-bootstrap";
import { getWomenProd } from "../redux/action";
import { Link } from "react-router-dom";

const ListWomenProd = () => {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWomenProd());
  }, [dispatch]);

  return (
    <div >
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col lg={true} sm={10}>
            <div className="listProduct">
            <h2 className='ourproducts'><i class="fa-brands fa-product-hunt"></i> Women's clothing</h2>
                    <div className='categorie'>
                        <ul>
                        <Link to="/" style={{color:"black",textDecoration: "none"}}><li>All clothing  </li></Link> 
                        <Link to="/men" style={{color:"black" ,textDecoration: "none"}}><li>Men's clothing </li></Link>
                        <Link to="/women" style={{color:"black" ,textDecoration: "none"}}><li>Women's clothing</li></Link>
                        </ul>
                    </div>
              {products &&
                React.Children.toArray(
                  products.map((el) => <WomenProdCard woman={el} />)
                )}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListWomenProd;
