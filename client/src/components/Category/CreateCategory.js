import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Category/category.css';

const CreateCategory = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState({
        name: ""
    });

    const handleInput_category = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCategory((prev) => {
            return { ...prev, [name]: value };
        });
    };

    // =============================================== //

    const PostData = async (e) => {
        e.preventDefault();

        const { name } = category;

        const res = await fetch('/createCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });

        if (res.status === 422 || !res) {
            window.alert('Invalid Category');
        }
        else if (res.status === 500) {
            window.alert(res.json);
        }
        else if (res.status === 500 || res.status === 201) {
            window.alert("Category added successfully");
            navigate('/category');
        }
    }

    // =============================================== //



    return (
        <div>
            <div className="shop-bg">
                <p>Add Category</p>
            </div>
            <div className="add_book">
                <div className="book_form">
                    <p className="heading">Add Category</p>
                    <form method='POST'>
                        <input type="text" name="name" id="name" value={category.name} onChange={handleInput_category} placeholder="Name" />
                        <input className="btn" type="submit" name='signup' id='signup' value="ADD" onClick={PostData} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCategory


