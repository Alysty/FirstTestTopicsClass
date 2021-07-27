export class Bill{
    constructor(nameClient, date, value){
        this.nameClient = nameClient
        this.date = date
        this.value = value
        this.payed = false
        this.payments = []
    }
}


export class Payment{
    constructor(value, date, typeOfPayment) {
        this.value = value
        this.date = date
        this.typeOfPayment = typeOfPayment
    }
}