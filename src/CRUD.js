import React, { useState } from 'react';
import './CRUD.css';

const CRUD = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
  
    const addItem = () => {
      if (inputValue.trim() !== '') {
        setItems([...items, inputValue]);
        setInputValue('');
      }
    };
  
    const deleteItem = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  
    const startEdit = (index, value) => {
      setEditIndex(index);
      setEditValue(value);
    };
  
    const cancelEdit = () => {
      setEditIndex(null);
      setEditValue('');
    };
  
    const updateItem = () => {
      if (editValue.trim() !== '') {
        const updatedItems = [...items];
        updatedItems[editIndex] = editValue;
        setItems(updatedItems);
        cancelEdit();
      }
    };
  
    return (
      <div className="form">
        <h1 className="text-3xl mb-4">TO-DO-LIST</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter an item..."
            className="flex-grow border border-gray-400 rounded-md p-2 mr-2"
          />
          <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Item</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="list">
              {editIndex === index ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-grow border border-gray-400 rounded-md p-2 mr-2"
                />
              ) : (
                <span>{item}</span>
              )}
              <div>
                {editIndex === index ? (
                  <>
                    <button onClick={updateItem} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Update</button>
                    <button onClick={cancelEdit} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
                  </>
                ) : (
                  <button onClick={() => startEdit(index, item)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
                )}
                <button onClick={() => deleteItem(index)} className="text-red-500 ml-2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CRUD;