import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Read() {

    const [apiData, setApiData] = useState([])



    function getData() {
        axios.get('https://66bde07f74dfc195586de841.mockapi.io/crud')
            .then((response) => {
                setApiData(response.data);
            })
    }

    function handledelete(id) {
        axios.delete(`https://66bde07f74dfc195586de841.mockapi.io/crud/${id}`)
            .then(() => {
                getData();
            });
    }


    function setDataToStorage(id, name, age, email, country) {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
        localStorage.setItem('country', country);
    }


    useEffect(() => {
        getData();
    }, [])





    return (
        <>

            <div className='row'>
                <div className='col-md-12'>

                    <div className='mb-2 mt-2'>
                        <Link to='/create'>
                            <button className='btn btn-primary '>Add</button>
                        </Link>
                    </div>

                    <table className='table table-bordered "btn btn-dark" table-striped table-primary table-hover'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                apiData.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.e_name}</td>
                                                <td>{item.e_age}</td>
                                                <td>{item.e_email}</td>
                                                <td>{item.e_country}</td>
                                                <td>
                                                    <Link to='/edit'>
                                                        <button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email, item.e_country)}>Edit</button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger'
                                                        onClick={() => {
                                                            if (window.confirm('Are You Sure Delete Data ??')) { handledelete(item.id) }
                                                        }}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read
