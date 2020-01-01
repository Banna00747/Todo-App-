import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { List, Paper, Grid } from "@material-ui/core";

const TodoList = ({ todos, actions }) => (
  <div>
    <ul className="todo-list">
      <Paper>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          {todos.map(todo => (
            <Todo
              divider={todo.id !== todos.length - 1}
              key={todo.id}
              todo={todo}
              {...actions}
            />
          ))}
        </Grid>
      </Paper>
    </ul>
  </div>
);

export default TodoList;
