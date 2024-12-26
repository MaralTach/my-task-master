import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useColorScheme } from '@mui/material/styles';

interface IAddTodoComp {
  addTodo: (task: string, category: string) => void;
}

const AddTodoComp: React.FC<IAddTodoComp> = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState(''); // Default category
  const [error, setError] = useState('');
  const { mode } = useColorScheme(); 

  
  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
    if (event.target.value.trim()) {
      setError('');
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleSaveClick = () => {
    if (!task.trim()) {
      setError('Task cannot be empty');
      return;
    }
    addTodo(task, category);
    resetForm();
  };

  const resetForm = () => {
    setTask('');
    setCategory('business'); // Reset to default category
    setError('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        m: 2,
        p: 2,
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
        backgroundColor: mode === 'dark' ? '#2e2e2e' : '#fafafa',
      }}
    >
      <TextField
        label="New Todo"
        color="success"
        variant="outlined"
        value={task}
        onChange={handleTaskChange}
        inputProps={{ maxLength: 20 }}
        sx={{ width: '80%' }}
        error={!!error}
        helperText={error}
      />

      {/* <FormLabel component="legend">Category</FormLabel> */}
      <RadioGroup
        row
        value={category}
        onChange={handleCategoryChange}
        sx={{ justifyContent: 'center' }}
      >
        <FormControlLabel value="business" control={<Radio />} label="Business" />
        <FormControlLabel value="personal" control={<Radio />} label="Personal" />
      </RadioGroup>

      <Button
        variant="contained"
        color="warning"
        endIcon={<SaveIcon />}
        onClick={handleSaveClick}
        disabled={!task.trim()}
        sx={{ alignSelf: 'center' }}
      >
        Save Todo
      </Button>

      <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
        Add a task and select a category before saving.
      </Typography>
    </Box>
  );
};

export default AddTodoComp;
