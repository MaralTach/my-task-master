# Todo App

A simple and responsive Todo application built using React, TypeScript, Material-UI, and Axios. This app allows users to manage their tasks efficiently by adding, toggling, and deleting todos.

## Demo

You can view a live demo of the application [here](https://my-app-delta-snowy.vercel.app/).

## Features

- Add new todos.
- Mark todos as completed.
- Delete todos.
- Separate lists for in-progress and completed todos.
- Notifications for actions (add, update, delete).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Material-UI**: React components for faster and easier web development.
- **Axios**: Promise-based HTTP client for the browser and node.js.
- **SweetAlert2**: A beautiful, responsive, customizable, and accessible (WAI-ARIA) replacement for JavaScript's popup boxes.

## Usage

Add Todo: Enter a new task in the input field and click the "Save Todo" button.
Toggle Todo: Click on a todo item to mark it as completed or in-progress.
Delete Todo: Click the delete button next to a todo item to remove it from the list.

## Project Structure

src/
│
├── components/
│ ├── AddTodoComp.tsx
│ ├── Header.tsx
│ ├── TodoList.tsx
│ ├── TodoListItem.tsx
│ └── style.css
│
├── helper/
│ └── sweetAlert.ts
│
|
│
├── pages/
│ └── Main.tsx
│
├── App.tsx
├── index.tsx
└── types.d.ts

## Endpoints

`GET /todos`: Fetch all todos.
`POST /todos`: Add a new todo.
`PUT /todos/:id`: Update a todo.
`DELETE /todos/:id`: Delete a todo.
