import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
        setCountry(localStorage.getItem('country'));



    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://66bde07f74dfc195586de841.mockapi.io/crud/${id}`, {
            e_name: name,
            e_age: age,
            e_email: email,
            e_country: country
        }).then(() => {
            navigate('/');
        });

    }


    return (
        <>
            <div className='row'>
                <div className='col-md-4'>

                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>

                    <div className='bg-primary p-4 text-center'>
                        <h1>Update</h1>
                    </div>

                    <form onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label>Enter Name</label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label>Enter Age</label>
                            <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label>Enter Email</label>
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label>Enter Country</label>
                            <input type='text' value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Enter your country' className='form-control' />
                        </div>
                        <br />
                        <div className='bg-primary p-4 text-center'>
                            <input type='update' onClick={handleUpdate} value='update' className='btn btn-primary' />
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Edit
