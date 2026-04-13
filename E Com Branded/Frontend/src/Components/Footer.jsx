import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (

    <div>

      <div className="bg-card text-card-foreground p-8 flex flex-col items-center justify-center bg-stone-950/90 text-white/80">

        <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-14">
          
          <div>
            <h2 className="text-xl font-bold text-center ">Categories</h2>
            <ul className="mt-2 space-y-1 flex flex-col items-center">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Men</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Women</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Accessories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Shoes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Dresses</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-center">Information</h2>
            <ul className=" flex flex-col items-center  mt-2 space-y-1">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms & conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Shipping & delivery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-center">Quick Link</h2>
            <ul className="mt-2 space-y-1 flex flex-col items-center ">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms & conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Shipping & delivery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy policy</a></li>
            </ul>
          </div>

          <div >
            <h2 className="text-xl font-bold  text-center">Quick contact</h2>
            
            <p className="mt-2  ">
                <div className='  gap-3 justify-center flex flex-row items-center ' >
                    <FiPhone /> 123 456 7890
                </div>
            </p>
            <p className="mt-1">
                <div className='  justify-center gap-3 flex flex-row items-center ' >
                    <FiMail /> info@domain.com
                </div>
            </p>

            <div className='mt-3' >
              <p  className='text-center' >Connect With Us</p>
              <div className="flex justify-center items-center  space-x-4 mt-2">
                <a href="#" className="text-muted-foreground hover:text-primary"><FaFacebookF /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><FaInstagram /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><FaTwitter /></a>
              </div>
            </div>

          </div>

          <div>
            <h2 className="text-xl font-bold text-center ">Become a member</h2>
            <p className="mt-2 text-center">Join now and get 20% extra discount!</p>
            <div className='flex flex-col items-center' >
            <input type="email" placeholder="Enter your email" className="  mt-2 p-2 border border-border rounded" />

            </div>
            <div className='pt-4 flex flex-col items-center '>
              {/* <img src="https://openui.fly.dev/openui/24x24.svg?text=💳" alt="Payment methods" className="inline-block" /> */}
              <span className="text-muted-foreground">Visa, PayPal, Klarna</span>
            </div>
          </div>


        </div>

      </div>

        <div className='flex flex-col gap-10 md:flex-row  justify-between px-20 p-8 bg-black/90 text-white/70 ' >

            {/* <div> */}
                <p className='mx-auto' >This site is protected by reCAPTCHA and the Google privacy policy and terms of service.</p>
            {/* </div> */}

            {/* <div> */}
                <p className='mx-auto' >© 2024 Crafto is Proudly Powered by ThemeZaa</p>
            {/* </div> */}

        </div>


    </div>
  );
}

export default Footer;
