// LayoutGeneral.tsx
import { Outlet } from "react-router-dom";
import CustomAppBar from "./CustomAppBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const LayoutGeneral = () => {
  return (
    <>
      <CustomAppBar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default LayoutGeneral;
