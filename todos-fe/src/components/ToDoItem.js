// ToDoItem.js
import React from 'react';
import '../App.css'; // Đảm bảo App.css nằm trong thư mục src
import { format } from 'date-fns';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ToDoItem = (props) => {
    const dueDateFormat = format(new Date(props.dueDate), 'dd MMMM yyyy HH:mm');
    return (
        <div className="ToDoItem">
            <input type="checkbox" />
            <div className='ItemContent'>
                <p className='Title'>{props.title}</p>
                <p className='DueDate'>{dueDateFormat}</p>
            </div>
            <div className='Action'>
                <EditOutlined onClick={() => props.onUpdate(props.id)} />
                <DeleteOutlined onClick={() => props.onDelete(props.id)} />
            </div>
        </div>
    );
}
export default ToDoItem;
