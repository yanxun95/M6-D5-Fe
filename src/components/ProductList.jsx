import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [shoppingCart, setShoppingCart] = useState(null);

  useEffect(() => {
    const getProductList = async () => {
      try {
        let response = await fetch(process.env.REACT_APP_BE_URL + "/products");
        let product = await response.json();
        setProducts(product);
      } catch (error) {
        console.log(error);
      }
    };
    getProductList();
  }, []);

  useEffect(() => {
    const getShopingCart = async () => {
      try {
        let response = await fetch(
          process.env.REACT_APP_BE_URL + "/shoppingcart"
        );
        let shoppingCartData = await response.json();
        console.log(shoppingCartData);
        setShoppingCart(shoppingCartData);
        console.log("this:", shoppingCart);
      } catch (error) {
        console.log(error);
      }
    };
    getShopingCart();
  }, []);

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1rem",
      }}
    >
      <Row>
        <Col md={8} style={{ display: "flex" }}>
          {products &&
            products.map((product) => (
              <Card style={{ width: "18rem", margin: "1rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Card.Text>Categories:</Card.Text>
                  {product.categories.map((category) => (
                    <Card.Text>{category.categoryName}</Card.Text>
                  ))}
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Row>
      <div>
        Shopping Cart
        <ListGroup>
          {shoppingCart &&
            shoppingCart[0].products.map((item) => (
              <ListGroup.Item>{item.name}</ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default ProductList;
