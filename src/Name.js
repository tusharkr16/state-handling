import React, { useState } from 'react'

const Name = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        setFullName(`${firstName} ${lastName}`);
    };
    return (
        <div>
            <h1>Full Name Display</h1>
            <label htmlFor="">First Name</label>
            <input type="text" value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            <br />
            <br />
            <label htmlFor="">Last Name</label>
            <input type="text" value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>submit</button>
            <p>Full Name:  {fullName}</p>
        </div>
    )
}

export default Name