import React from 'react'
import './CantactForm.css'

import bgImage from '../../../assets/cake.jpg'

const CantactForm = () => {
    return (
        <div className='section'>
            <div className='container grid-container contact-content'>
                <div>
                    <h1 className='heading-secondary'>
                        get in <span>touch</span>
                    </h1>
                    <p>This is a placeholder text commonly used in the design and typesetting industry to demonstrate the visual form of a document or font without using meaningful content.</p>
                    <img src={bgImage} alt="get in touch" />
                </div>
                <div>
                    <h1 className='heading-secondary'>
                        Mail <span>us</span>
                    </h1>
                    <form>
                        <div className='form-field name-email'>
                            <div>
                                <label>Name</label>
                                <input type="text" name='name' />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" name='email' />
                            </div>
                        </div>
                        <div className='form-field'>
                            <div>
                                <label>Subject</label>
                                <input type="text" name='subject' />
                            </div>
                        </div>
                        <div className='form-field'>
                            <div>
                                <label>Message</label>
                                <textarea type="text" name='message' />
                            </div>
                        </div>
                    </form>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default CantactForm