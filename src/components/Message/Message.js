import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Message.module.css'
import { motion } from 'framer-motion'
import Login from '../Login/Login.js'

const Message = () => {
    return (
        <Container className={classes.container3}>
        <motion.div
          className={classes.welcome}
          animate={{
            y: -50,
            opacity: 1
          }}
          initial={{
            opacity: 0.1
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.5
          }}
        ><h1>
                 Welcome to Recommend
        </h1>
        </motion.div>

        <motion.div
          className={classes.subheader}
          animate={{
            y: -50,
            opacity: 1
          }}
          initial={{
            opacity: 0.1
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.5
          }}
        >
          <h5>
          An app that recommends artists based on your preferences and shows you
          their upcoming concerts.
          </h5>

        </motion.div>
        {/* <Login/> */}
              </Container>

    )
}

export default Message;