import React, { useState } from "react";
import { phonesData } from "./Product.data";
import { Card, Button } from "react-bootstrap";
import { useBootstrapMinBreakpoint } from "react-bootstrap/esm/ThemeProvider";

const Products = () => {
  const [items, setItems] = useState(phonesData);

  const decrementQty=(id)=>{
    const newItem=items.map((item)=>(
      item.id===id &&item.qty>1?{...item,qty:item.qty-1}:item
    ))
    setItems(newItem)
  }
  const incrementQty=(id)=>{
    const newItem=items.map((item)=>(
      item.id===id?{...item,qty:item.qty+1}:item
    ))
    setItems(newItem)
  }


  return (
    <div>
      <h1 className="bg-info text-white">Products</h1>

      {items.map((item) => (
        <div className="d-inline-flex" key={item.id}>
          <Card
            className="shadow p-3 m-3 bg-light rounded"
            style={{height : "28rem",width: "15rem"}}
            
          >
            <Card.Img
            style={{height : "9rem"}}
            className="p-2"
              variant="top"
              src={require(`./assets/${item.image}.png`)
            }
            />
            <Card.Body>
              <Card.Title className="text-primary">{item.model}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <h5>Price : ₹{item.price} </h5>
              <div>
                <p>
                  Qty :<Button onClick={()=>decrementQty(item.id)} className="m-1">-</Button>
                  {item.qty}
                  <Button onClick={()=>incrementQty(item.id)} className="m-1">+</Button>
                </p>
              </div>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
