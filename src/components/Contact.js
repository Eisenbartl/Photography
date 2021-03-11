import React from 'react';
// import mail from '../../../assets/img/mail-icon.png';

const Contact = props => {
  return (
    <div>
      {props.contactVis === true? (
        <div className='contact'>
          {/* <div className='form-overlay'></div> */}
          <form action="" autocomplete='nope'>
            <div className='form-content'>
              <div className="name-email-input">
                <input 
                  type='name' 
                  name='contactName' 
                  placeholder='name' 
                  autocomplete='nope'
                  spellCheck='false'
                  onChange={e => props.handleInput(e)}
                  required
                />
                <input 
                  type='email' 
                  name='contactEmail' 
                  placeholder='email' 
                  autocomplete='nope' 
                  onChange={e => props.handleInput(e)}
                  required
                />
              </div>
              <input 
                type='tel' 
                name='requestDate' 
                placeholder='phone number' 
                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                onChange={e => props.handleInput(e)}
                required
              />  
              <input 
                type='text' 
                name='contactSubject' 
                placeholder='subject' 
                autocomplete='nope' 
                onChange={e => props.handleInput(e)}
                required
              />
              <textarea 
                name='contactMessage'
                placeholder='message'
                onChange={e => props.handleInput(e)}
                resize='none'
              ></textarea>
              <button type='submit' onClick={(e) => props.sendMail(e)}>send</button>
            </div>
            <div 
              className='close-contact'
              onClick={ () => props.toggleContact() }
            >
              <p>X</p>
          </div>
          </form>
        </div>
      ): null
        // <div className='contact-icon' onClick={ event => props.clickContact(event) }>
        //   <img src={ mail } />
        // </div>
      }
    </div>
  )
}

export default Contact;