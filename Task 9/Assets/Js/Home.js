events = [
    { title:"qurban bayrami", date : "12.08.2022" },
    { title:"deliler bayrami", date : "14.09.2022" },
    { title:"Ruhin bayrami", date : "16.10.2022" },
    { title:"Nizami bayrami", date : "17.10.2022" },
    { title:"Murad bayrami", date : "19.10.2022" },
]
let event_list=[]
for(let i=0;i<events.length;i++){
    event_list.push({title:events[i].title,day:events[i].date.slice(0,2),month:events[i].date.slice(3,5),year:events[i].date.slice(6,)}) 
}
let this_day
let next_event1
let next_event2

let first_day
const previous_month = document.querySelector(".go_back")
const next_month = document.querySelector(".go_next")
let month = document.querySelector("div.month_year > p")
let days =document.querySelectorAll('div.days > div')
const get_element=document.querySelector('.days')
let date = new Date()
let n
let new_element
let first_day_of_month
function start(){
    get_element.replaceChildren('')
    document.querySelector('.active').style.display='none'
    create_calendar(date)
    let a_div=document.createElement('div')
    a_div.className='week_days'
    a_div.innerHTML=`<div>M</div>
    <div>T</div>
    <div>W</div>
    <div>T</div>
    <div>F</div>
    <div>S</div>
    <div style="color: red;">S</div>`
    document.querySelector('.week_days').appendChild(a_div)
    first_day_of_month= date
    first_day_of_month.setDate(1)
    first_day =get_element.childNodes[1]
    first_day.className= get_first_day_of_month(first_day_of_month)
    month.textContent= get_month_year(first_day_of_month) + date.getFullYear().toString()
    check_events(date)
    get_element.childNodes.forEach(d => d.addEventListener('click',(e)=>{
        first_day_of_month.setDate(e.target.innerHTML)
        this_day = e.target.innerHTML
        next_event1=document.querySelector('.next1')
        next_event2=document.querySelector('.next2')
        next_event1.innerHTML=''
        next_event2.innerHTML=''
        document.querySelector('.week').innerHTML=get_first_day_of_month(first_day_of_month)
        document.querySelector('.today').innerHTML= get_month_year(first_day_of_month) +' , '+first_day_of_month.getDate().toString()
        console.log(first_day_of_month)
        for(let i =0;i<event_list.length;i++){
            if(date.getMonth()+1 == Number(event_list[i].month) && date.getFullYear() == Number(event_list[i].year) && date.getDate() == Number(event_list[i].day)){
               document.querySelector('.title').innerHTML=event_list[i].title.toString()
               break;
            }else{
                document.querySelector('.title').innerHTML=' '
            }
            
        }
        for(let i =0;i<event_list.length;i++){
            console.log(event_list[i].title.toString()+' ' +event_list[i].day.toString());
            if(date.getMonth()+1 <= Number(event_list[i].month) && date.getFullYear() <= Number(event_list[i].year) && (date.getDate() < Number(event_list[i].day)||date.getMonth()+1 < Number(event_list[i].month))&&i<event_list.length-1){
               
                document.querySelector('.next1').innerHTML = event_list[i].title.toString()+' ' +event_list[i].day.toString()
                document.querySelector('.next2').innerHTML = event_list[i+1].title.toString()+' ' +event_list[i+1].day.toString()
                break
               }else if(date.getMonth()+1 <= Number(event_list[i].month) && date.getFullYear() <= Number(event_list[i].year) && (date.getDate() < Number(event_list[i].day)||date.getMonth()+1 < Number(event_list[i].month))&&i<event_list.length){
                document.querySelector('.next1').innerHTML = event_list[i].title.toString()+' ' +event_list[i].day.toString()
                
               }
        }
        // document.querySelector('.active').style.display='none'
        // document.querySelector('.active').style.display='flex'
    }))
}
function check_events(date){

    for(let i =0;i<event_list.length;i++){
        if(date.getMonth()+1 == Number(event_list[i].month) && date.getFullYear() == Number(event_list[i].year)){
            document.getElementById(event_list[i].day).style.backgroundColor = 'red'
            document.getElementById(event_list[i].day).style.color = 'white'

            
        }
    }
}
function create_calendar(first_day_of_month1){
    let a = first_day_of_month1
    a.setMonth(a.getMonth()+1)
    a.setDate(0)
    n=a.getDate()
    for(let i=1;i<n+1;i++){
        new_element = document.createElement('div')
        new_element.innerHTML = i
        new_element.id= i
        get_element.appendChild(new_element)
    }
    
}
function get_month_year(first_day_of_month){
    switch(first_day_of_month.getMonth()){
        case(0):
        return "January "
        case(1):
        return "Febrary "
        case(2):
        return "March "
        case(3):
        return "April "
        case(4):
        return "May "
        case(5):
        return "June "
        case(6):
        return "July "
        case(7):
        return "August "
        case(8):
        return "September "
        case(9):
        return "October "
        case(10):
        return "November "
        case(11):
        return "December "
    }
}
function get_first_day_of_month(first_day_of_month){
    switch(first_day_of_month.getDay()){
        case(0):
        return "sunday"
        case(1):
        return "monday"
        case(2):
        return "tuesday"
        case(3):
        return "wednesday"
        case(4):
        return "thursday"
        case(5):
        return "friday"
        case(6):
        return "saturday"
    }
}
start()
previous_month.addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1)
    document.querySelector('.active').style.display='none'
    get_element.replaceChildren('')
    create_calendar(date)
    first_day_of_month= date
    first_day_of_month.setDate(1)
    first_day =get_element.childNodes[1]
    first_day.className= get_first_day_of_month(first_day_of_month)
    month.textContent= get_month_year(first_day_of_month) + date.getFullYear().toString()
    check_events(date)
    get_element.childNodes.forEach(d => d.addEventListener('click',(e)=>{
        document.querySelector('.active').style.display='flex'
        first_day_of_month.setDate(e.target.innerHTML)
        this_day = e.target.innerHTML
        next_event1=document.querySelector('.next1')
        next_event2=document.querySelector('.next2')
        next_event1.innerHTML='none'
        next_event2.innerHTML=''
        document.querySelector('.week').innerHTML=get_first_day_of_month(first_day_of_month)
        document.querySelector('.today').innerHTML= get_month_year(first_day_of_month) +' , '+first_day_of_month.getDate().toString()
        for(let i =0;i<event_list.length;i++){
            if(date.getMonth()+1 == Number(event_list[i].month) && date.getFullYear() == Number(event_list[i].year) && date.getDate() == Number(event_list[i].day)){
               document.querySelector('.title').innerHTML=event_list[i].title.toString()
               break;
            }else{
                document.querySelector('.title').innerHTML=' '
            }
            
        }
        for(let i =0;i<event_list.length;i++){
            console.log(event_list[i].title.toString()+' ' +event_list[i].day.toString());
            if(date.getMonth()+1 <= Number(event_list[i].month) && date.getFullYear() <= Number(event_list[i].year) && (date.getDate() < Number(event_list[i].day)||date.getMonth()+1 < Number(event_list[i].month))&&i<event_list.length-1){
               
                document.querySelector('.next1').innerHTML = event_list[i].title.toString()+' ' +event_list[i].day.toString()
                document.querySelector('.next2').innerHTML = event_list[i+1].title.toString()+' ' +event_list[i+1].day.toString()
                break
               }else if(date.getMonth()+1 <= Number(event_list[i].month) && date.getFullYear() <= Number(event_list[i].year) && (date.getDate() < Number(event_list[i].day)||date.getMonth()+1 < Number(event_list[i].month))&&i<event_list.length){
                document.querySelector('.next1').innerHTML = event_list[i].title.toString()+' ' +event_list[i].day.toString()
                
               }
        }
        // document.querySelector('.active').style.display='none'
        // document.querySelector('.active').style.display='flex'
    }))

})
next_month.addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1)
    document.querySelector('.active').style.display='none'
    get_element.replaceChildren('')
    create_calendar(date)
    first_day_of_month= date
    first_day_of_month.setDate(1)
    first_day =get_element.childNodes[1]
    first_day.className= get_first_day_of_month(first_day_of_month)
    month.textContent= get_month_year(first_day_of_month) + date.getFullYear().toString()
    check_events(date)
    get_element.childNodes.forEach(d => d.addEventListener('click',(e)=>{
        document.querySelector('.active').style.display='flex'
        first_day_of_month.setDate(e.target.innerHTML)
        this_day = e.target.innerHTML
        next_event1=document.querySelector('.next1')
        next_event2=document.querySelector('.next2')
        next_event1.innerHTML='none'
        next_event2.innerHTML=''
        document.querySelector('.week').innerHTML=get_first_day_of_month(first_day_of_month)
        document.querySelector('.today').innerHTML= get_month_year(first_day_of_month) +' , '+first_day_of_month.getDate().toString()
        for(let i =0;i<event_list.length;i++){
            if(date.getMonth()+1 == Number(event_list[i].month) && date.getFullYear() == Number(event_list[i].year) && date.getDate() == Number(event_list[i].day)){
               document.querySelector('.title').innerHTML=event_list[i].title.toString()
               break;
            }else{
                document.querySelector('.title').innerHTML=' '
            }
            
        }
        for(let i =0;i<event_list.length;i++){
            console.log(event_list[i].title.toString()+' ' +event_list[i].day.toString());
            if(date.getMonth()+1 <= Number(event_list[i].month) && date.getFullYear() <= Number(event_list[i].year) && (date.getDate() < Number(event_list[i].day)||date.getMonth()+1 < Number(event_list[i].month))&&i<event_list.length-1){
               
                document.querySelector('.next1').innerHTML = event_list[i].title.toString()+' ' +event_list[i].day.toString()
                document.querySelector('.next2').innerHTML = event_list[i+1].title.toString()+' ' +event_list[i+1].day.toString()
                break
               }else if(date.getMonth()+1 <= Number(event_list[i].month) && date.getFullYear() <= Number(event_list[i].year) && (date.getDate() < Number(event_list[i].day)||date.getMonth()+1 < Number(event_list[i].month))&&i<event_list.length){
                document.querySelector('.next1').innerHTML = event_list[i].title.toString()+' ' +event_list[i].day.toString()
                
               }
        }
        // document.querySelector('.active').style.display='none'
        // document.querySelector('.active').style.display='flex'
    }))
    
})
