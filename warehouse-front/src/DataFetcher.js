import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [warehouseData, setWarehouseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('Fetching data');
    try {
      const response = await fetch('http://localhost:8080/warehouse/001/data');
      const data = await response.json();
      console.log(data);
      setWarehouseData(data);
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    }
  };

  return (
    <div>
      <h1>Warehouse Daten in Tabelle anzeigen</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Timestamp</th>
            <th>Street</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{warehouseData.id}</td>
            <td>{warehouseData.name}</td>
            <td>{warehouseData.timestamp}</td>
            <td>{warehouseData.street}</td>
            <td>{warehouseData.city}</td>
            <td>{warehouseData.country}</td>
            <td>{warehouseData.plz}</td>
          </tr>
        </tbody>
      </table>

      <h2>Produkte</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Quantity</th>
            <th>Product Unit</th>
          </tr>
        </thead>
        <tbody>
          {warehouseData.productData &&
            warehouseData.productData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.amount}</td>
                <td>{product.unit}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetcher;