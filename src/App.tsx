import { Suspense, lazy, useEffect } from "react";
import { Theme } from "./styles/Theme";
import {
  ContainerLoader,
  ContainerProvider,
  GlobalStyle,
} from "./styles/AppStyled";
import { Route, Routes } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { useAction } from "./store/hooks/useAction";

const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));
const DownUp = lazy(() => import("./components/DownUp"));
const TransitionPage = lazy(() => import("./components/TransitionPage"));

const Home = lazy(() => import("./pages/Home"));
const Works = lazy(() => import("./pages/Works"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

const App = () => {
  const { loadData } = useAction();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <Suspense
        fallback={
          <ContainerLoader>
            <InfinitySpin width="200" color="#fff" />
          </ContainerLoader>
        }
      >
        <ContainerProvider>
          <Header />
          <Routes>
            <Route
              path={`/`}
              element={
                <TransitionPage>
                  <Home />
                </TransitionPage>
              }
            />
            <Route
              path={`/works`}
              element={
                <TransitionPage>
                  <Works />
                </TransitionPage>
              }
            />
            <Route
              path={`/aboutme`}
              element={
                <TransitionPage>
                  <AboutMe />
                </TransitionPage>
              }
            />
          </Routes>
          <DownUp />
        </ContainerProvider>
      </Suspense>
    </Theme>
  );
};

export default App;
