import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./admin.module.css";

const logoSrc =
  "https://s3-alpha-sig.figma.com/img/b835/268d/b4eb433c38d738ee2d9025f4641af9e5?Expires=1685923200&Signature=XE6GcRrWJ1iX8HVhY1LuGIYAbvu4h5TL8JKHYuB~v1FkOffyUSu9hbJJzLQdZP-~N5J1iIwfnn0dEgbmSwx1ld4-DJS1FL7hhPgkGhYGJ0H~cy5Qbg~CF2k69E3Yz6olvjQjx6IcxPHOc4Nk3LG2-p4thv2o8EnNYdc4pa~oByStAx1NYhyz0HjDuNwF3xGiLOALCie~xvJU80f~9vX-L5rnmAQ-QKApZLie56Vvi8RMb59K3wjNH6DeqE0z6Lvk5~GIAvWM1vKrs5AAclXjRmfr4RDxr8O8aQ3v2uS8gwSVAfdCTExoAb2tlLfHLCzlOll450KvQYZx221jd4skHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const SideBar = () => {
  return (
    <span className={Style.sideBar}>
      <img src={logoSrc} className={Style.logo} alt="logo" />
      <span className={Style.navlinksBox}>
        <span className={Style.navlinksTitle}>PAGES</span>
        <span className={Style.navlinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? Style.ativeNavLink : Style.passiveNavLink
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive ? Style.ativeNavLink : Style.passiveNavLink
            }
          >
            Customers
          </NavLink>
        </span>
      </span>
    </span>
  );
};

export default SideBar;
