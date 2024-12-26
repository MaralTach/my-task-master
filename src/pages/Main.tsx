import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { notify, SweetIcon, SweetPosition } from "../helper/sweetAlert";
import ToggleColorMode from "../components/ToggleColorMode";

// todo state'ti api'den gelen  icin state'in type'na objeler icin veri tanimlamasini yapmak icin interface kullaniyoruz

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";
//! statik degisken varsa component disinda tanimlanmasi daha iyidir. state degistiginde component tekrar render edilir ve yeniden olustugu icin bellekde yeni bir alan demek.onun icin scopun disinda tanimlamakda yarar var

const Main = () => {
  // const [todos, setTodos] = useState([]as ITodoType[]) //type'i tnimlamak  1nji yontem
  // const [todos, setTodos] = useState<ArrayITodoType>>([])2nji yontem

  // todo'lari bir yerde toplamak icin anlik degisimleri ui'yansitmak icin kullaniyoruz
  const [todos, setTodos] = useState<ITodoType[]>([]); //yaygin kullanim 3nji yontem

  console.log(todos);

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url); //axiosa type belirlemek
      setTodos(data);
    } catch (error) {}
  };

  // const addTodo = async (task:string) => {
  //    try {

  //    } catch (error) {

  //    }
  // }

  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(url, { task, isDone: false });
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
