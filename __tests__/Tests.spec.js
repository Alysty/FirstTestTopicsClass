import {Bill} from "./Bill"
import PaymentTicket from "../PaymentTicket"
import {billProcessor} from "../BillProcessor";

test('Deve retornar a fatura marcada como PAGA, e três pagamentos do tipo BOLETO criados',()=>{
    const bill = new Bill("name", new Date.now(), 1500)
    const paymentTickets = Array.of(
        new PaymentTicket('1', new Date.now(), 500),
        new PaymentTicket('2', new Date.now(), 400),
        new PaymentTicket('3', new Date.now(), 600)
    )
    billProcessor(bill, paymentTickets)
    expect(bill.payed).toBe(true)
    expect(bill.payments).toBe(paymentTickets)
})