import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import App from './App'
import Container from 'react-bootstrap/Container';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Container className="container1">
    <App />
    </Container>

)
