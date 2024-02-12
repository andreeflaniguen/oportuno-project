import React, { useState } from 'react';

const OrderForm = ({ onCreate }) => {
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(buyer);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={buyer.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={buyer.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={buyer.phone}
                onChange={handleChange}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default OrderForm;
