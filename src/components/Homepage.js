import React from 'react'
import nature from "../assets/nature.jpg"


const Homepage = () => {
  return (
    <>
        <h1>Homepage</h1>
        <img className="profile-img" src={nature} alt="imageofnature"></img>
    </>
  );
}

export default Homepage