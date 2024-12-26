import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Typography,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

interface IAddTodoComp {
  addTodo: (task: string, category: string) => void;
}

const AddTodoComp: React.FC<IAddTodoComp> = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState(''); // Default category
  const [error, setError] = useState('');

  
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
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
      }}
    >
      <TextField
        label="New Todo"
        color="success"
        variant="outlined"
        value={task}
        onChange={handleTaskChange}
        inputProps={{ maxLength: 40 }}
        sx={{ width: '100%' }}
        error={!!error}
        helperText={error}
      />

      <FormLabel component="legend">Category</FormLabel>
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





// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
// } from '@mui/material';
// import SaveIcon from '@mui/icons-material/Save';

// interface IAddTodoComp {
//   addTodo: (task: string, category: string) => void;
// }

// const AddTodoComp: React.FC<IAddTodoComp> = ({ addTodo }) => {
//   const [task, setTask] = useState('');
//   const [category, setCategory] = useState('business'); // Default category

//   const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTask(event.target.value);
//   };

//   const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCategory(event.target.value);
//   };

//   const handleSaveClick = () => {
//     if (task.trim()) {
//       addTodo(task, category);
//       resetForm();
//     }
//   };

//   const resetForm = () => {
//     setTask('');
//     setCategory('business'); // Reset to default category
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: 2,
//         m: 2,
//         p: 2,
//         border: '1px solid black',
//         borderRadius: '10px',
//         boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
//       }}
//     >
//       <TextField
//         label="New Todo"
//         color="success"
//         variant="outlined"
//         value={task}
//         onChange={handleTaskChange}
//         inputProps={{ maxLength: 40 }}
//         sx={{ width: '100%' }}
//       />

//       <FormLabel component="legend">Category</FormLabel>
//       <RadioGroup
//         row
//         value={category}
//         onChange={handleCategoryChange}
//         sx={{ justifyContent: 'center' }}
//       >
//         <FormControlLabel value="business" control={<Radio />} label="Business" />
//         <FormControlLabel value="personal" control={<Radio />} label="Personal" />
//       </RadioGroup>

//       <Button
//         variant="contained"
//         color="warning"
//         endIcon={<SaveIcon />}
//         onClick={handleSaveClick}
//         disabled={!task.trim()}
//         sx={{ alignSelf: 'center' }}
//       >
//         Save Todo
//       </Button>
//     </Box>
//   );
// };

// export default AddTodoComp;



// // import { Box, Button, TextField, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
// // import React, { useState } from 'react';
// // import SaveIcon from '@mui/icons-material/Save';

// // interface IAddTodoComp {
// //   addTodo: (task: string, category: string) => void;
// // }

// // const AddTodoComp = ({ addTodo }: IAddTodoComp) => {
// //   const [task, setTask] = useState('');
// //   const [category, setCategory] = useState(''); // Varsayılan kategori

// //   const handleClick = () => {
// //     console.log(task, category);
// //     addTodo(task, category);
// //     setTask('');
// //     setCategory('business'); // Varsayılanı geri yükle
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         gap: 2,
// //         m: 2,
// //         p: 2,
// //         border: '1px solid black',
// //         borderRadius: '10px',
// //         boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
// //       }}
// //     >
// //       <TextField
// //         label="New Todo"
// //         color="success"
// //         variant="outlined"
// //         value={task}
// //         onChange={(e) => setTask(e.target.value)}
// //         inputProps={{ maxLength: 40 }}
// //         sx={{ width: '100%' }}
// //       />
// //       <FormLabel component="legend">Category</FormLabel>
// //       <RadioGroup
// //         row
// //         value={category}
// //         onChange={(e) => setCategory(e.target.value)}
// //         sx={{ justifyContent: 'center' }}
// //       >
// //         <FormControlLabel value="business" control={<Radio />} label="Business" />
// //         <FormControlLabel value="personal" control={<Radio />} label="Personal" />
// //       </RadioGroup>
// //       <Button
// //         variant="contained"
// //         color="warning"
// //         endIcon={<SaveIcon />}
// //         onClick={handleClick}
// //         disabled={!task.trim()}
// //       >
// //         Save Todo
// //       </Button>
// //     </Box>
// //   );
// // };

// // export default AddTodoComp;




// // import { Box, Button, TextField } from '@mui/material'
// // import React, { useState } from 'react'
// // import SaveIcon from '@mui/icons-material/Save';


// // interface IAddTodoComp {
// //     // addTodo: (task:string) => Promise<void>
// //     addTodo: AddFn;
// // }

// // const AddTodoComp = ({addTodo}: IAddTodoComp) => {
// //     const [task , setTask] = useState('')

// //     const handleClick = () => {
// //         console.log(task)
// //         addTodo(task)
// //         setTask('')
// //     }
 
// //   return (
   
// //         <Box
// //       sx={{
// //         display: { xs: "block", sm: "flex" },
// //         justifyContent: { xs: "flex-start", sm: "center" },
// //         m: { xs: 1, sm: "auto" },
// //         height: { xs: "120px", sm: "80px" },
// //         border: "1px solid black",
// //         borderRadius: "10px",
// //         boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
// //         color:"white"
// //       }}
// //     >
// //       <TextField
// //         id="outlined-basic"
// //         label="New Todo"
// //         color="success"
// //         sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1, 
        
// //       }}
// //         variant="outlined"
// //         value={task}
// //         onChange={(e) => setTask(e.target.value)}
// //         inputProps={{ maxLength: 40 }}
        
// //       />
// //       <Button
// //         variant="contained"
// //         color="warning"
// //         sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
// //         endIcon={<SaveIcon />}
// //         onClick={handleClick}
// //         disabled={!task.trim()}

// //       >
// //         Save Todo
// //       </Button>

// //     </Box>

// //   )
// // }

// // export default AddTodoComp