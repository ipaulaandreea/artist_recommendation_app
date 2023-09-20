import React from 'react';
import classes from './Box.module.css'
import SearchBar from '../SearchBar/SearchBar.js'
import Container from 'react-bootstrap/Container';

const Box = (props) => {
    return (
        <Container className={classes.container4}>
                {props.children}
            </Container>

    )
}

export default Box;