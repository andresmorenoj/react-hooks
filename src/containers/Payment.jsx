import React from 'react';
import '../assets/styles/containers/Payment.scss';

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">Botón de pago con PayPal</div>
      </div>
    </div>
  );
};

export default Payment;
