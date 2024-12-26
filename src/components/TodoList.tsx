import { Grid, Typography } from '@mui/material';
import React from 'react';
import TodoListItem from './TodoListItem';
import './style.css';

interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}

const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  const businessTodos = todos.filter((todo) => todo.category === 'business' && !todo.isDone);
  const personalTodos = todos.filter((todo) => todo.category === 'personal' && !todo.isDone);

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        mt: 3,
      }}
    >
      {/* Business Tasks */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        className="myscrool scrool-progress"
        sx={{
          minHeight: '350px',
          maxHeight: '350px',
          overflow: 'auto',
          border: '1px solid purple',
          borderRadius: '5px',
          boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.85)',
        }}
      >
        <Typography sx={{ color: '#bf360c', backgroundColor: '#f8bbd0' }} align="center" variant="h4">
          Business Tasks
        </Typography>
        {businessTodos.length ? (
          businessTodos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
          ))
        ) : (
          <Typography color="error" mt={3} align="center">
            No Business Tasks!
          </Typography>
        )}
      </Grid>

      {/* Personal Tasks */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        className="myscrool scrool-completed"
        sx={{
          minHeight: '350px',
          maxHeight: '350px',
          overflow: 'auto',
          border: '1px solid green',
          borderRadius: '0.5rem',
          boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.85)',
        }}
      >
        <Typography sx={{ color: 'green', backgroundColor: '#a5d6a7' }} align="center" variant="h4">
          Personal Tasks
        </Typography>
        {personalTodos.length ? (
          personalTodos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
          ))
        ) : (
          <Typography color="error" mt={3} align="center">
            No Personal Tasks!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;





// import { Grid, Typography } from '@mui/material'
// import React from 'react'
// import TodoListItem from './TodoListItem'
// import "./style.css"

// interface ITodoList extends ITodoListFn{
//   todos: ITodoType[]

// }

// const TodoList:React.FC<ITodoList> = ({todos,deleteTodo,toggleTodo,editTodo}) => {
//   const progressTodos = todos.filter((todo) => !todo.isDone)
//   const completedTodos = todos.filter((todo) => todo.isDone)
//   return (
//     <Grid
//     container
//     sx={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: "1rem",
//       mt: 3,
      
//     }}
//   >
//     <Grid
//       item
//       xs={12}
//       sm={8}
//       md={5}
//       position={"relative"}
//       className="myscrool scrool-progress"
//       sx={{
//         minHeight: "350px",
//         maxHeight: "350px",
//         overflow: "auto",
//         border: "1px solid purple",
//         borderRadius: "5px",
//         boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.85)",
//       }}
//     >
//       <Typography className="title" sx={{color :"#bf360c", backgroundColor:"#f8bbd0"}}  align="center" fontFamily={"monospace"} variant="h4">Bussines Tasks</Typography>
//       {progressTodos.length ? (
//         progressTodos.map((todo) => (
//           <TodoListItem
//             deleteTodo={deleteTodo}
//             toggleTodo={toggleTodo}
//             editTodo={editTodo}
//             todo={todo}
//             key={todo.id}
//           />
//         ))
//       ) : (
//         <Typography color="error" mt={3} align="center">No Task in progress!</Typography>
//       )}
//     </Grid>
//     <Grid
//       item
//       xs={12}
//       sm={8}
//       md={5}
//       position={"relative"}
//       className="myscrool scrool-completed"
//       sx={{
//         minHeight: "350px",
//         maxHeight: "350px",
//         overflow: "auto",
//         border: "1px solid green",
//         borderRadius: "0.5rem",
//         boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.85)",
//       }}
//     >
//       <Typography className="title" sx={{color:"green", backgroundColor:"#a5d6a7"}} align="center" fontFamily={"monospace"} variant="h4">Personel Tasks</Typography>
//       {completedTodos.length ? (
//         completedTodos.map((todo) => (
//           <TodoListItem
//             deleteTodo={deleteTodo}
//             editTodo={editTodo}
//             toggleTodo={toggleTodo}
//             todo={todo}
//             key={todo.id}
//           />
//         ))
//       ) : (
//         <Typography color="error"  mt={3} align="center">No Completed Todos!</Typography>
//       )}
//     </Grid>
//   </Grid>
//   )
// }

// export default TodoList