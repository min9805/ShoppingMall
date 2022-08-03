import React, { useState } from "react";
import axios from "axios";

function Product() {
  // 요청받은 정보를 담아줄 변수 선언
  const [prodName, setProdName] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState([]);

  const formData = new FormData();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(file);

    formData.append(
      "key",
      new Blob(
        [
          JSON.stringify({
            prodName: prodName,
            content: content,
            price: price,
          }),
        ],
        { type: "application/json" }
      )
    );
    formData.append("file", file);

    axios({
      url: "/v1/product/register",
      method: "POST",
      data: formData,
      baseURL: "http://localhost:8080",
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    alert(`상품등록완료`);
    //window.location.href = "/";
  };

  return (
    <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="container">
        <h1>Product Register</h1>
        <p>Please fill in this form to create an account.</p>

        <br />

        <label htmlFor="prodName">
          <b>Product Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Product Name"
          name="prodName"
          required
          value={prodName}
          onChange={({ target: { value } }) => setProdName(value)}
        />
        <br />
        <label htmlFor="file">
          <b>Product Image</b>
        </label>
        <input
          type="file"
          placeholder="Upload Image"
          name="file"
          multiple="multiple"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <label htmlFor="content">
          <b>Content</b>
        </label>
        <input
          type="text"
          placeholder="Enter Content"
          name="content"
          required
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
        />
        <br />
        <label htmlFor="price">
          <b>Price</b>
        </label>
        <input
          type="text"
          placeholder="Enter Price"
          name="price"
          required
          value={price}
          onChange={({ target: { value } }) => setPrice(value)}
        />

        <br />

        <label>
          <input type="checkbox" name="remember" /> Remember me
        </label>

        <br />

        <p>By creating an account you agree to our .</p>

        <div className="clearfix">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Regist
          </button>
        </div>
      </div>
    </form>
  );
}

export default Product;
