#! /usr/bin/env node

// This ia a customer class with a method called customerInfo()
class Customer {
    firstName: string
    lastName: string
    gender: string
    age: number
    mobileNumber: string
    bankAccount: BankAccount

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: string, BankAccount: any) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
        this.mobileNumber = mobileNumber
        this.bankAccount = BankAccount
    }
    customerInfo(Name: string, Age: number, Gender: string, mobileNumber: string, accountBalance: number) {
        return `
        Name: ${this.firstName} ${this.lastName}\n
        Age: ${this.age}\n
        Gender: ${this.gender}\n
        Contact Number: ${this.mobileNumber}\n
        Account Balance: ${this.bankAccount.accountBalance}`
    }
}


// This is a class for the bank account following the IBankAccount Interface
class BankAccount  {
    accountBalance: number
    amount: number
    constructor(accountBalance: number, amount: number) {
        this.accountBalance = accountBalance
        this.amount = amount
    }

    bankAccount() {
        this.accountBalance = 100
    }

    debit(accountBalance: number, amount: number) {
        let statement
        if (amount > 0) {
            if (accountBalance > amount) {
                accountBalance = accountBalance -amount
                statement = `Transaction completed, new account balance is ${accountBalance}.`
            }else {
                statement = `Your balance is insufficient to perform this action.`
            }
        }return statement
    }

    credit(accountBalance: string, amount: number) {
        let statement
        if (amount > 0) {
            accountBalance = accountBalance +amount
                statement = `Amount ${amount} has been credited to your account.`
        }else {
            statement = `Amount entered was insufficient, transaction did not happen.`
        }return statement
    }
    
}
