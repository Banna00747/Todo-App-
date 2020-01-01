import React from "react";
import Button from "@material-ui/core/Button";

const Link = ({ active, children, onClick }) => (
  <div>
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={active}
      style={{ marginLeft: "4px" }}
    >
      {children}
    </Button>
  </div>
);

export default Link;
