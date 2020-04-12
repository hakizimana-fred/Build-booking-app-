import React, { useEffect } from 'react'
import {Row, Col} from 'reactstrap'
import {Issuerer} from './algorithm/Queue'



export const ListInOrder: React.FC<{lists: []}> = ({lists}) => {
  
   if(lists && lists.length > 0){
    return(
        <Row>
        <Col md='6' className='mx-auto'>
        <h3>Issued tickets</h3>
        
        </Col>
        </Row>
    )
   }else{
       return <h1>No data yet</h1>
   }
}