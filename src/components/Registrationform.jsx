import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registrationform.css";
const Registrationform = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    telegram: "",
    phoneno: "",
  });
  const { name, email, telegram, phoneno } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/abenezermaru/google_sheets/kuuxIDUvDUxdCqre?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, telegram, phoneno, new Date().toLocaleString()],
          ]),
        }
      );
      console.log(data);
      await response.json();
      setData({ ...data, name: "", email: "", telegram: "", phoneno: "" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="registrationform">
          <div className="formcontainer">
            <div className="backgroundform">
              <h2>Registration Form</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="telegram"
                placeholder="Telegram"
                value={telegram}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phoneno"
                placeholder="Phone No"
                value={phoneno}
                onChange={handleChange}
              />
              <button type="submit" value="Submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="linkabout">
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "19px",
            padding: "5px 15px",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        >
          Learn More
        </Link>
      </div>
    </>
  );
};

export default Registrationform;
