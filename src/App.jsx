import * as React from "react";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";
import { AuthProvider, useAuth } from "./context/AuthContext";
import useNavigation from "./hooks/useNavigation";

const BRANDING = {
  title: "Interfolio",
  logo: (
    <img
      src="https://vismaker.com/wp-content/uploads/2014/10/Lacoste1.jpg"
      alt="Interfolio Logo"
      style={{ height: 32 }}
    />
  ),
};

const AppContent = () => {
  const NAVIGATION = useNavigation();

  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
