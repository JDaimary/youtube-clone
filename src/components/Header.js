import React, { useState } from "react";
import "../styles/Header.css";
import MenuIcons from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcons from "@material-ui/icons/Apps";
import NotificationIcons from "@material-ui/icons/Notifications";
import AvatarIcons from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="Header">
      <div className="header__left">
        <MenuIcons />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcons className="header__icon" />
        <NotificationIcons className="header__icon" />
        <AvatarIcons className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
