class Calculator{
    constructor(upperTextElement,resultTextElement,signTextElement){
        this.upperTextElement=upperTextElement
        this.resultTextElement=resultTextElement
        this.signTextElement=signTextElement
        this.clear_all()
    }
    clear_all(){
        this.upper= ''
        this.result= ''
        this.sign= undefined
    }
    clear_one(){
        this.result=this.result.toString().slice(0,-1)
    }
    appendNumber(number){
        if(number === '.' && this.result.includes('.')) return
        this.result = this.result.toString() +number.toString()
    }
    chooseOperation(operation){
        if(operation == '='){
            this.calculate()
            return
        }
        if(this.result === '')return
        if(operation == '+-'){
            let a =parseFloat(this.result)
            a=-1*a
            this.result= a.toString() 
            return
        }
        if(this.upper !== ''){
            this.calculate()
        } 
        this.sign= operation
        this.upper = this.result
        this.result= ''

       
    }
    calculate(){
        let computation 
        const prev = parseFloat(this.upper)
        const current = parseFloat(this.result)
        if( isNaN(prev)|| isNaN(current)) return
        switch(this.sign){
            case '+':
                computation=prev+ current
                break
            case 'x':
                computation=prev* current
                break
            case '-':
                computation=prev- current
                break
            case '/':
                computation=prev/ current
                break
            case '%':
                computation= (prev/100)*current
                break
            default:
                return
            
        }
        this.upper = this.upper.toString() + this.sign.toString() +this.result.toString()
        this.result = computation
        this.sign = '='




    }
    updateDisplay(){
        this.resultTextElement.innerText= this.result
        if(this.sign != null){
            this.signTextElement.innerText = this.sign 

        }else{
            this.signTextElement.innerText=''
        }
        this.upperTextElement.innerText=this.upper
    }


}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-opeartion]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete-one]')
const clearButton = document.querySelector('[data-delete-all]')
const upperTextElement = document.querySelector('[data-upper]')
const signTextElement = document.querySelector('[data-sign]')
const resultTextElement = document.querySelector('[data-result]')

const calculator = new Calculator(upperTextElement,resultTextElement,signTextElement)
console.log(operationButtons)
numberButtons.forEach(button =>{
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click',() => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
deleteButton.addEventListener('click',() =>{
    calculator.clear_one()
    calculator.updateDisplay()
    
})
clearButton.addEventListener('click',() =>{
    calculator.clear_all()
    calculator.updateDisplay()
})
equalButton.addEventListener('click',() =>{
    calculator.calculate()
    calculator.updateDisplay()
    
})



