import {Bill, Payment} from "./Bill"
import PaymentTicket from "./PaymentTicket"

export function billProcessor(bill, paymentTickets, typeOfPayment = 'BOLETO'){
    let value = 0
    value = bill.payments.reduce((acc, current) => {
            return acc + current.value
        }, 0
    )
    paymentTickets.forEach((payment)=>{
        bill.payments = bill.payments.concat(new Payment(payment.value, payment.date, typeOfPayment))
        value += payment.value
    })
    if (value >= bill.value) {
        bill.payed = true
    }
}