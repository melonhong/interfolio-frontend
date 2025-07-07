import { Outlet } from "react-router-dom";
import MiniDrawer from "./MiniDrawer";

function Layout() {
  return (
    <MiniDrawer title="Interfolio">
      {/* Outlet을 children으로 넘김 */}
      <Outlet />
    </MiniDrawer>
  );
}

export default Layout;
