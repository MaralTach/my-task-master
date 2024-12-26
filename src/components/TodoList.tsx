import { Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import { useColorScheme } from '@mui/material/styles';
import './style.css';

interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}


const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  const [businessSearch, setBusinessSearch] = useState('');
  const [personalSearch, setPersonalSearch] = useState('');
  const { mode } = useColorScheme(); 

  const businessTodos = todos
    .filter((todo) => todo.category === 'business' && !todo.isDone)
    .filter((todo) => todo.task.toLowerCase().includes(businessSearch.toLowerCase()));

  const personalTodos = todos
    .filter((todo) => todo.category === 'personal' && !todo.isDone)
    .filter((todo) => todo.task.toLowerCase().includes(personalSearch.toLowerCase()));



  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        mt: 3,
        backgroundColor: mode === 'dark' ? '#1d1d1d' : '#fafafa',
        borderRadius: '15px',
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
        <Typography sx={{ color: '#bf360c', backgroundColor: '#f8bbd0'}} align="center" variant="h4">
          Business Tasks
        </Typography>

        <TextField
          label="Search Business Tasks"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          value={businessSearch}
          onChange={(e) => setBusinessSearch(e.target.value)}
        />

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

        <TextField
          label="Search Personal Tasks"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          value={personalSearch}
          onChange={(e) => setPersonalSearch(e.target.value)}
        />

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
