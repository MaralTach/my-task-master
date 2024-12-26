import { Grid, Typography } from '@mui/material'
import React from 'react'
import TodoListItem from './TodoListItem'
import "./style.css"

interface ITodoList extends ITodoListFn{
  todos: ITodoType[]

}

const TodoList:React.FC<ITodoList> = ({todos,deleteTodo,toggleTodo,editTodo}) => {
  const progressTodos = todos.filter((todo) => !todo.isDone)
  const completedTodos = todos.filter((todo) => todo.isDone)
  return (
    <Grid
    container
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      mt: 3,
      
    }}
  >
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      position={"relative"}
      className="myscrool scrool-progress"
      sx={{
        minHeight: "350px",
        maxHeight: "350px",
        overflow: "auto",
        border: "1px solid purple",
        borderRadius: "5px",
      }}
    >
      <Typography className="title" color="error" align="center" fontFamily={"monospace"} variant="h4">Task in progress</Typography>
      {progressTodos.length ? (
        progressTodos.map((todo) => (
          <TodoListItem
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
          />
        ))
      ) : (
        <Typography color="error" mt={3} align="center">No Task in progress!</Typography>
      )}
    </Grid>
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      position={"relative"}
      className="myscrool scrool-completed"
      sx={{
        minHeight: "350px",
        maxHeight: "350px",
        overflow: "auto",
        border: "1px solid green",
        borderRadius: "0.5rem",
      }}
    >
      <Typography className="title" sx={{color:"green"}} align="center" fontFamily={"monospace"} variant="h4" >Completed Taskes</Typography>
      {completedTodos.length ? (
        completedTodos.map((todo) => (
          <TodoListItem
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleTodo={toggleTodo}
            todo={todo}
            key={todo.id}
          />
        ))
      ) : (
        <Typography color="error"  mt={3} align="center">No Completed Todos!</Typography>
      )}
    </Grid>
  </Grid>
  )
}

export default TodoList