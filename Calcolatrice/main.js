//inizializzo variabili, creo variabili legate al DOM
let num1 = []
let num2 = []
let res = 0
//change è una variabile che cambia quando viene premuto l'operatore passando da 0 ad 1
let change = 0
let op = ''
const buttons = document.querySelectorAll('button')
const view = document.getElementById('r')
const result = document.getElementById('result')


//funzione che al click di ogni button esegue operazioni in base alla classe 
buttons.forEach(button => {
button.addEventListener('click', e => {
if(button.classList.contains('btnNumber')) {

    //se change è uguale ad uno allora stiamo lavorando con il primo numero
    if(change === 0) {

        //se il contenuto di button = 0 e anche la variabile num1 = 0 allora a schermo deve apparire 0., aggiungendo il punto alla view e a num1 
        if(button.textContent === '0' && num1 == ''){
                view.textContent = '0.'
                num1 = '0.'
        }else{                    
        num1 += button.textContent;
        view.textContent += button.textContent
        }
    }else if(button.textContent === '0' && change === 1 && num2 == ''){
                view.textContent += '0.'
                num2 = '0.'
        } else  {
        num2 += button.textContent;
        view.textContent += button.textContent

    }
}
if(button.classList.contains('op')) {
    if(num2 == ''){
    op = button.textContent;
    view.textContent += button.textContent
    change = 1;  
    }else if(!num1 == '' && !num2 == ''){
          //da implementare operazioni con più operatori
    }     
}
if(button.classList.contains('equal')) {
    result.textContent = calculate()
}
if(button.classList.contains('decimal')) {
    if (view.textContent == '' && num1 == ''){
        view.textContent = '0.'
        num1 = '0.'
    }else if(!num1 == '' && op == '' && num2 == ''){
        num1 += '.'
        view.textContent += button.textContent
    }else if(!num1 == '' && !op == '' && num2 == ''){
        view.textContent += '0.'
        num2 = '0.'
    }else if (!num1 == '' && !op == '' && !num2 == ''){
        num2 += '.'
        view.textContent += button.textContent     
    }else {
        view.textContent += button.textContent    
    }
}
if(button.classList.contains('delete')) {
    Delete(num1, num2, op, res)
}
});
});


function calculate(resDef) {
// codice per eseguire l'operazione tra num1 e num2 in base all'operatore selezionato
        if (num1.includes('.') || num2.includes('.')){
        
        if (op =='+'){
            res = parseFloat(num1) + parseFloat(num2)
        }else if(op =='-'){
            res = parseFloat(num1) - parseFloat(num2)
        }else if(op =='*'){
            res = parseFloat(num1) * parseFloat(num2)
        }else{
            res = parseFloat(num1) / parseFloat(num2)
        }
        }else{    
        if (op =='+'){
            res = parseInt(num1) + parseInt(num2)
        }else if(op =='-'){
            res = parseInt(num1) - parseInt(num2)
        }else if(op =='*'){
            res = parseInt(num1) * parseInt(num2)
        }else{
            res = parseInt(num1) / parseInt(num2)
        }
    } 

    return res
} 
    
 


function Delete (){
num1 = []
num2 = []
res = 0
change = 0
op = ''
view.textContent = ''
result.textContent = ''


}

