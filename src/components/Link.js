import React from "react";
import Button from "@material-ui/core/Button";

const Link = ({ active, children, onClick }) => (
  <div>
    <Button
      variant="contained"
      onClick={onClick}
      disabled={active}
      color="secondary"
      style={{ marginLeft: "4px", backgroundColor: "#333745" }}
    >
      {children}
    </Button>
  </div>
);

export default Link;
