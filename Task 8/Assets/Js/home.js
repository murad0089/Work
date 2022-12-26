
let data =[
    {
        name:'Curnon',
        model:'Otto',
        main_img:"Assets/images/1.jpg",
        side_img1:'Assets/images/2.jpg',
        side_img2:'Assets/images/3.jpg',
        side_img3:'Assets/images/4.jpg',
        size:'WEIMAR - 40MM',
        price:'2.299.000$',
        description:`Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam enim nulla iure eligendi officia nesciunt 
        necessitatibus reiciendis harum accusanti um placeat suscipit
        cum assumenda voluptatum beatae dolores doloribus,
         impedit eius commodi!`
    },
    {
        name:'Curnon',
        model:'Otto',
        main_img:"Assets/images/1.jpg",
        side_img1:'Assets/images/2.jpg',
        side_img2:'Assets/images/3.jpg',
        side_img3:'Assets/images/4.jpg',
        size:'WEIMAR - 40MM',
        price:'2.299.000$',
        description:`Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam enim nulla iure eligendi officia nesciunt 
        necessitatibus reiciendis harum accusanti um placeat suscipit
        cum assumenda voluptatum beatae dolores doloribus,
         impedit eius commodi!`
    },
    {
        name:'Curnon',
        model:'Otto',
        main_img:"Assets/images/1.jpg",
        side_img1:'Assets/images/2.jpg',
        side_img2:'Assets/images/3.jpg',
        side_img3:'Assets/images/4.jpg',
        size:'WEIMAR - 40MM',
        price:'2.299.000$',
        description:`Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam enim nulla iure eligendi officia nesciunt 
        necessitatibus reiciendis harum accusanti um placeat suscipit
        cum assumenda voluptatum beatae dolores doloribus,
         impedit eius commodi!`
    },
    {
        name:'Curnon',
        model:'Otto',
        main_img:"Assets/images/1.jpg",
        side_img1:'Assets/images/2.jpg',
        side_img2:'Assets/images/3.jpg',
        side_img3:'Assets/images/4.jpg',
        size:'WEIMAR - 40MM',
        price:'2.299.000$',
        description:`Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam enim nulla iure eligendi officia nesciunt 
        necessitatibus reiciendis harum accusanti um placeat suscipit
        cum assumenda voluptatum beatae dolores doloribus,
         impedit eius commodi!`
    }
]
let new_div
function create_data(){
    for(let i=0;i<4;i++){
    new_div= document.createElement('div')
    new_div.innerHTML= `  
    <div class="container">
    <div class="header">
        <h2>${data[i].name}</h2>
    </div>
    <div class="product_images">
        <img src="${data[i].main_img}" class="main" alt="">
        <div class="side">
            <img src="${data[i].side_img1}" class="side_element" alt="">
            <img src="${data[i].side_img2}" class="side_element" alt="">
            <img src="${data[i].side_img3}" class="side_element" alt="">
        </div>
    </div>
    <div class="product_descrition">
        <h1>${data[i].model}</h1>
        <h2>${data[i].size}</h2>
        <h4>Price:</h4>
        <h1>${data[i].price}</h1>
        <h5>${data[i].description}</h5>
    </div>
</div>`
document.querySelector('body').appendChild(new_div)
}
}
create_data()

const side = document.querySelectorAll('.side_element')
const main = document.querySelectorAll('.main')

side.forEach(ed => ed.addEventListener('click',(e)=>{
    console.log('img : ', e.target.closest('.product_images').querySelector('.main'));
    const target= e.target.parentElement.parentElement.parentElement
    const t=e.target.src
    e.target.src=target.childNodes[3].childNodes[1].src
    target.childNodes[3].childNodes[1].src=t
}))

// events = [
//     { 'title':"qurban bayrami", "date" : "12.07.2022" },
//     { 'title':"qurban bayrami", "date" : "14.07.2022" },
//     { 'title':"qurban bayrami", "date" : "16.07.2022" },
// ]
// const side = document.querySelectorAll('.side_element')
// const main = document.querySelectorAll('.main')

// side.forEach(ed => ed.addEventListener('click',(e)=>{
//     const target= e.target.parentElement.parentElement.parentElement
//     const t=e.target.src
//     e.target.src=target.childNodes[3].childNodes[1].src
//     target.childNodes[3].childNodes[1].src=t
// }))
