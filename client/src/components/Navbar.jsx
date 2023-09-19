import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import Auth from "../utils/auth";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const loggedIn = Auth.loggedIn();

  const handleSignOut = () => {
    Auth.logout();
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-md bg-cgreen">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Nav>
            <Logo className="flex" to={"/"}>
              <img
                className="h-12 w-12 mr-4"
                src="/thyme.svg"
                alt="thyme logo"
              />
              <h1 className="font-dancing font-bold text-4xl text-cbrown">
                Thyme for Lunch
              </h1>
            </Logo>
          </Nav>
        </div>
        <div>
          <ul className="hidden md:flex">
            {loggedIn && (
              <>
                <li className="hover:scale-110">
                  <Link to="/myrecipes" className="cursor-pointer">
                    My Recipes
                  </Link>
                </li>
                <li className="hover:scale-110">
                  <Link to="/calendar" className="cursor-pointer">
                    Weekly Calendar
                  </Link>
                </li>
                <li className="hover:scale-110">
                  <Link to="/shopping" className="cursor-pointer">
                    Shopping List
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          {!loggedIn ? (
            <>
              <button
                className="border-none bg-transparent text-cbrown mr-4"
                onClick={() => (window.location.href = "/signin")}
              >
                Sign In
              </button>
              <button className="px-8 py-3" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          ) : (
            <button
              className="bg-corange text-cwhite px-8 py-3"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
        </div>
        <div className="md:hidden mr-4" onClick={toggleNav}>
          {!navOpen ? (
            <MenuIcon className="w-5 text-cbrown" />
          ) : (
            <XIcon className="w-5 text-cbrown" />
          )}
        </div>
      </div>
      <ul
        className={
          navOpen ? "md:hidden absolute bg-cgreen w-full px-8" : "hidden"
        }
      >
        {loggedIn && (
          <>
            <li className="border-b-2 border-cdarkgreen w-full">
              <Link to="/myrecipes" className="cursor-pointer">
                My Recipes
              </Link>
            </li>
            <li className="border-b-2 border-cdarkgreen w-full">
              <Link to="/calendar" className="cursor-pointer">
                Weekly Calendar
              </Link>
            </li>
            <li className="border-b-2 border-cdarkgreen w-full">
              <Link to="/shopping" className="cursor-pointer">
                Shopping List
              </Link>
            </li>
          </>
        )}
        {!loggedIn ? (
          <div className="flex flex-col my-4">
            <button
              className="bg-transparent text-cbrown px-8 py-3 mb-4"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </button>
            <button className="px-8 py-3" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex flex-col my-4">
            <button
              className="bg-corange text-cwhite px-8 py-3"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </ul>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default Navbar;
