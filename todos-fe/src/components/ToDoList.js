// ToDoList.js
import React, { useState, useEffect } from 'react';
import ToDoItem from "./ToDoItem";
import { PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
    }, []);

    const addTodo = () => {
        const newTodo = { title: "New Task", dueDate: "2024-10-10 09:00" };
        axios.post('/todos', newTodo)
            .then(response => {
                setTodos([...todos, response.data]);
            })
            .catch(error => console.error("Lỗi khi thêm dữ liệu:", error));
    };

    const deleteTodo = (id) => {
        axios.delete(`/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => console.error("Lỗi khi xóa dữ liệu:", error));
    };

    const updateTodo = (id) => {
        const updatedData = { title: "Updated Task", dueDate: "2024-11-11 10:00" }; // Ví dụ cập nhật
        axios.put(`/todos/${id}`, updatedData)
            .then(response => {
                setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
            })
            .catch(error => console.error("Lỗi khi cập nhật dữ liệu:", error));
    };

    return (
        <div className="ToDoList" style={{ marginLeft: '10px' }}>
            <h1>My work 🎯</h1>
            <div>
                {todos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        dueDate={todo.due_date}
                        onDelete={deleteTodo}
                        onUpdate={updateTodo}
                    />
                ))}
            </div>
            <div style={{ marginTop: '5px', cursor: 'pointer' }} onClick={addTodo}>
                <PlusCircleOutlined style={{ fontSize: '20px', color: '#d1453b' }} /> Add Task
            </div>
        </div>
    );
};

export default ToDoList;