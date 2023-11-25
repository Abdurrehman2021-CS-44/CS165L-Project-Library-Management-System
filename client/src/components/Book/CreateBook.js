import React from 'react'

const CreateBook = () => {
  return (
    <div>
      <div className="login-signup">
        <div className="signup">
          <p className="heading">Add Book</p>
          {/* <p className="info">If you doesn't have an account with us, Please Signup!</p> */}
          <form>
            <input type="text" name="name" id="name" value={customer.name} onChange={handleInput_customer} placeholder="Name" autoComplete='off' />
            <input type="number" name="CNIC" id="cnic" value={customer.CNIC} onChange={handleInput_customer} placeholder="CNIC" />
            <input type="email" name="email" id="email" value={customer.email} onChange={handleInput_customer} placeholder="Email" />
            <input type="phone" name="phone" id="phone" value={customer.phone} onChange={handleInput_customer} placeholder="Phone Number" />
            <input type="text" name="address" id="address" value={customer.address} onChange={handleInput_customer} placeholder="Address" />
            <input type="number" name="debit_card" id="debit" value={customer.debit_card} onChange={handleInput_customer} placeholder="Debit Card Number" />
            <input type="number" name="mm_yy" id="mm_yy" value={customer.mm_yy} onChange={handleInput_customer} placeholder="MM/YY" />
            <input type="number" name="cvc" id="cvc" value={customer.cvc} onChange={handleInput_customer} placeholder="CVC" />
            <input type="password" name="password" id="password" value={customer.password} onChange={handleInput_customer} placeholder="Password" autoComplete='off' />
            <input type="password" name="CPassword" id="confirmPassword" placeholder="Confirm Password" autoComplete='off' />
            <input className="btn" type="submit" name='signup' id='signup' value="REGISTER" />
          </form>

        </div>
      </div>
    </div>
  )
}

export default CreateBook
