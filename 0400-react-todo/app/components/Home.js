"use client"

import {useRef, useState} from "react";
import styles from "./Home.module.sass";
import AppDate from "@/app/lib/AppDate";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const initialTodoList = [
  {
    id: 1,
    name: 'Task 1',
    deadline: new AppDate().getDateInXMonth(1),
    completed: false,
  },
  {
    id: 2,
    name: 'Task 2',
    deadline: new AppDate().getDateInXMonth(2),
    completed: false,
  },
  {
    id: 3,
    name: 'Task 3',
    deadline: new AppDate().getDateInXMonth(3),
    completed: false,
  },
]

export default function Home() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [showCompleted, setShowCompleted] = useState(false);
  const nextIdRef = useRef(initialTodoList.length + 1);

  const sortedTodoList = [...todoList].sort(
    (a, b) => a.deadline.getTime() - b.deadline.getTime()
  );

  const visibleTodoList = showCompleted
    ? sortedTodoList
    : sortedTodoList.filter((todo) => !todo.completed);

  const handleAddTodo = ({ name, deadline }) => {
    setTodoList((currentTodoList) => [
      ...currentTodoList,
      {
        id: nextIdRef.current++,
        name,
        deadline: AppDate.parse(deadline),
        completed: false,
      }
    ]);
  }

  const handleUpdateTodo = (todo, updates) => {
    setTodoList((currentTodoList) =>
      currentTodoList.map((currentTodo) =>
        currentTodo.id === todo.id
          ? {
              ...currentTodo,
              ...(updates.name !== undefined && { name: updates.name }),
              ...(updates.deadline !== undefined && {
                deadline: AppDate.parse(updates.deadline),
              }),
            }
          : currentTodo
      )
    );
  };
  
  const handleToggleCompleted = (todo, checked) => {
    setTodoList((currentTodoList) =>
      currentTodoList.map((currentTodo) =>
        currentTodo.id === todo.id ? { ...currentTodo, completed: checked } : currentTodo
      )
    )
  }

  const handleDeleteTodo = (todo) => {
    const confirmed = window.confirm("このタスクを削除しますか？");
    if (!confirmed) return;

    setTodoList((currentTodoList) =>
      currentTodoList.filter((currentTodo) => currentTodo.id !== todo.id)
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles["main__container"]}>
        <div className={styles["main__header"]}>
          <h1 className={styles["main__header-title"]}>Todo</h1>
        </div>
        <div className={styles["main__body"]}>
          <TodoForm onAddTodo={handleAddTodo} />

          <TodoFilter
            checked={showCompleted}
            onChange={setShowCompleted}
          />

          <div className={styles["list"]}>
            <TodoList
              todoList={visibleTodoList}
              showCompleted={showCompleted}
              onToggleCompleted={handleToggleCompleted}
              onDeleteTodo={handleDeleteTodo}
              onUpdateTodo={handleUpdateTodo}
            />
          </div>
        </div>
      </div>
    </main>
  );
}