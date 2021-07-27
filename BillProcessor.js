import {Bill, Payment} from "./Bill"
import PaymentTicket from "./PaymentTicket"

export function billProcessor(bill, paymentTickets){
    let value = 0
    bill.payments.forEach((payment) => {
            value = payment.value
        }
    )
    paymentTickets.forEach((payment)=>{
        bill.payments = bill.payments.concat(new Payment(payment.value, payment.date, 'BOLETO'))
        value += payment.value
    })
    if (value >= bill.value) {
        bill.payed = true
    }
}