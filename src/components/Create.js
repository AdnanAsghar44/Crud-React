import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://66bde07f74dfc195586de841.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_email: email,
            e_country: country,
        }).then(() => {
            navigate('/');
        })
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
                        <h1>Add</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter Name</label>
                            <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Enter Age</label>
                            <input type='number' placeholder='Age' onChange={(e) => setAge(e.target.value)} className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label>Enter Email</label>
                            <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label>Enter Country</label>
                            <input type='text' placeholder='country' onChange={(e) => setCountry(e.target.value)} className='form-control' />
                        </div>
                        <br />
                        <div className='bg-primary p-4 text-center'>
                            <input type='submit' value='submit' className='btn btn-primary' />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Create
