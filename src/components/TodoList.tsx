import { Grid, Typography } from '@mui/material'
import React from 'react'
import TodoListItem from './TodoListItem'

interface ITodoList {
  todos: ITodoType[]
  deleteTodo:DeleteFn
}

//React>FC

const TodoList:React.FC<ITodoList> = ({todos}) => {
  const progressTodos = todos.filter((todo) => !todo.isDone)
  const completedTodos = todos.filter((todo) => todo.isDone)
  return (
    <Grid container sx={{displey:"flex" , justifyContent:"center",
    alignItems:"center",gap:"1rem",mt:"1rem"
    }}>
        <Grid item xs={12} sm={8} md={6} sx={{minHeight:"350px",
          maxHeight:"350px",overflow:"auto" 
          ,border:"1px solid black",
          boxShadow:"4px 0px 5px black",
          borderRadius:"1rem"
        }}>
          <Typography>InProgress Todos</Typography>
        {
            progressTodos.length ? (
                progressTodos.map(todo=> <TodoListItem /> )
            ): <Typography color="error">No InProgress Todos!</Typography>
        }

      </Grid>
      <Grid item xs={12} sm={8} md={6} sx={{
        minHeight:"350px",
        maxHeight:"350px",
        overflow:"auto",
        border:"1px solid green",
        borderRadius:"1rem",
        boxShadow:"4px 0px 5px black",
      }}>
        <Typography>Completed Todos</Typography>
        {
            completedTodos.length ? (
                completedTodos.map(todo=> <TodoListItem /> )
            ): <Typography color="error">No Completed Todos!</Typography>
        }

        </Grid>
    </Grid>
  )
}

export default TodoList