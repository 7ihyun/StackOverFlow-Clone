import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 16.4rem;
  overflow: auto;
`;

const SidebarList = styled.li`
  margin-bottom: 2rem;
  text-align: left;
  color: #525960;
  font-size: 1.3rem;
  padding-left: 1rem;
  margin-left: 1rem;

  .icon {
    font-size: 1.6rem;
    margin: 0 5px 0 0;
  }
  .public {
    font-size: 1.1rem;
  }
  .publicLists {
    font-size: 1.3rem;
    padding-left: 20px;
  }
  &:hover {
    color: hsl(210deg 8% 5%);
  }
`;

const LeftSidebar = () => {
  return (
    <SidebarContainer>
      <ul>
        <SidebarList>
          <Link to="/">Home</Link>
        </SidebarList>
        <SidebarList>
          <span className="public">PUBLIC</span>
        </SidebarList>
        <SidebarList>
          <Link to="/questions">
            <svg
              aria-hidden="true"
              class="svg-icon iconGlobe"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
            </svg>
            Questions
          </Link>
        </SidebarList>
        <SidebarList>
          <Link to="/tags" className="publicLists">
            Tags
          </Link>
        </SidebarList>
      </ul>
    </SidebarContainer>
  );
};

export default LeftSidebar;
