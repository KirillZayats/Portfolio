import { useEffect, useRef, useState } from "react";
import ElementList from "./ElementList";
import {
  ContainerStyle,
  HeaderStyle,
  NavStyle,
  ListNavStyle,
} from "../../styles/header/HeaderStyled";
import Logotype from "../Logotype";
import Sidebar from "./Sidebar";
import { InputCheckBoxStyle } from "../../styles/header/SidebarStyled";
import Dropdown from "./Dropdown";
import { useLocation } from "react-router-dom";
import { userTypeSelector } from "../../store/hooks/userTypeSelector";

const Header = () => {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [buttonDownUp, setButtonDownUp] = useState<HTMLElement | null>(null);
  const { pathname } = useLocation();
  const refIntut = useRef<HTMLInputElement>(null);

  const { name, data } = userTypeSelector((state: any) => state.language);
  const [listNav, setListNav] = useState<[]>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setListNav(data["0"].Ru.nav_links)
        : setListNav(data["0"].En.nav_links);
    }
  }, [name]);

  useEffect(() => {
    setActiveElementNav();
  }, [listNav]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthWindow(window.innerWidth);
      toggleScroll();
    });
  }, []);

  useEffect(() => {
    setButtonDownUp(document.getElementById("down-up"));
    document.addEventListener("scroll", scrollPage);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    closeSidebar();
    setActiveElementNav();
  }, [pathname]);

  const setActiveElementNav = () => {
    document.querySelector(".active") &&
      document.querySelector(".active")?.classList.remove("active");
    let noActiveContainers = document.querySelectorAll(".no-active");
    if (noActiveContainers && noActiveContainers.length > 0) {
      if (pathname.includes("works")) {
        noActiveContainers[1].classList.add("active");
      } else if (pathname.includes("about")) {
        noActiveContainers[2].classList.add("active");
      } else {
        noActiveContainers[0].classList.add("active");
      }
    }
  };

  const closeSidebar = () => {
    if (
      window.innerWidth < 1024 &&
      refIntut.current &&
      refIntut.current?.checked
    ) {
      refIntut.current.checked = false;
      !refIntut.current?.checked &&
        document.querySelector("body")?.classList.remove("no-scroll");
    }
  };

  const scrollPage = () => {
    if (window.scrollY >= 500) {
      viewButtonDownUp();
    }
    if (window.scrollY < 500) {
      hideButtonDownUp();
    }
  };

  const viewButtonDownUp = () => {
    if (buttonDownUp != null) {
      buttonDownUp.style.opacity = "1";
      buttonDownUp.style.bottom = "20px";
    }
  };

  const hideButtonDownUp = () => {
    if (buttonDownUp != null) {
      buttonDownUp.style.opacity = "0";
      buttonDownUp.style.bottom = "-50px";
    }
  };

  const toggleScroll = () => {
    if (widthWindow >= 1024) {
      document.querySelector("body")?.classList.remove("no-scroll");
    } else {
      refIntut.current?.checked
        ? document.querySelector("body")?.classList.add("no-scroll")
        : document.querySelector("body")?.classList.remove("no-scroll");
    }
  };

  const toggleBurgerMenu = () => {
    toggleScroll();
  };

  return widthWindow >= 1024 ? (
    <HeaderStyle>
      <ContainerStyle>
        <Logotype />
        <NavStyle>
          <ListNavStyle>
            {listNav &&
              listNav.map((element, index) => (
                <ElementList
                  key={index}
                  textElement={element[0]}
                  link={element[1]}
                  closeSidebar={closeSidebar}
                />
              ))}
          </ListNavStyle>
        </NavStyle>
        <Dropdown closeSidebar={closeSidebar} />
      </ContainerStyle>
    </HeaderStyle>
  ) : (
    <HeaderStyle>
      <ContainerStyle>
        <Logotype />
        <InputCheckBoxStyle
          type="checkbox"
          id="checked"
          ref={refIntut}
          onClick={toggleBurgerMenu}
        />
        <Sidebar />
        <NavStyle>
          <ListNavStyle>
            {listNav &&
              listNav.map((element, index) => (
                <ElementList
                  key={index}
                  textElement={element[0]}
                  link={element[1]}
                  closeSidebar={closeSidebar}
                />
              ))}
          </ListNavStyle>
          <Dropdown closeSidebar={closeSidebar} />
        </NavStyle>
      </ContainerStyle>
    </HeaderStyle>
  );
};

export default Header;
