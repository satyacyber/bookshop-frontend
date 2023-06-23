import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/viewCart");
      setCartItems(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  const handleOrder = () => {
    navigate("/order");
  };

  const handleDelete = async (pId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/removeFromCart/${pId}`
      );
      console.log(response.data);

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product.pid !== pId)
      );
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const increment = async (pid) => {
    const id = await pid;
    console.log(id);
    try {
      axios.post(`http://localhost:8080/addToCart/${id}`);
      // eslint-disable-next-line

      setCartItems((prevItems) => {
        const updatedItems = prevItems.map((item) => {
          if (item.product.pid === pid) {
            return {
              ...item,
              cust_quantity: item.cust_quantity + 1,
            };
          }
          return item;
        });

        return [...updatedItems];
      });
    } catch (error) {
      // Handle the error
      console.log(error);
    }
  };

  return (
    <div>
      <div className="row " style={{ height: "500px" }}>
        <div className="col mid-3">
          <img
            src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif"
            alt=""
            style={{ height: "100%", width: "80%" }}
          />
        </div>
        <div className="col mid-3 mx-3">
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.product.name}</td>
                  <td> {item.product.price}</td>
                  <td>{item.cust_quantity}</td>
                  <td>
                    <button
                      className="btn mx-2"
                      style={{ borderRadius: "2px" }}
                      onClick={() => increment(item.product.pid)}
                    >
                      <AiOutlinePlus />
                    </button>
                    <button className="btn mx-2">
                      <AiOutlineMinus />
                    </button>
                    <button
                      className="btn mx-2"
                      onClick={() => handleDelete(item.product.pid)}
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary mx-3 my-3" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
