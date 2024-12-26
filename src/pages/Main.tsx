import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { notify, SweetIcon, SweetPosition } from "../helper/sweetAlert";
import ToggleColorMode from "../components/ToggleColorMode";



const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {

 
  const [todos, setTodos] = useState<ITodoType[]>([]); 

  // console.log(todos);

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url); 
      setTodos(data);
    } catch (error) {}
  };



  const addTodo: AddFn = async (task, category) => {
    try {
      await axios.post(url, { task, category, isDone: false });
      notify("Todo created!", SweetIcon.SUCCESS, SweetPosition.Center);
      getTodos();
    } catch (error) {
      notify("Todo not created!", SweetIcon.ERROR, SweetPosition.BottomEnd);
    }
  };
  


  
  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      notify("Todo updated!", SweetIcon.SUCCESS, SweetPosition.Center);
    } catch (error) {
      notify("Todo not updated!", SweetIcon.ERROR, SweetPosition.TopStart);
    } finally {
      getTodos();
    }
  };

  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      notify("Todo deleted!", SweetIcon.SUCCESS, SweetPosition.Center);
    } catch (error) {
      console.log(error);
      notify("Todo not deleted!", SweetIcon.ERROR, SweetPosition.TopStart);
    } finally {
      getTodos();
    }
  };

  const editTodo: EditFn = async (todo) => {    
    try {
        await axios.put(`${url}/${todo.id}`, todo);
        notify("Todo updated!", SweetIcon.SUCCESS, SweetPosition.Center);
        } catch (error) {
        console.log(error);
        notify("Todo not updated!", SweetIcon.ERROR, SweetPosition.TopStart);
        } finally {
        getTodos();
        }
  }

  //! sayfa acilir acilmaz ilk render olmasi icin kullaniyoruz
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ToggleColorMode>
      <Container>
        <Header />
        <AddTodoComp addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </Container>
    </ToggleColorMode>
  );
};

export default Main;
