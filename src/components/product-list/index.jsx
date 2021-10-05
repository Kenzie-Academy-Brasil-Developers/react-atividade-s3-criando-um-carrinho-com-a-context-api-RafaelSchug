import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

import { Container, List } from "./style";

const ProductList = ({ type }) => {

  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
      <Container>
        {type === "catalogue" ? <h3>Catálogo</h3> : <h3>Carrinho</h3>} 
        <List>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index}>
              <h4>{item.name} </h4>
              <p>Valor: {item.price}</p>
              <Button type={type} item={item} />
            </li>
          ))}
        {type === "cart" &&
          cart.map((item, index) => (
            <li key={index}>
              <h4>{item.name} </h4>
              <p>Valor: {item.price}</p>
              <Button type={type} item={item} />
            </li>
          ))}
        </List>
      </Container>
  );
};

export default ProductList;
