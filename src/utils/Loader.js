import { Box } from "@mui/material";
import React from "react";
import { Bars, Dna } from "react-loader-spinner";
import Backdrop from "@mui/material/Backdrop";

function Loader({ active }) {
  return (
    <Backdrop sx={{ zIndex: 100 }} open={active}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <Dna
          visible={true}
          height="80"
          width="80"
          zIndex={9999}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        {/* <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
      </Box>
    </Backdrop>
  );
}

export default Loader;
