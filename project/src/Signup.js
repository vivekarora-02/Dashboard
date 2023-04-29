import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [isDonor, setIsDonor] = useState(false);
  const [address, setAddress] = useState("");
  const [organs, setOrgans] = useState([]);
  

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: handle signup logic
  }

  return (
    <div>
      <h1><center>Signup</center></h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Age
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <label>
          Gender
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </label>
        <label>
          Contact Number
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Blood Group
          <input
            type="text"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          />
        </label>
        <label>
          Are you a donor?
          <input
            type="checkbox"
            checked={isDonor}
            onChange={(e) => setIsDonor(e.target.checked)}
          />
        </label>
        {isDonor && (
          <>
            <label>
              Address
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            <label>
              Organs to Donate
              <select
                multiple
                value={organs}
                onChange={(e) =>
                  setOrgans(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                <option value="heart">Heart</option>
                <option value="liver">Liver</option>
                <option value="lung">Lung</option>
                <option value="kidney">Kidney</option>
                <option value="pancreas">Pancreas</option>
                <option value="intestine">Intestine</option>
              </select>
            </label>
          </>
        )}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
 export default Signup;