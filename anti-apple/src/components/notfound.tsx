import React from "react";
import MediaQuery from "react-responsive";
import NotFound404 from "../404pagenotfound.png";
import Sidebar from "./Sidebar";
import { Stack } from "@chakra-ui/react";

const styles = {
  width: "50%",
  height: "50%",
};

const notfound = () => {
  return (
    <>
      <MediaQuery query="(max-width :900px)">
        <React.Fragment>
          <div>
            <img src={NotFound404} alt="Image" style={styles} />
          </div>
        </React.Fragment>
      </MediaQuery>

      <MediaQuery query="(min-width :901px)">
        <React.Fragment>
          <div>
            <Stack direction="row">
              <Sidebar />

              <img src={NotFound404} alt="Image" style={styles} />
            </Stack>
          </div>
        </React.Fragment>
      </MediaQuery>
    </>
  );
};

export default notfound;
