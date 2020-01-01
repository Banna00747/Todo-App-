import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

let completedCount;
let remainingItem;

const ClearCompleteTodo = ({ todos, actions }) => {

  {
    todos.length !== 0 &&
      todos.reduce(
        (count, todo) => (completedCount = todo.completed ? count + 1 : count),
        0
      );
  }

  if (todos.length !== 0) {
    todos.reduce(
      (count, todo) => (remainingItem = !todo.completed ? count + 1 : count),
      0
    );
  } else {
    return "";
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid xs={12} md={6} item>
          {remainingItem
            ? remainingItem === 1
              ? `${remainingItem} item left`
              : `${remainingItem} items left`
            : ""}
        </Grid>
        <Grid xs={12} md={6} item style={{ marginLeft: 526 }}>
          {!!completedCount && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={actions.clearCompletedTodo}
            >
              Clear completed
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ClearCompleteTodo;
