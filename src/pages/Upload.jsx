import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Accessories");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image first!");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", productName);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    try {
      const res = await fetch("http://localhost:5000/api/products/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) alert("Product Uploaded Successfully!");
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div className="upload-page">
      <h1 className="upload-title">Upload Product</h1>
      <p className="upload-subtitle">Add new premium essentials to the LUXE collection.</p>
      
      <form onSubmit={handleUpload} className="upload-form-container">
        <div className="upload-dropzone">
          <div className="upload-icon">📤</div>
          <p className="upload-instruction">Drag and drop your product images here</p>
          <input 
            type="file" 
            id="fileInput" 
            hidden 
            onChange={(e) => setFile(e.target.files[0])} 
          />
          <button 
            type="button" 
            className="select-files-btn" 
            onClick={() => document.getElementById('fileInput').click()}
          >
            Select Files
          </button>
          {file && <p className="file-name-display">{file.name}</p>}
        </div>

        <input 
          type="text" 
          className="form-input"
          placeholder="Product Title" 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
          required 
        />
        
        <input 
          type="number" 
          className="form-input"
          placeholder="Price ($)" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />

        <select className="form-input" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
          <option value="Bags">Bags</option>
          <option value="Apparel">Apparel</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Electronics">Electronics</option>
        </select>

        <textarea 
          className="form-input"
          placeholder="Product Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />

        <button type="submit" className="final-upload-btn">Upload Product</button>
      </form>
    </div>
  );
};

export default Upload;