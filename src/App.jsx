import * as React from "react";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";
import useNavigation from "./components/Navigation";

const BRANDING = {
  title: "Interfolio",
  logo: (
    <img
      src="https://visla.kr/wp/wp-content/uploads/2014/10/Lacoste1.jpg"
      alt="Interfolio Logo"
      style={{ height: 32 }}
    />
  ),
};

const App = () => {
  const NAVIGATION = useNavigation();
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
};

export default App;
