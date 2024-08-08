import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Navbar = () => {


  return (
    <nav>
      <div className="nav-div">
        <main >
          <NavLink to="/" >Home</NavLink>
          <NavLink ClassName="active" to="/feature" >What is GPT?</NavLink>
          <NavLink ClassName="active" to="/cta" >OpenAI</NavLink>
          <NavLink ClassName="active" to="/casestudies">Case Studies</NavLink>
        </main>
        <div className="btns">
          <button>Sign in</button>
          <button>Sign Up</button>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
