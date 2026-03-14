"use client"

import { useState } from "react";
import styles from "./Home.module.sass";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

class AppDate {
  static parse(dateString) {
    if (!dateString) {
      return
    }

    const [year, month, day] = dateString.split('-').map((str) => parseInt(str, 10))
    return new AppDate(new Date(year, month - 1, day))
  }

  constructor(date = new Date()) {
    this.date = date
  }

  get cloneDate() {
    return new Date(this.date.getTime())
  }

  toString() {
    const month = (this.date.getMonth() + 1).toString().padStart(2, '0')
    const day = this.date.getDate().toString().padStart(2, '0')

    return `${this.date.getFullYear()}-${month}-${day}`
  }

  getDateInXMonth(n) {
    const date = (this.date.getMonth() + n) % 12
    const res = new Date(this.cloneDate.setMonth(date))

    return new AppDate(res)
  }

  getTime() {
    return this.date.getTime()
  }

  isAfter(date) {
    return this.date.getTime() > date.getTime()
  }
}

const initialTodoList = [
  {
    name: 'Task 1',
    deadline: new AppDate().getDateInXMonth(1),
    completed: false,
  },
  {
    name: 'Task 2',
    deadline: new AppDate().getDateInXMonth(2),
    completed: false,
  },
  {
    name: 'Task 3',
    deadline: new AppDate().getDateInXMonth(3),
    completed: false,
  },
]

export default function Home() {
  const [todoList, setTodoList] = useState(initialTodoList);

  const handleAddTodo = ({ name, deadline }) => {
    setTodoList((currentTodoList) => [
      ...currentTodoList,
      {
        name,
        deadline: AppDate.parse(deadline),
        completed: false,
      },
    ]);
  }

  return (
    <main className={styles.main}>
      <div className={styles["main__container"]}>
        <div className={styles["main__header"]}>
          <h1 className={styles["main__header-title"]}>Todo</h1>
        </div>
        <div className={styles["main__body"]}>
          <TodoForm onAddTodo={handleAddTodo}/>

          <TodoFilter />

          <div className={styles["list"]}>

            <TodoList
              todoList={todoList}
            />
          </div>
        </div>
      </div>
    </main>
  );
}