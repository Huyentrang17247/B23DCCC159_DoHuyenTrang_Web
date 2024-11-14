// ToDoItem.js
import React from 'react';
import '../App.css'; // Đảm bảo App.css nằm trong thư mục src
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ToDoItem = (props) => {
    return (
        <div className="ToDoItem">
            <input type="checkbox" />
            <div className='ItemContent'>
                <p className='Title'>{props.title}</p>
                <p className='DueDate'>{props.dueDate}</p>
            </div>
            <div className='Action'>
                <EditOutlined onClick={() => props.onUpdate(props.id)} />
                <DeleteOutlined onClick={() => props.onDelete(props.id)} />
            </div>
        </div>
    );
}
export default ToDoItem;