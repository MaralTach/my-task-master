import {Checkbox,IconButton, ListItem, ListItemText } from "@mui/material";
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
  const [isChecked, setIsChecked] = useState(false); 

  const handleEditClick = () => {
    setIsEditing(true); 
  };

  const handleSaveClick = async () => {
    const trimmedTask = newTask.trim();

    if (trimmedTask && trimmedTask !== todo.task) {
      await editTodo({ ...todo, task: trimmedTask });
    }

    setIsEditing(false); 
  };

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked); 
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
              onBlur={(e) => {
                const newText = e.currentTarget.textContent?.trim() || '';
                // Eğer metin boş değilse, yeni değeri kaydet
                if (newText) {
                  setNewTask(newText);
                }

              }}
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

      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange} 
        sx={{ marginRight: "10px" }}
      />

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
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
          textDecoration: isChecked ? "line-through" : "none",
          opacity: isChecked ? 0.6 : 1, 
        }}
        primary={todo.task}
      />
    </ListItem>
  );
};

export default TodoListItem;


