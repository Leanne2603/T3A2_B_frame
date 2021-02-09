import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from '../../config/api'
import { Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeleteService.css';

export default function DeleteService(props) {

    // setting the initial state of the service to blank - setServiceInfo called in useEffect upon mounting
    const [serviceInfo, setServiceInfo] = useState({
        service_name: "",
        price: ""
    })

    const handleDelete = (id) => {
        fetch(`${API}services/${id}`, {
            method: 'DELETE'
        })
        .then(result => {
            if (result.status === 200) {
                let currentListOfServices = [...props.services] // clones the original array
                currentListOfServices = currentListOfServices.filter(service => service.id !== id) // checks the array to see if there is an existing service id, if false, will not render
                alert("The service has been successfully deleted")
                props.setServices(currentListOfServices) // updates the setServices
                props.history.push("/services") // redirects to services list page
            } else {
                alert("There has been an error processing this request. Please try again")
                props.history.push("/services")
            }
        })
    }
    
    useEffect(() => {
        fetch(`${API}services/${props.match.params.id}`)
        .then(result => result.json())
        .then(data => setServiceInfo(data))
        // let service = props.services[props.match.params.id]
        // console.log(service) // checks to see that data is being returned upon mounting - Object including service details returned
        // setServiceInfo(service) // sets the data for the form to allow for editing
    }, [])


    return (
        <div className="deleteService-bg">
            <div className="deleteServiceCard">
                <div className="deleteServiceContainer">
                    <Col className="deleteService-column">
                        <Form className="deleteService-form">
                            <div className="deleteService-h1">
                                <h1>Delete Service</h1>
                            </div>
                            <Form.Text className="deleteService-h4">
                                <h4>Are you sure you want to delete this service?</h4>
                            </Form.Text>
                            <Form.Text className="deleteService-h51">   
                                <p>Service name: </p>
                            </Form.Text>
                            <Form.Text className="deleteService-h52">
                                <h5>{serviceInfo.service_name}</h5>
                            </Form.Text>
                            <Form.Text className="deleteService-h53">
                                <h5>Price: $ {serviceInfo.price}</h5>
                            </Form.Text> 
                                <button id="deleteServiceButton" onClick={() => handleDelete(serviceInfo.id)}>Delete</button>
                                
                            <Link to="/services" className="backservice">Back to Services</Link>
                        </Form>
                    </Col>
                </div>
            </div>
        </div>
    )
}