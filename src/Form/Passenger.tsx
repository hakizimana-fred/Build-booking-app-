import React, {useState} from 'react'
import {Form, FormGroup, Input, Label, Row, Col, Button} from 'reactstrap'

export const PassengerDetails: React.FC<{addPassenger: Function}> = ({addPassenger}) => {
    const [passenger, setPassenger] = useState({name: '', date: ''})

    const onChange = (e: any) => setPassenger({...passenger, [e.target.name] : e.target.value})
    const onSubmit = (e: any) => {
        e.preventDefault()

        addPassenger(passenger)
    }

    return(
        <Row>
        <Col md='6' className='mx-auto'>
        <Form onSubmit={onSubmit}>
            <FormGroup>
            <Label>Name</Label>
            <Input type='text' name='name' onChange={onChange} value={passenger.name} />
            </FormGroup>
            <FormGroup>
                <Label>Date</Label>
                <Input text='time of arival' name='date' onChange={onChange} value={passenger.date} />
            </FormGroup>
            <Button type='submit'>Book</Button>
        </Form>
        </Col>
        </Row>
    )
}