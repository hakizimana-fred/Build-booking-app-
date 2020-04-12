interface Bookings{
    bookings: any[]
}

interface Passengers{
    name: string
    date: string
}
interface Tickets{
    bookings: []
    
    issueTicketToPassenger: Function
}

class Booking implements Bookings{
     bookings: string[]
    constructor(){
        this.bookings = []
    }

    enqueue(value: any){
        this.bookings.push(value)
    }

    dequeue(){
        return this.bookings.shift()
    }
}

class Passenger implements Passengers{
    name: string
    date: string
     constructor(name: string, date: string){
        this.name = name
        this.date = date
     }
}

class Issuerer implements Tickets{
    bookings: any

    constructor(){
        this.bookings = new Booking()
    }

    issueTicketToPassenger(value: any){
        this.bookings.enqueue(value)
    }

    IssueTicketoutInOrder(){
      return this.bookings.dequeue()
    }
}
interface Details{
    name: string
    date: string
}




export {Issuerer, Passenger}