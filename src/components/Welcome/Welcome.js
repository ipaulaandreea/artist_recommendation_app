import React from 'react'
import classes from './Welcome.module.css'
import { motion } from 'framer-motion'

const Welcome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.dot}>
      </div>
      <div className={classes.box}>
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
        >
          Welcome to Recommend
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
          An app that recommends artists based on your preferences and shows you
          their upcoming concerts.
        </motion.div>
      </div>
    </div>
  )
}

export default Welcome
