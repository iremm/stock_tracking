import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 justify-content-center align-items-center text-center">
          <h5>Welcome to Stock Tracking System</h5>
          <p>This is your dashboard. You can manage products, categories, companies, and users from here.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Link to="/add-new-product" className="text-decoration-none text-dark">
            <div className="card dash_item_card">
              <div className="card-body text-center dash-card">
                <h6>Add New Products</h6>
                <p>Add, edit, or delete products in the system.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card dash_item_card">
            <div className="card-body text-center dash-card">
              <h6>Manage Categories</h6>
              <p>Add, edit, or delete product categories.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card dash_item_card">
            <div className="card-body text-center dash-card">
              <h6>Manage Companies</h6>
              <p>Add, edit, or delete company information.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card dash_item_card">
            <div className="card-body text-center dash-card">
              <h6>View Reports</h6>
              <p>Access detailed reports and analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
