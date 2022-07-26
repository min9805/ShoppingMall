import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  // 요청받은 정보를 담아줄 변수 선언
  const [id, setId] = useState(0);
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: "/v1/member/signUp",
      method: "POST",
      data: {
        id: id,
        account: account,
        email: email,
        phoneNumber: phoneNumber,
      },
      baseURL: "http://localhost:8080",
    }).then((res) => {
      callback(res.data);
    });
    alert(`회원가입완료`);
    window.location.href = "/";
  };

  // 변수 초기화
  function callback(str) {
    setId(str);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label htmlFor="id(Long)">
          <b>ID_Number(LONG)</b>
        </label>
        <input
          type="number"
          placeholder="Enter ID Number"
          name="id"
          required
          value={id}
          onChange={({ target: { value } }) => setId(value)}
        />

        <br />

        <label htmlFor="account">
          <b>Account</b>
        </label>
        <input
          type="text"
          placeholder="Enter Account"
          name="account"
          required
          value={account}
          onChange={({ target: { value } }) => setAccount(value)}
        />
        <br />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <br />
        <label htmlFor="phonenumber">
          <b>Phone Number</b>
        </label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="phonenumber"
          required
          value={phoneNumber}
          onChange={({ target: { value } }) => setPhoneNumber(value)}
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
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
