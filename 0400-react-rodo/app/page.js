"use client";

import { useState } from "react";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "@/app/components/TodoForm";
import TodoList from "@/app/components/TodoList";
import TodoListItem from "@/app/components/TodoListItem";

export default function Home() {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__header">
          <h1 className="main__header-title">Todo</h1>
        </div>
        <div className="main__body">
          <TodoForm />

          <div className="list">
            <TodoFilter />

            <TodoList />

            <TodoListItem />
          </div>
        </div>
      </div>
    </main>
  );
}
