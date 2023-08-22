import react from 'react';
import classes from './SearchResults.module.css'
import Modal from '../UI/Modal/Modal';
import RecommendationCard from '../RecommendationCard/RecommendationCard';
import {Row, Col } from 'react-bootstrap';

const SearchResults = () => {
    return (
    <Modal>
        <h1> Your Results</h1>
         <Row md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <RecommendationCard/>
        </Col>
      ))}
    </Row>




    
    
    </Modal>
    )
}

export default SearchResults;