import { useState, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindows";
import styled from "styled-components";
import Link from "next/link";
import Switch from "./Switch";
import Categories, { CategoriesItems } from "../Categories";
import Search from "../SearchRecommendations/Search";
const ContainerNav = styled.nav`
  padding: 15px var(--padding-separate-lr);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled.i`
  color: #9a9aea;
  font-size: ${(props) => props.size} !important;
  margin: ${(props) => props.margin} !important;
`;
const ContItems = styled.div``;
const ContainerList = styled.div`
  & > ul {
    line-height: 35px;
    display: flex;
  }
  margin: 0 2rem;
`;
const Li = styled.li`
  font-weight: 500;
  font-size: 25px;
  margin: 0 1rem 0 0;
  & > a {
    color: var(--text-dark);
  }
`;
const ContLinks = styled.div`
  display: flex;
  align-items: center;
`
//data Links
const NavMobile = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const {width} = useWindowSize()
  useEffect(() => {
    setActiveMenu(false);
    setActiveSearch(false);
  }, []);
  return (
    <>
      <ContainerNav>
        <ContLinks>
          <Link href="/">
            <a>
              <Icon className="bx bxs-cube bx-lg" size="6rem"></Icon>
            </a>
          </Link>
          <ContainerList>
            <ul>
              <Li>
                <Link href={"/"}>
                  <a>All</a>
                </Link>
              </Li>
              <Li>
                <Link href={"/movies"}>
                  <a>Movies</a>
                </Link>
              </Li>
              <Li>
                <Link href={"/series"}>
                  <a>Series</a>
                </Link>
              </Li>
              <Li className="listcat">
                  <a>Categories</a>
                  <i className='bx bxs-down-arrow' style={{
                    color: "var(--text-dark)",
                    fontSize: 16
                  }}  ></i>
                <div>
                </div>
              </Li>
            </ul>
            {/* <Categories /> */}
          </ContainerList>
        </ContLinks>
        <ContItems>
          {/*deberia ir un switch */}
          <Icon
            onClick={() => {
              setActiveSearch(!activeSearch);
              setActiveMenu(false);
            }}
            size="4rem"
            margin="0 1rem 0 0"
            className="bx bx-search"
          ></Icon>
        </ContItems>
      </ContainerNav>
      <Search valuebool={activeSearch} />
    </>
  );
};

export default NavMobile;
