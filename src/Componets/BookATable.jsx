import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

export const BookATable = () => {
    return (
        <div>
            <Link to="/Contact">
                <motion.button type="button" 
                     variants={container(0.8)}
                     initial="hidden"
                     animate="visible"
                className="btn btn-success btn-lg">Make A Reservation</motion.button>
            </Link>
        </div>
    )
}

export default BookATable
