import React from "react";

export const InputTodo = (props) => {
  const { todoText, onchange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        placeholder="todoを入力"
        value={todoText}
        onChange={onchange}
        disabled={disabled}
        type="text"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
