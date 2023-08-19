import React, { useState } from 'react';

function InputTest(props) {
    const [ student, setStudent ] = useState({
        name: "",
        address: ""
    });

    const handleStudentInfoChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    }

    return (
        <div>
            <h1>이름: {student.name}</h1>
            <h1>주소: {student.address}</h1>
            <input type="text" name='name' onChange={handleStudentInfoChange} />
            <input type="text" name='address' onChange={handleStudentInfoChange} />
        </div>
    );
}

export default InputTest;