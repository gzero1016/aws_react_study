import React, { useState } from 'react';

function CustomerInputTest(props) {
    // State
    const [ customer, setCustomer ] = useState({
        customername: "",
        rating: "",
        age: ""
    });

    // 이벤트처리
    const handleCustomerInfoChange = (e) => {
        const { name, value } = e.target;
        setCustomer({
            ...customer,
            [name]: value
        });
    }

    // HTML
    return (
        <div>
            <h1>고객명: {customer.customername} </h1>
            <h1>등급: {customer.rating}</h1>
            <h1>나이: {customer.age}</h1>
            <input type="text" name='customername' onChange={handleCustomerInfoChange} />
            <input type="text" name='rating' onChange={handleCustomerInfoChange} />
            <input type="text" name='age' onChange={handleCustomerInfoChange} />
        </div>
    );
}

export default CustomerInputTest;