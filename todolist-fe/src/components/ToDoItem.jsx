import React from 'react';
import { Checkbox, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './App.css';

const ToDoItem = ({ id, title, dueDate, completed, onToggle, onDelete, onEdit }) => {
    return (
        <div className="ToDoItem">
            <Checkbox checked={completed} onChange={() => onToggle(id)} />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
            <span>{dueDate}</span>
            <Button icon={<EditOutlined />} onClick={() => onEdit(id)} />
            <Button icon={<DeleteOutlined />} onClick={() => onDelete(id)} />
        </div>
    );
};

export default ToDoItem;
