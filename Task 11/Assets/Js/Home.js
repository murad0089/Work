const word_place = document.querySelector('.word')
let letter
const Start = document.getElementById('Start')
const next_word = document.querySelector('#next_word')
const hint = document.querySelector('#hint')
const hintbox=document.querySelector('.next')
let words=[{
                title:'collapse',
                hint: 'Dagilmaq'
            },
            {
                title:'present',
                hint: 'Indiki'
            },
            {
                title:'printer',
                hint:'cap etmek'
            }]
let new_div
let new_letter
let countDownDate = new Date().getTime()+30000;
let u
let score=0

Start.addEventListener('click', start)
create_word('letter')
function showHint(i){
    new_div=document.createElement('div')
    new_div.className='hintt'
    new_div.innerHTML=words[i].hint
    hintbox.appendChild(new_div)
}

function create_word(name){
    let a= document.querySelector('.abc')
    document.querySelector('.main').removeChild(a)
    new_div=document.createElement('div')
    new_div.className='abc'
    for(u=0;u<26;u++){
        new_letter=document.createElement('div')
        new_letter.className=name
        new_letter.innerHTML=String.fromCharCode(u+97)
        new_div.appendChild(new_letter)
    }

    document.querySelector('.main').appendChild(new_div)
}
function search(word,i,u){
    for(let a = 0;a<words[i].title.length;a++){
        if(words[i].title.indexOf(word,u)!=-1 && document.getElementById((words[i].title.indexOf(word,u)+1).toString()).innerHTML==''){
            console.log(word,words[i].title.indexOf(word,u));
            document.getElementById((words[i].title.indexOf(word,u)+1).toString()).innerHTML=word

            score=score+10
            document.querySelector('.score').innerHTML="Score: "+score
            u=1+words[i].title.indexOf(word,u)
        }else{
            break;
        }
    }

}
function start(){
    create_word('letter')
    letter= document.querySelectorAll('.letter')
    i=0
    new_blocks(i)
    countDownDate = new Date().getTime()+31000;
    var inter = setInterval(countdown,0)
    next_word.addEventListener('click',()=>{
        
        if(document.querySelector('.hintt')!=null){
            document.querySelector('.hintt').innerHTML=''
        }
        i++;

        if(i>=words.length){

            word_place.removeChild(word_place.firstChild);
            new_div=document.createElement('div')
            new_div.className= 'first'
            new_div.innerHTML = 'Game is over'
            word_place.appendChild(new_div)
            clearInterval(inter)
            document.querySelector(".time").innerHTML ='Time';


        }else{
            new_blocks(i)
        }
    countDownDate = new Date().getTime()+31000;
    letter.forEach(lt=>{
        lt.className='letter'
        console.log(lt.className);

    })
    })
    letter.forEach(lt=> lt.addEventListener('click',(e)=>{
        e.target.className='letterred'
        search(e.target.innerHTML,i)
    }))
    hint.addEventListener('click',()=>{
        showHint(i)
    })
}  

function countdown(){

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".time").innerHTML ='Time: '+seconds;

    if (distance < 0) {
        document.querySelector(".time").innerHTML = "Time is up";
      }
    }
function new_blocks(i){
    word_place.removeChild(word_place.firstChild);
    
        new_div=document.createElement('div')
        new_div.className= 'all_letters'
        for(let j=0;j<words[i].title.length;j++){
            new_letter=document.createElement('div')
            new_letter.className='each'
            new_letter.id=j+1
            new_div.appendChild(new_letter)
        }
        word_place.appendChild(new_div)
    
}