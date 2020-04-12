import React, { useState } from 'react';
import {PassengerDetails} from './Form/Passenger'
import {Container} from 'reactstrap'
import {ListInOrder} from './ListInOrder'
import {Passenger, Issuerer} from './algorithm/Queue'

interface Details{
  name: 'string'
  date: string
}
const issuerer = new Issuerer()
const arr: any[] = []
export const App = () => {
  
  const [issuedTickets, setIssuedTickets] = useState<any>([])
  const [issued, setIssued] = useState<any>([{}])
  const addPassenger = (passenger: Details) => {
  
    const newPassenger = new Passenger(passenger.name, passenger.date)
     
    issuerer.issueTicketToPassenger(newPassenger)
    arr.push(issuerer)
    setIssuedTickets(arr[0].bookings)
    
  }

  
  return (
    <div className="App">
      <h3 className='text-center'>Book Seats</h3>
      <Container>
        <PassengerDetails addPassenger={addPassenger}/>
        <ListInOrder lists={issued} />
         
      </Container>

    </div>
  );
}

export default App;
