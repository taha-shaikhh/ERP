import React, { useState } from 'react';

function Products() {

  const initialProducts = [
    { id: 1, name: 'Product A', category: 'Category A', price: 20, stock: 50 },
    { id: 2, name: 'Product B', category: 'Category B', price: 30, stock: 25 },

  ];


  const [products, setProducts] = useState(initialProducts);


  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleAddProduct = () => {

    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      alert('Please fill in all fields');
      return;
    }


    const newProduct = {
      id: products.length + 1, 
      ...formData,
    };


    setProducts([...products, newProduct]);


    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
    });
  };

  const handleDeleteProduct = (productId) => {
 
    const updatedProducts = products.filter((product) => product.id !== productId);

    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Products Management</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.category}, Price: ${product.price}, Stock: {product.stock}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add Product</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
        </label>
        <label>
          Stock:
          <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Products;
