import React from "react";
import Navigation from "./layout/Navigation";
import ViewBox from "./components/ViewBox";

const Home = (props) => {
  const handleLogOut = (isLoggedOut) => {
    isLoggedOut &&
      props.history.push({
        pathname: "/login",
      });
  };

  return (
    <div>
      <Navigation handleLogOut={handleLogOut} />
      <div id="container">
        <div className="item">
          <ViewBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
