import {Bill, Payment} from "../Bill"
import PaymentTicket from "../PaymentTicket"
import {billProcessor} from "../BillProcessor";

test('Deve retornar a fatura marcada como PAGA, e três pagamentos do tipo BOLETO criados apos receber a quantidade extada de dinheiro esperada',()=>{
    const bill = new Bill("name", Date.now(), 1500)
    const paymentTickets = Array.of(
        new PaymentTicket('1', Date.UTC(2000, 7, 27), 500),
        new PaymentTicket('2', Date.UTC(2000, 7, 27), 400),
        new PaymentTicket('3', Date.UTC(2000, 7, 27), 600)
    )
    const paymentArray = Array.of(
        new Payment(500, Date.UTC(2000, 7, 27), 'BOLETO'),
        new Payment(400, Date.UTC(2000, 7, 27), 'BOLETO'),
        new Payment(600, Date.UTC(2000, 7, 27), 'BOLETO')
    )
    billProcessor(bill, paymentTickets)
    expect(bill.payed).toBe(true)
    expect(bill.payments).toEqual(paymentArray)
})

test('Deve retornar a fatura marcada como PAGA, e três pagamentos do tipo BOLETO criados apos receber uma quantidade maior que a esperada de dinheiro',()=>{
    const bill = new Bill("name", Date.now(), 1500)
    const paymentTickets = Array.of(
        new PaymentTicket('1', Date.UTC(2000, 7, 27), 1000),
        new PaymentTicket('2', Date.UTC(2000, 7, 27), 500),
        new PaymentTicket('3', Date.UTC(2000, 7, 27), 250)
    )
    const paymentArray = Array.of(
        new Payment(1000, Date.UTC(2000, 7, 27), 'BOLETO'),
        new Payment(500, Date.UTC(2000, 7, 27), 'BOLETO'),
        new Payment(250, Date.UTC(2000, 7, 27), 'BOLETO')
    )
    billProcessor(bill, paymentTickets)
    expect(bill.payed).toBe(true)
    expect(bill.payments).toEqual(paymentArray)
})

test('Deve retornar a fatura marcada como nao PAGA, e dois pagamentos do tipo BOLETO criados apos receber uma quantidade menor que a esperada de dinheiro',()=>{
    const bill = new Bill("name", Date.now(), 1500)
    const paymentTickets = Array.of(
        new PaymentTicket('1', Date.UTC(2000, 7, 27), 500),
        new PaymentTicket('2', Date.UTC(2000, 7, 27), 400)
    )
    const paymentArray = Array.of(
        new Payment(500, Date.UTC(2000, 7, 27), 'BOLETO'),
        new Payment(400, Date.UTC(2000, 7, 27), 'BOLETO')
    )
    billProcessor(bill, paymentTickets)
    expect(bill.payed).toBe(false)
    expect(bill.payments).toEqual(paymentArray)
})