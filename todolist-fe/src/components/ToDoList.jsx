import React, { useState, useEffect } from 'react';
import ToDoItem from "./ToDoItem";
import { PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import './App.css';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
    }, []);

    const handleToggle = (id) => {
        const todo = todos.find(todo => todo.id === id);
        axios.patch(`http://localhost:3000/api/todos/${id}/toggle`, { completed: !todo.completed })
            .then(response => {
                setTodos(todos.map(todo => todo.id === id ? response.data : todo));
            })
            .catch(error => console.error("Lỗi khi cập nhật:", error));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/api/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => console.error("Lỗi khi xóa:", error));
    };

    const handleEdit = (id) => {
    };

    return (
        <div className="ToDoList">
            <h1>My work 🎯</h1>
            <div>
                {todos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        dueDate={todo.dueDate}
                        completed={todo.completed}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
            <div style={{ marginTop: '5px', cursor: 'pointer' }}>
                <PlusCircleOutlined style={{ fontSize: '20px', color: '#d1453b' }} /> Add Task
            </div>
        </div>
    );
};

export default ToDoList;
