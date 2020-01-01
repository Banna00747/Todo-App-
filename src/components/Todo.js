import React, { Component } from "react";
import classnames from "classnames";
import TodoInputText from "./TodoInputText";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { Paper, Grid } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

export default class Todo extends Component {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  toggleEditing = () => {
    this.setState({ editing: false });
  };

  render() {
    const { todo, completeTodo, deleteTodo, editTodo, divider } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <div>
          <Paper>
            <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
              <ListItem divider={divider}>
                <TodoInputText
                  text={todo.text}
                  editing={this.state.editing}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  id={todo.id}
                  toggleEditing={this.toggleEditing}
                />
              </ListItem>
            </Grid>
          </Paper>
        </div>
      );
    } else {
      element = (
        <div>
          <ListItem divider={divider}>
            <Checkbox
              className={makeStyles.root}
              onChange={() => completeTodo(todo.id)}
              disableRipple
              disableFocusRipple
              color="primary"
              checked={todo.completed}
            />
            <label onDoubleClick={this.handleDoubleClick}>
              <ListItemText primary={todo.text} />
            </label>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete Todo"
                color="secondary"
                onClick={() => deleteTodo(todo.id)}
              >
                <DeleteOutlined />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}
