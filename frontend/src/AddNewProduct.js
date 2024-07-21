import React, { useState } from 'react';
import axios from 'axios';

const AddNewProduct = ({ setShowModal }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddProduct = () => {
    // Veri hazırlığı
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('quantity', quantity);

    // Axios ile POST isteği gönderme
    axios.post('http://localhost:5000/api/product/add-product', formData)
      .then(response => {
        console.log(response.data);
        // Başarılı işlem durumunda, modalı kapat
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error adding product:', error);
        // Hata durumunda, gerekli işlemleri yapabilirsiniz (örneğin, kullanıcıya bildirim gösterme)
      });
  };

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddNewProduct;
