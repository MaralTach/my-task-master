import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useState } from "react";

const TodoListItem: React.FC<ITodoListFn & { todo: ITodoType }> = ({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEditClick = () => {
    setIsEditing(true); // Düzenleme moduna geç
  };

  const handleSaveClick = async () => {
    if (newTask !== todo.task) {
      await editTodo({ ...todo, task: newTask });
    }
    setIsEditing(false); // Düzenlemeyi bitir
  };

  return (
    <ListItem
      disableGutters
      sx={{ padding: "0.5rem", cursor: "pointer" }}
      secondaryAction={
        <>
          {isEditing ? (
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setNewTask(e.currentTarget.textContent || '')}
              style={{
                border: '1px solid #f7f6f6',
                borderRadius: '5px',
                padding: '15px',
                minWidth: '200px',
                backgroundColor: '#f7f6f6',
                color: 'black',
              }}
            >
              {newTask}
            </div>
          ) : (
            <ListItemText
              onClick={() => toggleTodo(todo)}
            />
          )}
          
          {isEditing && (
            <IconButton
              aria-label="save"
              onClick={handleSaveClick}
              sx={{ marginLeft: "10px" }}
            >
              <CheckCircleIcon sx={{ color: "blue" }} />
            </IconButton>
          )}

          <IconButton aria-label="edit" onClick={handleEditClick}>
            <EditIcon sx={{ "&:hover": { color: "green" } }} />
          </IconButton>

          <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
            <DeleteOutline sx={{ "&:hover": { color: "red" } }} />
          </IconButton>
        </>
      }
    >
      <ListItemText
        sx={{
          wordWrap: "break-word",
          backgroundColor: "gainsboro",
          borderRadius: "5px",
          p: "10px",
          color: "black",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        primary={todo.task}
        onClick={() => toggleTodo(todo)}
      />
    </ListItem>
  );
};

export default TodoListItem;





// import { IconButton, ListItem, ListItemText, TextField } from "@mui/material";
// import DeleteOutline from "@mui/icons-material/DeleteOutline";
// import EditIcon from "@mui/icons-material/Edit";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import React, { FC } from "react";
// import { useState } from "react";

// interface ITodoListItem extends ITodoListFn {
//   todo: ITodoType;
// }

// const TodoListItem: React.FC<ITodoListFn & { todo: ITodoType }> = ({
//   todo,
//   deleteTodo,
//   toggleTodo,
//   editTodo,
// }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTask, setNewTask] = useState(todo.task);

//   const handleEditClick = () => {
//     setIsEditing(true); // Düzenleme moduna geç
//   };

//   // Düzenleme kaydetme işlemi
//   const handleSaveClick = async () => {
//     if (newTask !== todo.task) {
//       // Eğer görevde değişiklik yapılmışsa
//       await editTodo({ ...todo, task: newTask });
//     }
//     setIsEditing(false); // Düzenlemeyi bitir
//   };

//   return (
//     <ListItem
//       disableGutters
//       sx={{ padding: "0.5rem", cursor: "pointer" }}
//       secondaryAction={
//         <>
//           {isEditing ? (
//             <>
//               <TextField
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 size="small"
//                 // sx={{ flex: 1,marginRight: "0" }}
//               />
//             </>
//           ) : (
//             <>
//               <ListItemText
//                 onClick={() => toggleTodo(todo)} // Todo'yu toggle et
//               />
//             </>
//           )}
//           {/* Kaydetme butonu */}
//           {isEditing && (
//             <IconButton
//               aria-label="save"
//               onClick={handleSaveClick} // Düzenlemeyi kaydet
//               sx={{ marginLeft: "10px" }}
//             >
//               <CheckCircleIcon sx={{ color: "blue" }} />
//             </IconButton>
//           )}

//           <IconButton aria-label="edit" onClick={handleEditClick}>
//             <EditIcon sx={{ "&:hover": { color: "green" } }} />
//           </IconButton>

//           <IconButton aria-label="comment">
//             <DeleteOutline
//               sx={{ "&:hover": { color: "red" } }}
//               onClick={() => deleteTodo(todo.id)}
//             />
//           </IconButton>
//         </>
//       }
//     >
//       <ListItemText
//         sx={{
//           wordWrap: "break-word",
//           backgroundColor: "gainsboro",
//           borderRadius: "5px",
//           p: "10px",
//           color: "black",
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
//         }}
//         primary={todo.task}
//         onClick={() => toggleTodo(todo)}
//       />
//     </ListItem>
//   );
// };



// export default TodoListItem;
