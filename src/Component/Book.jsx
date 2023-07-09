import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Book(isloggedin) {
  const [booklist, setBooklist] = useState([]);
  const [search, setSearch] = useState("");
  // const [error, setError] = useState("");

  useEffect(() => {
    fetchbooklist();
  }, []);

  const fetchbooklist = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setBooklist(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleclick = async (pid) => {
    const id = await pid;
    console.log(id);
    axios
      .post(`http://localhost:8080/addToCart/${id}`)
      .then((response) => {
        // window.alert("Added To Cart");
        toast.success("Item added to cart ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
      });
  };
  return (
    <Wrapper>
      <ToastContainer />
      <div>
        <form onChange={(e) => setSearch(e.target.value)}>
          <img
            src="https://lordicon.com/icons/system/solid/42-search.gif"
            alt=""
            style={{ height: "35px", width: "35px" }}
          />
          <input
            type="text"
            name="text"
            className="input my-3"
            placeholder="Search By Tittle"
          ></input>
        </form>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {booklist
              .filter((item) => {
                return search.toLowerCase() === " "
                  ? item
                  : item.name.toLowerCase().includes(search) ||
                      item.name.includes(search);
              })
              .map((item) => (
                <div className="col-md-4" key={item.pid}>
                  <div className="card col mb-3" style={{ marginTop: "15px" }}>
                    <div className="card-details">
                      {/* <p className="text-title">Card title</p> */}
                      <img
                        src={item.imgUrl}
                        alt=""
                        style={{
                          height: "200px",
                          width: "150px",
                          position: "absolute",
                          top: "0x",
                          left: "0px",
                          marginLeft: "5px",
                          borderRadius: "25px",
                        }}
                      />
                      <ul
                        style={{
                          height: "200px",
                          width: "250px",
                          position: "absolute",
                          top: "0x",
                          right: "0px",
                          marginLeft: "5px",
                        }}
                      >
                        <h5> {item.name}</h5>

                        <li>Authors Name : {item.author}</li>
                        <br />
                        <li>Category : {item.category}</li>
                        <br />
                        <li>ISBN : {item.isbn}</li>
                      </ul>
                      {/* <p className="text-body">
                      Here are the details of the card
                    </p> */}
                      <h4
                        style={{
                          position: "absolute",
                          bottom: "0px",
                          marginBottom: "100px",
                          marginLeft: "135px",
                        }}
                      >
                        ₹ {item.price}/- Only
                      </h4>
                    </div>

                    <button
                      type="button"
                      className="card-button"
                      onClick={() => handleclick(item.pid)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .card {
    width: 400px;
    height: 400px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 10px;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
  }

  .card-details {
    color: black;
    height: 100%;
    gap: 0.5em;
    display: grid;
    place-content: center;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .text-body {
    color: rgb(134, 134, 134);
  }

  /*Text*/
  .text-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  /*Hover*/
  .card:hover {
    border-color: #008bf8;
    box-shadow: 1 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }

  /* Search Button*/

  .input {
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    background: #e8e8e8;
    box-shadow: 20px 20px 60px #c5c5c5, -20px -20px 60px #ffffff;
    transition: 0.3s;
  }

  .input:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
    transition: 0.3s;
  }
`;
