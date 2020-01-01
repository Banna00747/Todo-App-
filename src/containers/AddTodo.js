import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: 500,
      marginLeft: 110,
      boxShadow: "5px 5px 0px 0px rgba(100,100,100,.1)",
      borderRadius: "8px"
    }
  }
}));

const AddTodo = ({ dispatch }) => {
  let input;
  const classes = useStyles();

  const onHandleChange = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = "";
  };

  return (
    <div>
      <Paper>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <form className={classes.root} onSubmit={onHandleChange}>
              <TextField
                fullWidth
                id="outlined-basic"
                inputRef={node => (input = node)}
                label="Add Todo"
                width={{ marginLeft: 20 }}
                variant="outlined"
              />
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default connect()(AddTodo);
