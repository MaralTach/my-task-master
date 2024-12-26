# Todo App with TypeScript

This is a Todo app built with React and Material UI, allowing users to manage their tasks. The application provides features such as adding, editing, deleting tasks, toggling completion status, and categorizing tasks into "Business" and "Personal" categories. Additionally, the app supports light and dark modes.



<!-- ![Todo App with TypeScript Demo](https://github.com/MaralTach/my-app/blob/master/taskmaster.gif) -->

## Demo

You can view a live demo of the application [here](https://my-app-delta-snowy.vercel.app/).

## Features
- Add Todo: Create new tasks with a title and a category (Business/Personal).
- Edit Todo: Modify existing tasks.
- Delete Todo: Remove tasks from the list.
- Mark Todo as Done: Toggle the completion status of a task.
- Search: Filter tasks by category (Business/Personal).
- Dark/Light Mode: Switch between dark and light themes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Material-UI**: React components for faster and easier web development.
- **Axios**: Promise-based HTTP client for the browser and node.js.
- **SweetAlert2**: A beautiful, responsive, customizable, and accessible (WAI-ARIA) replacement for JavaScript's popup boxes.

## Usage
Add a task: Use the "New Todo" input to add a task. Select the category (Business/Personal) and click "Save Todo".
Search tasks: Use the search field to filter tasks by title within the Business and Personal sections.
Edit a task: Click the Edit icon to modify the task. Changes will be saved when you click the save icon.
Delete a task: Click the Delete icon to remove a task.
Mark task as done: Click the checkbox next to the task to mark it as completed. The task will appear crossed out.
Switch between themes: Use the theme toggle to switch between light and dark mode.

## Project Structure

```
Todoapp with TypeScript+React(CRA)


├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── AddTodoComp.tsx
│   │   ├── TodoListItem.tsx
│   │   └── TodoList.tsx
│   │   └── DarkLightMode.tsx
│   │   └── Header.tsx
│   │   └── ThemeContext.tsx
│   │   └── ToggleColorMode.tsx
│   ├── helper
│   │   └── sweetAlert.ts
│   ├── index.tsx
│   ├── pages
│   │   └── Main.tsx
│   ├── react-app-env.d.ts
│   └── types.d.ts
├── tsconfig.json
└── yarn.lock
```

## Endpoints

`GET /todos`: Fetch all todos.
`POST /todos`: Add a new todo.
`PUT /todos/:id`: Update a todo.
`DELETE /todos/:id`: Delete a todo.


