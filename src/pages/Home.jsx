import React from 'react'
import './Home.css';
import { MenuBtn } from '../Componets/MenuBtn';
import AboutImg from '../utils/img/about-img.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../Componets/ImageGallary';
import { ContactInfo } from '../Componets/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';
import BookATable from '../Componets/BookATable';
import { motion } from "framer-motion";

const slideFromLeft = (delay = 0) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, delay },
    },
});

const slideFromRight = (delay = 0) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, delay },
    },
});


const Home = () => {
   return (
          <div className='home-page'>
  
           
              <motion.header 
                  className='h-100 min-vh-100 d-flex align-items-center text-light shadow'
                  initial="hidden"
                  animate="visible"
              >
                  <div className='container'>
                      <div className='row'>
                          <motion.div 
                              className='col-sm-6 d-flex d-sm-block flex-column align-items-center'
                              variants={slideFromLeft(0)}
                              initial="hidden"
                              animate="visible"
                          >
                              <h2 className='mb-0 text-black fw-bold'>George Restaurant</h2>
                              <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>
                                  Enjoy Our Delicious Food...
                              </h1>
                              <BookATable />
                          </motion.div>
                      </div>
                  </div>
              </motion.header>
  
              <div className='container my-5'>
                  <div className='row'>
                      <motion.div 
                          className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'
                          variants={slideFromLeft(0.3)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                      >
                          <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                      </motion.div>
                      <motion.div 
                          className='col-lg-6 d-flex flex-column align-items-center justify-content-center'
                          variants={slideFromRight(0.5)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                      >
                          <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptate aut dolore ullam quasi numquam quod molestias cum officiis perspiciatis?</p>
                          <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni animi tenetur eaque vel accusamus placeat quaerat ad.</p>
                          <Link to="/about">
                              <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                          </Link>
                      </motion.div>
                  </div>
              </div>

              <motion.div 
                  className='menu-section py-5 text-light shadow'
                  variants={slideFromLeft(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                  <div className='container d-flex flex-column align-items-center'>
                      <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
                      <div className='row mb-5 w-100'>
  
                     
                          <motion.div 
                              className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'
                              variants={slideFromLeft(0.4)}
                          >
                              <h3 className='fs-2 mb-5'>Food</h3>
                              <ul className='px-0'>
                                  {["English Breakfast", "Spicy Beef", "Spaghetti Bolognese"].map((item, index) => (
                                      <motion.li 
                                          key={index} 
                                          className='d-flex justify-content-between'
                                          variants={slideFromRight(index * 0.2)}
                                      >
                                          <p className='fs-3 mx-2'>{item}</p>
                                          <p className='fs-3 mx-2 text-success fw-bold'>100/-RS</p>
                                      </motion.li>
                                  ))}
                              </ul>
                          </motion.div>
  
                          <motion.div 
                              className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'
                              variants={slideFromRight(0.4)}
                          >
                              <h3 className='fs-2 mb-5'>Drinks</h3>
                              <ul className='px-0'>
                                  {["Coffee", "Juice", "Tea"].map((item, index) => (
                                      <motion.li 
                                          key={index} 
                                          className='d-flex justify-content-between'
                                          variants={slideFromLeft(index * 0.2)}
                                      >
                                          <p className='fs-3 mx-2'>{item}</p>
                                          <p className='fs-3 mx-2 text-success fw-bold'>50/-RS</p>
                                      </motion.li>
                                  ))}
                              </ul>
                          </motion.div>
                      </div>
                      <MenuBtn />
                  </div>
              </motion.div>
  
            
              <ImageGallery />
  
         
              <motion.div 
                  className='bg-dark text-light py-5 shadow'
                  variants={slideFromRight(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                  <div className='container'>
                      <div className='row'>
                          <motion.div 
                              className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'
                              variants={slideFromLeft(0.6)}
                          >
                              <ContactInfo />
                          </motion.div>
                          <motion.div 
                              className='col-lg-6 d-flex justify-content-center'
                              variants={slideFromRight(0.7)}
                          >
                              <img src={ContactImage} className='img-fluid w-50' alt="Contact" />
                          </motion.div>
                      </div>
                  </div>
              </motion.div>
  
          </div>
      );
  }
  
  export default Home;
  