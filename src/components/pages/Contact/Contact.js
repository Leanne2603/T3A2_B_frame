import React from 'react';
import './Contact.css';
import API from '../../config/api'
import Spinner from '../../layout/Spinner'
import { Link } from 'react-router-dom';
import { Form, Col, Container, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends React.Component {
    state = {
        name: []
    }

  componentDidMount () {
    this.setState({ loading: true })

    fetch(`${API}suburbs`)
    .then(response => response.json())
    .then(data => this.setState({name: data, loading: false}));  
  }


  render() {
    const {name, loading} = this.state

    if(loading) {
        return <Spinner />
    } else {
    return (
        <div className="contact-bg">
            <div className="contactCard">
                <div className="contactContainer">
                    <Container>
                        <Form>
                            <Row>
                                <Col md>
                                    <div className="contactleftpart">
                                        <Card className="uppart">
                                        
                                            <Card.Header className="contact-h1">
                                                <h1 className="contactUs">Contact Us</h1>
                                            </Card.Header>
                                            <Col className="contactCol">
                                                
                                                <div >Contact Number: 07 3805 7265</div>
                                                <div >Email: Larry@larryslawncare.com.au</div>        
                                                <Row className="IconList">
                                                    <div className="socialIcon">
                                                        <a href="https://www.facebook.com/" target="_blank" className="fab fa-facebook-square fa-3x"> </a>
                                                    </div>
                                                    <div className="socialIcon">
                                                        <a href="https://www.instagram.com/?hl=en" target="_blank" className="fab fa-instagram-square fa-3x"> </a>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Card>
                                        
                                        <Card className="downpart">
                                            <Card.Header className="contact-h1">
                                                <h3 className="service-area">Servicing these areas...</h3>
                                            </Card.Header>
                                            <ul className="areaList">
                                                {name.map(suburb => <li key = {suburb.id}>{suburb.name + ","}</li>)}
                                            </ul>
                                            
                                        </Card>

                                        {/* <Card className="contactrightDown"> */}
                                            <div className="leftBpart">
                                                <Link to='booking'>
                                                    <button id='c_booking'>Book Now<i className='far fa-play-circle' /></button>
                                                </Link>
                                            </div> 
                                        {/* </Card> */}
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="rightpart">
                                        <Card className="contactrightUp" >
                                            <div>
                                                <Card.Img src="images/Contact_Page_Image3.jpg" alt="Contact Us" />
                                            </div>
                                        
                                        </Card>
                                        
                                        
                                        {/* <Card className="contactrightDown"> */}
                                            {/* <div className="rightdownpart">
                                                <Link to='booking'>
                                                    <button id='c_booking'>Booking Now<i className='far fa-play-circle' /></button>
                                                </Link>
                                            </div> */}
                                        {/* </Card> */}
                                    </div>

                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    )};
  }
}

export default Contact