import React from "react";
import styled from "styled-components";
export default function Book() {
  return (
    <Wrapper>
      <div>
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
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="col-md-3">
              <div className="card">
                <div className="card-details">
                  <p className="text-title">Card title</p>
                  <p className="text-body">Here are the details of the card</p>
                </div>
                <button className="card-button">Add To Cart</button>
              </div>
            </div>
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
    padding: 1.8rem;
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
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
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
