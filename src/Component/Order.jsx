import React, { useState, useEffect } from "react";
import axios from "axios";

const Order = () => {
  const [showGif, setShowGif] = useState(false);
  const [orderBill, setOrderBill] = useState(null);

  useEffect(() => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
    }, 2500);
    fetchOrderBill(); // Move the fetchOrderBill function call here
  }, []);

  const fetchOrderBill = async () => {
    try {
      const response = await axios.get("http://localhost:8080/order");
      setOrderBill(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching order bill:", error);
    }
  };

  return (
    <div className="container">
      {showGif ? (
        <div className="text-center">
          <h3>Order Placed!!!</h3>
          <img
            src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif"
            alt="Loading..."
            style={{ width: 600, height: 600 }}
          />
        </div>
      ) : (
        <div className="card shadow-lg" style={{ width: "30rem" }}>
          <img
            className="card-img-top"
            src="https://cdn.dribbble.com/users/22930/screenshots/2177605/envelope.gif"
            alt="Card cap"
          />
          <div className="card-body shadow-lg">
            {orderBill ? (
              <>
                <h5 className="card-title">
                  Thank you, {orderBill.user.userName}
                </h5>
                <table className="table table-bordered table-shadow text-center card-body">
                  <thead>
                    <tr>
                      <th className="text-center">Item Name</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderBill.cart.cartItems.map((items) => (
                      <tr key={items.id}>
                        <td>{items.product.name}</td>
                        <td>{items.cust_quantity}</td>
                        <td>{items.product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h5 className="card-text">
                  Your total amount: {orderBill.amount}
                </h5>
                <h5 className="card-text">
                  Your Order ID: {orderBill.user.userName}
                  {orderBill.id}
                </h5>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
