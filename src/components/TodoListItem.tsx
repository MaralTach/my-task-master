import { IconButton, ListItem, ListItemText } from "@mui/material"
import DeleteOutline from "@mui/icons-material/DeleteOutline"

const TodoListItem = () => {
    return (
        <ListItem
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteOutline />
        </IconButton>
      }
    >
      <ListItemText primary={`Line item`} />
    </ListItem>
    )
}
export default TodoListItem