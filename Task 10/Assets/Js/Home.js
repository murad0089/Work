const e_mail_input = document.querySelector('#e_mail_input')
const password_input = document.querySelector('#password_input')
console.log(e_mail_input,password_input);
let a
function isUpper(str) {
    return /[A-Z]/.test(str);
}
function isSign(str){
    return /[_,@,#,$]/.test(str)
}
e_mail_input.addEventListener('keypress',(e)=>{
        
    if(e_mail_input.value.includes('@') == true){
        e_mail_input.className="true_email"
    }else{
        e_mail_input.className = "wrong_email"
    }
})
e_mail_input.addEventListener('blur',()=>{
    e_mail_input.className=''
})

function password(){
    a=document.querySelector('#password')
    a.innerHTML=''
    
    if(isUpper(password_input.value)&&isSign(password_input.value)&&password_input.value.length > 10){
        a.innerHTML="Password is secure"
        a.className='true_password'
        password_input.className="true_password"
    }else if(isUpper(password_input.value)||isSign(password_input.value)||password_input.value.length > 10){
        password_input.className="medium_password"
        a.className="medium_password"
        a.innerHTML="Your password is little secure"
    }else if(password_input.value.length<1){
        password_input.className='focus'
    }else {
        password_input.className="wrong_password"
        a.className="wrong_password"
        a.innerHTML="Enter a valid Password"
    }
}
password_input.addEventListener('keydown',password)
password_input.addEventListener('blur',()=>{
    a.innerHTML=''
    password_input.className=''
})
password_input.addEventListener('focus',()=>{
    password_input.className='focus'
})