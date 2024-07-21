import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNewProduct = ({ setShowModal }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 

  const handleAddProduct = () => {
    // Veri hazırlığı
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('quantity', quantity);
    if (image) {
      formData.append('image', image);
    }
    // Axios ile POST isteği gönderme
    axios.post('http://localhost:5000/api/product/add-product', formData)
      .then(response => {
        console.log(response.data);
        // Başarılı işlem durumunda, bildirim göster
        //toast.success('Product added successfully!');
        // Modalı kapat
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error adding product:', error);
        // Hata durumunda, bildirim göster
        //toast.error('Error adding product!');
      });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container mt-4">
      <div class="row d-flex justify-content-center align-items-center">
        <div class ="col-5">
        <ToastContainer />
          <h2>Add New Product</h2>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleImageChange}
              />
               {imagePreview && (
                <div className="mt-3">
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    style={{ width: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }}
                  />
                </div>
              )}
            </div>
            <button type="button" className="btn btn-primary" onClick={handleAddProduct}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
