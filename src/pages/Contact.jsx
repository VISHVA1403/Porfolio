
import React from 'react'
import style from '../static/contact.module.css'
const Contact = () => {
  return (
    <div id='contact' className={style.container}>
      <div className={style.title}>
       For Contact
      </div>
      <div className={style.inputbox}>
        <div className={style.left}>
          <div className={style.box}>
          <label>Name</label>
          <input placeholder='Name' name='name' type='text'/>
          </div>
          <div className={style.box}>
          <label>Email</label>
          <input type="text" name="email"  placeholder='email'/>
          </div>
          <div className={style.box}>
          <label> Phone no</label>
          <input type="text" name="phone"  placeholder='phone no'/>
          </div>
          
        </div>
        <div className={style.right}>
          <label>Message</label>
          <textarea placeholder='message'/>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact