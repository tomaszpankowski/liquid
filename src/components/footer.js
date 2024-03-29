import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class Footer extends Component{
    render(){
        return(
            <footer>
                <Container fluid className="d-flex align-items-center bg-navy text-primary pt-3 opacity-9 border-top border-primary">
                    <Row className="mx-0 w-100 small opacity-9">
                        <Col xs={12} md={6} lg={5} className="text-center text-md-start">
                            <img src="img/navbar_logo.png" fluid alt="logo"/>
                            <p className="initialism fw-normal">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </Col>
                        <Col xs={12} md={6} lg={7} className="text-center text-md-end">                    
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <span className="fa fa-facebook text-white"></span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <span className="fa fa-instagram text-white"></span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <span className="fa fa-twitter text-white"></span>
                                    </Link>
                                </li>
                            </ul>       
                        </Col>
                        <Col xs={12} className="text-center border-top border-primary">
                            <p className="mb-1">
                                Copyright &copy; 2021-2022 Tomasz Pankowski. 
                                <Link to="/privacy" className="fw-bold text-primary text-decoration-none">
                                    Privacy policy
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;  