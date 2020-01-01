import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";
import ClearCompleted from "../containers/ClearCompleted";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../App.css";

const App = () => (
  <div className="app">
    <Card className={Card.card} variant="outlined">
      <CardContent>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <ClearCompleted />
      </CardContent>
    </Card>
  </div>
);

export default App;
