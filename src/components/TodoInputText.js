import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Paper, Grid, TextField } from "@material-ui/core";
import "../App.css";

export default class TodoInputText extends Component {
  state = {
    text: this.props.text || ""
  };

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      if (text.length === 0) {
        this.props.deleteTodo(this.props.id)
      } else {
        this.props.editTodo(this.props.id, text);
        this.props.toggleEditing();
      }
      if (this.props.newTodo) {
        this.setState({ text: "" });
      }
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };


  render() {
    return (
      <Paper>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <TextField
              className={classnames({
                edit: this.props.editing,
                "new-todo": this.props.newTodo
              })}
              type="text" 
              placeholder={this.props.placeholder}
              autoFocus={true}
              value={this.state.text}
              onChange={this.handleChange}
              onKeyDown={this.handleSubmit}
              margin='none'
              size="medium"
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

