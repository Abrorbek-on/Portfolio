import React from 'react'
import Navbar from '../Components/Navbar'

function Contact() {
    return (
        <>
            <Navbar />


            <section className='max-w-[1100px] m-auto mt-12 text-center'>
                <strong className='text-[35px]'>
                    Bog'lanish
                </strong>

                <div className='mt-5'>
                    <input className='border w-[500px] h-[41px] rounded-xl px-5' type="text" placeholder='name' /><br /><br />
                    <input className='border w-[500px] h-[41px] rounded-xl px-5' type="email" placeholder='email' /><br /><br />
                    <input className='border w-[500px] h-[60px] rounded-xl px-5' type="message" placeholder='message' /><br /><br />
                </div>
                <button className='border w-[500px] h-[35px] rounded-xl bg-green-600 text-white'>
                    Send
                </button>
            </section><hr className='mt-100 border-gray-300' />

            <footer className='max-w-[1400px] m-auto mt-8 text-center'>
                <p>© 2025 Karimov Abrorbek</p>
            </footer>


        </>
    )
}

export default Contact
