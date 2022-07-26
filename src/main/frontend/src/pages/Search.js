import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/common/MemberList.css";

const Search = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/v1/member/all").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div className="member">
                <li>id : {user.id}</li>
                <li>account : {user.account}</li>
                <li>email : {user.email}</li>
                <li>phoneNumber : {user.phoneNumber}</li>
                <li>CreatedAt : {user.createdAt}</li>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
