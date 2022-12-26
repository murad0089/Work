fetch('./Assets/Js/allProsData.json')
.then(response => response.json())
.then(data=>{
    let new_data
    main_data=data.data.taskers
    let topPro_checkbox = document.querySelector("input[name=Top_Pros]");
    let newPro_checkbox = document.querySelector("input[name=New_Pros]");
    let supervisor_checkbox = document.querySelector("input[name=Supervisors]");
    let Pro_checkbox = document.querySelector("input[name=Pros]");
    let by_rating=document.querySelector('select[name=rating]')
    let by_task=document.querySelector('select[name=task]')
    let rating
    let count
    window.addEventListener('change',()=>{
        new_data=main_data
        if(topPro_checkbox.checked){
            new_data=new_data.filter(top_pro)
        }
        if(newPro_checkbox.checked){
            new_data=new_data.filter(new_pro)
        }if(supervisor_checkbox.checked){
            new_data=new_data.filter(supervisor)
        }
        if(Pro_checkbox.checked){
            new_data=new_data.filter(pro)
        }
        
        console.log('hello',rating,count);
        if(by_rating.value=='Descending'&&by_task.value=='Descending'){
            new_data.sort((a, b) => b.averageRating - a.averageRating || b.completedTasks-a.completedTasks);
        }else if(by_rating.value=='Ascending' && by_task.value=='Descending'){
            new_data.sort((a, b) => a.averageRating - b.averageRating || b.completedTasks-a.completedTasks)
        }else if(by_rating.value=='Descending'&& by_task.value=='Ascending'){
            new_data.sort((a, b) => b.averageRating - a.averageRating || a.completedTasks-b.completedTasks)
        }else if(by_task.value=='Ascending'&& by_rating.value=='Ascending'){
            new_data.sort((a, b) => a.averageRating - b.averageRating || a.completedTasks-b.completedTasks)
        }
        create(new_data)

        
    })



   
    function create(main_data){
        document.querySelector('.allpros').innerHTML=''
        main_data.forEach(dt => {
            let new_div=document.createElement('div')
            new_div.className='pro'
            new_div.innerHTML=`<div class="profile">
            <img src='${dt.user.profile_picture ? dt.user.profile_picture.publicUrl : dt.user.profile_picture}'class="pp" alt="" width="40px" height="40px">
            <p>${dt.user.name} ${dt.user.surname}</p>
            <div class="stars">
                ${stars(dt.averageRating)}
                <div class="task_count">(${dt.completedTasks})</div>
            </div>
        </div>
        <div class="details">
            <div class="task_numbers">
                <img src="Assets/images/Vector 119.png" alt="">
                <p>${dt.completedTasks}</p>
            </div>
            <div class="type">
                <img src="Assets/images/Vector 132.png" alt="">
                <p>${check_toppro(dt)}</p>
            </div>
        </div>
        <div class="bio">${dt.bio}</div>`
        document.querySelector('.allpros').appendChild(new_div)
        });
    }
    create(main_data)
    
})
function stars(n){
    let str=`<img src="Assets/images/Vector.png" alt="" width="10px" height="10px">`
    let sum=''
    for(let i =1;i<=n;i++){
        sum+=str
    }
    return sum
}

function check_toppro(dt){
    let start = new Date(dt.startDate)
    if(dt.eliteTasker){
        return 'Top Pro'
    }else if(dt.supervisor){
        return 'Supervisor'
    }else if(new Date()-start< 2592000000){
        return 'New Pro'
    }else{
        return 'Pro'
    }
}
function top_pro(dt){
    if(dt.eliteTasker){
        return dt
    }  
}
function new_pro(dt){
    let start = new Date(dt.startDate)
    if(new Date()-start< 2592000000){
        return dt
    } 
}function supervisor(dt){
    if(dt.supervisor){
        return dt
    }  
}
function pro(dt){
    if(!dt.supervisor){
        return dt
    }
}