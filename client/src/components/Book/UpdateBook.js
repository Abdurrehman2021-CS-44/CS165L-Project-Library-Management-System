import React, { useState, useEffect } from 'react';

const UpdateBook = () => {

  const [customer, setCustomer] = useState({
    name: "", CNIC: "", email: "", phone: "", address: "", debit_card: "", mm_yy: "", cvc: "", password: "", cPassword: ""
  });

  const handleInput_customer = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // alert(value)

    setCustomer((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <div className="shop-bg">
        <p>Update Book</p>
      </div>
      <div className="add_book">
        <div className="book_form">
          <p className="heading">Add Book</p>
          {/* <p className="info">If you doesn't have an account with us, Please Signup!</p> */}
          <form>
            <input type="text" name="ISBN" id="ISBN" value={customer.name} onChange={handleInput_customer} placeholder="ISBN" autoComplete='off' />
            <input type="text" name="title" id="title" value={customer.CNIC} onChange={handleInput_customer} placeholder="Title" />
            <input type="text" name="author" id="author" value={customer.email} onChange={handleInput_customer} placeholder="Author Name" />
            <input type="number" name="edition" id="edition" value={customer.phone} onChange={handleInput_customer} placeholder="Edition" />
            {/* <input type="text" name="category" id="category" value={customer.address} onChange={handleInput_customer} placeholder="Category" /> */}
            <select name="category" id="category" placeholder='Category'>
            <option value="" disabled selected>Select Category</option>
              <option value="horror">Horror</option>
              <option value="comedy">Comedy</option>
              <option value="romance">Romance</option>
              <option value="education">Education</option>
            </select>
            <input type="number" name="price" id="price" value={customer.debit_card} onChange={handleInput_customer} placeholder="Price" />
            <input type="text" name="publisher" id="publisher" value={customer.mm_yy} onChange={handleInput_customer} placeholder="Publisher" />
            <input type='file' accept=".png, .jpg" name="img_path" id="img_path" placeholder="Upload Image" />
            <input className="btn" type="submit" name='signup' id='signup' value="UPDATE" />
          </form>

        </div>
      </div>
    </div>
  )
}

export default UpdateBook
