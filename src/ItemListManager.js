import React, { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Item List Manager</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter item"
          style={{
            padding: "8px",
            width: "300px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleAddItem}
          style={{
            padding: "8px 12px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "8px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
