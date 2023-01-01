import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const SideNav = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .public {
    font-size: 1.1rem;
  }
`;

/* const BtnClick = styled.div`
  color: #525960;
  display: flex;
  width: 16.3rem;
  height: 3.4rem;
  padding: 1.2rem;
  line-height: 1.38rem;
  font-size: 1.3rem;
  &.focused {
    border-right: 0.3rem solid #f48125;
    background-color: #f1f2f3;
    color: #0d0d0e;
    font-weight: 700;
  }
`; */
const Public = styled.div`
  color: #525960;
  display: flex;
  width: 16.3rem;
  height: 3.4rem;
  padding: 1.2rem;
  line-height: 1.38rem;

  font-size: 1.1rem;
`;
const Tab = styled(NavLink)`
  color: #525960;
  display: flex;
  width: 16.3rem;
  height: 3.4rem;
  padding: 1.2rem;
  line-height: 1.38rem;
  font-size: 1.3rem;
  &.active {
    border-right: 0.3rem solid #f48125;
    background-color: #f1f2f3;
    color: #0d0d0e;
    font-weight: 700;
  }
`;
const TagsWord = styled.div`
  padding-left: 2rem;
`;

const LeftSidebar = () => {
  const [selected, setSelected] = useState();
  console.log(selected);
  const handleClick = (e) => {
    console.log(e.target);
    console.log(e.target.id);
    setSelected(e.target.id);
  };
  return (
    <SideNav onClick={handleClick}>
      <Tab
        to="/"
        id="home"
        className={({ isActive }) => (isActive ? "selected" : null)}
      >
        Home
      </Tab>
      <Public className="public">PUBLIC</Public>
      <Tab
        to="/questions"
        id="question"
        className={({ isActive }) => (isActive ? "selected" : null)}
      >
        <svg
          aria-hidden="true"
          className="svg-icon iconGlobe"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
        </svg>
        Questions
      </Tab>
      <Tab
        to="/tags"
        id="tags"
        className={({ isActive }) => (isActive ? "selected" : null)}
      >
        Tags
      </Tab>
    </SideNav>
  );
};

export default LeftSidebar;