import React, { Component } from "react";
import Host from "../images/btn-1.png";
import Login from "../images/btn-3.png";
import Search from "../images/search.png";

export default function Header({ linkData }) {
  return (
    <header>
      <div>
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" />
        <span>
          <img src={Search} />
          <input type="search" placeholder="Search Opportunities" />
        </span>
      </div>
      <nav>
        <ul>
          {linkData.map((value) => (
            <li>
              <img src={value.image} />
              <p>{value.link}</p>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button>
          <img src={Host} />
          Host
        </button>
        <button>For Business</button>
        <button>
          Login
          <img src={Login} />
        </button>
      </div>
      <img src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/hamburger_icon.svg" />
    </header>
  );
}
