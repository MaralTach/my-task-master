import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import React, { FC } from "react";


interface ITodoListItem  extends ITodoListFn{
  todo: ITodoType;
}

const TodoListItem: FC<ITodoListItem> = ({todo,deleteTodo,toggleTodo}) => {
  return (
    <ListItem
      disableGutters
      sx={{ padding: "0.5rem", cursor: "pointer"}}
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteOutline sx={{ "&:hover": { color: "red" } }} onClick={()=>deleteTodo(todo.id)}/>
        </IconButton>
      }
    >
      <ListItemText sx={{wordWrap:"break-word", backgroundColor:"gainsboro",
      borderRadius:"5px", p:"10px", color:"black", 
      }} primary={todo.task} onClick={()=>toggleTodo(todo)} />
    </ListItem>
  );
};
export default TodoListItem;
