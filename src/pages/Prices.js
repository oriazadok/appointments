import React from 'react';
import "../styles/Prices.css"

const Prices = () => {
  const plans = [
    { name: 'Basic', price: '$9.99/month', features: ['1 haircut per month', '10% off products'] },
    { name: 'Standard', price: '$19.99/month', features: ['2 haircuts per month', '20% off products'] },
    { name: 'Premium', price: '$29.99/month', features: ['4 haircuts per month', '30% off products'] },
  ];

  return (
    <section id="prices">
      <h2>Our Prices</h2>
      <div className="plan-container">
        {plans.map((plan) => (
          <div className="plan" key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button>Sign up</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;
