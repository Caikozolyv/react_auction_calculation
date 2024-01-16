import './App.css';
import React, { useState } from 'react';
import { calculateFeesFunctions } from './Helper/calculateHelper';
import Form from './Components/Form';

function App() {
  const [type, setType] = useState(1);
  const [price, setPrice] = useState(0);
  const storageCosts = calculateFeesFunctions.storageCosts;
  const userFees = calculateFeesFunctions.calculateUserFees(type, price);
  const specialFees = calculateFeesFunctions.calculateSpecialFees(type, price);
  const associationFees = calculateFeesFunctions.calculateAssociationFees(price);
  const totalPrice = calculateFeesFunctions.calculateTotalPrice(type, price);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

const handleTypeChange = (e) => {
    setType(e.target.value);
  }

  return (
    <div className="App">
      <h1>Calcul d'encan</h1>
      <Form 
        type={type} 
        price={price} 
        onHandlePriceChange={handlePriceChange} 
        onHandleTypeChange={handleTypeChange} 
        storageCosts={storageCosts}
        userFees={userFees}
        specialFees={specialFees}
        associationFees={associationFees}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default App;
