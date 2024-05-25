import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import AddTodoComp from '../components/AddTodoComp'
import TodoList from '../components/TodoList'




const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos"

const Main = () => {
    // const [todos, setTodos] = useState([]as ITodoType[]) //type'i tnimlamak  1nji yontem
    // const [todos, setTodos] = useState<ArrayITodoType>>([])2nji yontem
    const [todos, setTodos] = useState<ITodoType[]>([])  //yaygin kullanim 3nji yontem

    console.log(todos)

    const getTodos = async () => {
        try {
            const {data} = await axios<ITodoType[]>(url)  //axiosa type belirlemek
            setTodos(data)
        } catch (error) {
            
        }
    }

    // const addTodo = async (task:string) => {
    //    try {
        
    //    } catch (error) {
        
    //    }
    // }

   

    const addTodo: AddFn = async (task) => {
        try {
            await axios.post(url, {task, isDone: false})
            getTodos()
        } catch (error) {
            
        }
    }

    const toggleTodo:ToggleFn = async (todo) => {
        try {
            await axios.put(url{...todo, isDone: !todo.isDone})
        } catch (error) {
            
        }
    }
   
    const deleteTodo:DeleteFn = async (id) => {
        try {
            await axios.delete(`${url}/${id}`)

        } catch (error) {
            
        }
    }

    useEffect(() => {
        getTodos()
    }, [])


  return (
    <Container>
        <Header />
        <AddTodoComp addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todos} />
    </Container>
  )
}

export default Main
