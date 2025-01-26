import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import * as URL from "./routes/utils/_url";
import { Box } from "@mui/material";
export const App = () => {
  const location = useLocation();

  // Ocultar Navbar en la pantalla de login
  const showNavbar = location.pathname !== URL.ROUTE_URL_LOGIN;

  return (
      <div style={{ display: "flex", width: "100%", padding: "0px", margin: "0px" }}>


        <Box style={{  display: "flex", height: "auto"}}>
            {showNavbar && <NavBar />}

        </Box>
        <Box style={{  display: "flex" , overflow: "auto"}}>
          <Outlet />
        </Box>
      </div>
  );
};