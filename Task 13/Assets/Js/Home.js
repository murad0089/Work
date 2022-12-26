var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/search.php?key=pk.6071c5c3a9cb08816a0322571ed3bb53&q=baku&format=json",
    "method": "GET"
  }
var icons = {
    'wind' : '<i class="fas fa-wind"></i>',
    'cloudy' : '<i class="fas fa-cloud"></i>',
    'clear-day' : '<i class="far fa-sun"></i>',
    'clear-night' : '<i class="far fa-moon"></i>',
    'rain' : '<i class="fas fa-cloud-showers-heavy"></i>',
    'snow' : '<i class="far fa-snowflake"></i>',
    'fog' : '<i class="fas fa-smog"></i>',
    'partly-cloudy-day' : '<i class="fas fa-cloud-sun"></i>',
    'partly-cloudy-night' : '<i class="fas fa-cloud-moon"></i>'
}
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return parseInt(fToCel)
    
} 
let loc
const search_box = document.querySelector('.search')
function get_location(city) {
    fetch(`https://us1.locationiq.com/v1/search.php?key=pk.6071c5c3a9cb08816a0322571ed3bb53&q=${city}&format=json`)
    .then(response=>response.json()).then(data =>{
        let i =0
            let newdiv=document.createElement('div')
            newdiv.innerHTML=data[0].lat+','+data[0].lon
            newdiv.id='w0'
            document.querySelector('.location').appendChild(newdiv)
            newdiv=document.createElement('div')
            newdiv.innerHTML=data[0].display_name
            newdiv.id='w1'
            document.querySelector('.location').appendChild(newdiv)
            
        });
    }
    

console.log();
search_box.addEventListener('search',()=>{
    get_location(search_box.value)
    setTimeout(()=>{ 
    loc=document.querySelector('#w0').innerHTML
    get_weather(loc)
},1000)
})
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
function get_first_day_of_month3(first_day_of_month){
    switch(first_day_of_month.getDay()){
        case(0):
        return "Sun"
        case(1):
        return "Mon"
        case(2):
        return "Tue"
        case(3):
        return "Wed"
        case(4):
        return "Thu"
        case(5):
        return "Fri"
        case(6):
        return "Sat"
    }
}
let date
function get_weather(coordinates){
    let proxy='https://api.allorigins.win/raw?url='
    let url='https://api.darksky.net/forecast/f1fda39a7fe27931d4d00a90d7cafe04/'+coordinates;
    fetch(proxy+url)
    .then(response => response.json()).then(data=>{
        let current= data.currently
        let current_time=new Date(current.time*1000)
        document.querySelector('.search-box').style.display='none'
        let newdiv=document.createElement('div')
        newdiv.className='today'
        newdiv.innerHTML=`
        <div class="today_date">
        <p class="week">${get_first_day_of_month(current_time)}</p>
        <p class="date">${get_month_year(current_time)}  ${current_time.getDate()} ${current_time.getFullYear()}</p>
        <p class="loc">${document.querySelector('#w1').innerHTML}</p>
    </div>
    <div class="today_weather">
        ${icons[current.icon]}
        <p class="today_temperature">${fToC(current.temperature)} C</p>
        <p class="today_summary">${current.summary}</p></div>
        `
        let daily=data.daily
        daily=daily.data
        console.log(daily);
        document.querySelector('.container').appendChild(newdiv)
        newdiv=document.createElement('div')
        newdiv.innerHTML=`<div class="next_days">
        <div class="header">
            <div class="contents">
                <p>Humidity</p>
                <p>Wind</p>
            </div>
            <div class="variables">
                <p>${parseInt(current.humidity*100)}%</p>
                <p>${current.windSpeed}km/s</p>
            </div>
        </div>
        <div class="all_next_days">
            
        </div>
        
    </div>`
    document.querySelector('.container').appendChild(newdiv)
    for(let i=1;i<8;i++){
        newdiv=document.createElement('div')
        newdiv.className='next'
        icon=daily[i].icon

        date=new Date(daily[i].time*1000)

        newdiv.innerHTML=`${icons[icon]}
        <p>${get_first_day_of_month3(date)}</p>
        <p>${fToC(daily[i].temperatureMax)} C</p>`
        document.querySelector('.all_next_days').appendChild(newdiv)
    }
    })
    
}






{/* <div class="next">
                
            </div>  */}

//   fetch('https://api.darksky.net/forecast/f1fda39a7fe27931d4d00a90d7cafe04/$%7Bcity_lat%7D,$%7Bcity_lon%7D')