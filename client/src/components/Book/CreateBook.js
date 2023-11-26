import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Book/book.css';

const CreateBook = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    ISBN: "", title: "", author: "", edition: "", category_id: "", price: "", publisher: "", img_path: ""
  });

  const handleInput_book = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // alert(value)

    setBook((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // ========================== //

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  // ========================== //

  const handleInput_img = async (e) => {
    const img = e.target.files[0];
    const base64 = await convertToBase64(img);
    // console.log(base64);
    setBook({ ...book, img_path: base64 })
  }


  // =============================================== //

  const PostData = async (e) => {
    e.preventDefault();

    const { ISBN, title, author, edition, category_id, price, publisher, img_path } = book;

    const res = await fetch('/createBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ISBN, title, author, edition, category_id, price, publisher, img_path
      }),
    });

    if (res.status === 422 || !res) {
      window.alert('Invalid Book');
    }
    else if (res.status === 500) {
      window.alert(res.json);
    }
    else if (res.status === 201) {
      window.alert('Book added successfully');
      navigate('/book');
    }

  }

  // ============================================================== //

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('/category')
      .then((data) => {
        setCategory(data.data.data);
      })
      .catch(error => console.log(error));
  }, [])

  // ============================================================== //

  // =============================================== //


  return (
    <div>
      <div className="shop-bg">
        <p>Add Book</p>
      </div>
      <div className="add_book">
        <div className="book_form">
          <p className="heading">Add Book</p>
          {/* <p className="info">If you doesn't have an account with us, Please Signup!</p> */}
          <form method='POST'>
            <input type="text" name="ISBN" id="ISBN" value={book.ISBN} onChange={handleInput_book} placeholder="ISBN" />
            <input type="text" name="title" id="title" value={book.title} onChange={handleInput_book} placeholder="Title" />
            <input type="text" name="author" id="author" value={book.author} onChange={handleInput_book} placeholder="Author Name" />
            <input type="number" name="edition" id="edition" value={book.edition} onChange={handleInput_book} placeholder="Edition" />
            {/* <select name="category" id="category" placeholder='Category'>
              <option value="" disabled selected>Select Category</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Education">Education</option>
            </select> */}
            <select name="category_id" id="category_id" onChange={handleInput_book} defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Select Category</option>
              {
                category?.map((category) => {
                  return <option key={category._id} value={category._id}> {category.name} </option>
                })
              }
            </select>
            <input type="number" name="price" id="price" value={book.price} onChange={handleInput_book} placeholder="Price" />
            <input type="text" name="publisher" id="publisher" value={book.publisher} onChange={handleInput_book} placeholder="Publisher" />
            <input type='file' accept=".png, .jpg" name="img_path" onChange={handleInput_img} id="img_path" />
            <input className="btn" type="submit" name='signup' id='signup' value="ADD" onClick={PostData} />
          </form>

        </div>
      </div>
    </div>
  )
}

export default CreateBook

