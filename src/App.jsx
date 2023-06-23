import React from "react";
import "./styles.css";
import { InputTodo } from "./components/inputoTodo.jsx";
import { IncompleteTodos } from "./components/incomplete";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  const [todoText, setTodoText] = React.useState("");
  const [incompleteTodos, setIncompleteTodos] = React.useState([]);
  const [completeTodos, setCompleteTodos] = React.useState([]);

  const onChengTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onclickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (i) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(i, 1);

    const newConmpleteTodos = [...completeTodos, incompleteTodos[i]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newConmpleteTodos);
  };

  const onClickBack = (i) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[i]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onchange={onChengTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>５つまで登録が可能です。</p>}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onclickDelete={onclickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
