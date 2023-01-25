import { Center } from "@chakra-ui/react";
import React from "react";
import NotFound404 from "../404pagenotfound.png";

const styles = {
  width: "50%",
  height: "50%",
};

const notfound = () => {
  return (
    <React.Fragment>
      <div>
        <img src={NotFound404} alt="Image" style={styles} />
      </div>
    </React.Fragment>
  );
};

export default notfound;
