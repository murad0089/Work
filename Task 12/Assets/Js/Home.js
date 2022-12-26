const picture = document.querySelector('.pictures')
let picture_list= [
    './Assets/images/1.jpg','./Assets/images/2.jpg','./Assets/images/3.jpg','./Assets/images/4.jpg','./Assets/images/5.jpg',
    './Assets/images/6.jpg','./Assets/images/7.jpg','./Assets/images/8.jpg','./Assets/images/9.jpg','./Assets/images/0.jpg']
const generate = document.querySelector('.generate')
let big_div
    
function generating(i){
    big_div=document.createElement('div')
    big_div.className='big_div'
    for(let j=0;j<i;j++){
        let new_div=document.createElement('div')
        new_div.id=j
        let new_image=document.createElement('img')
        new_image.src=picture_list[Math.floor(Math.random()*10)]
        new_image.height=200
        new_image.width=150

        big_div.appendChild(new_div)
        new_div.appendChild(new_image)
    }
    picture.appendChild(big_div)

}
function add_edit_delete_change(){
    document.querySelector('.buttons').innerHTML=''
    add=document.createElement('button')
    change=document.createElement('button')
    Delete=document.createElement('button')
    edit=document.createElement('button')
    add.innerHTML='Add'
    edit.innerHTML='Edit'
    change.innerHTML='Change'
    Delete.innerHTML='Delete'
    add.className='Add'
    edit.className='Edit'
    change.className='Change'
    Delete.className='Delete'
    add.onclick=adding
    edit.onclick=editing
    change.onclick=changing
    Delete.onclick=deleting
    document.querySelector('.buttons').appendChild(add)
    document.querySelector('.buttons').appendChild(change)
    document.querySelector('.buttons').appendChild(Delete)
    document.querySelector('.buttons').appendChild(edit)

    
}
function adding(){
    document.querySelector('.buttons').innerHTML=''
        element=document.createElement('button')
        input=document.createElement('input')
        place=document.createElement('input')
        input.placeholder='URL'
        place.placeholder='Place'
        input.type='text'
        place.type='text'
        input.id='add_input'
        place.id='add_place'
        element.id='add_element'
        element.innerHTML='Add'
        element.onclick=add_new_image
        document.querySelector('.buttons').appendChild(element)
        document.querySelector('.buttons').appendChild(input)
        document.querySelector('.buttons').appendChild(place)
        element=document.querySelector('#add_element')
        input=document.querySelector('#add_input')
        place=document.querySelector('#add_place')
}
function add_new_image(){
            new_div=document.createElement('div')
            new_image=document.createElement('img')
            new_image.src=input.value
            new_image.height=200
            new_image.width=150
            document.querySelector('.big_div').insertBefore(new_div,document.getElementById(place.value))
            new_div.appendChild(new_image)
            add_edit_delete_change();
}
function deleting(){
    document.querySelector('.buttons').innerHTML=''
    element=document.createElement('button')
    place=document.createElement('input')
    place.placeholder='Place'
    place.type='text'
    place.id='add_place'
    element.id='add_element'
    element.innerHTML='Delete'
    element.onclick=delete_image
    document.querySelector('.buttons').appendChild(element)
    document.querySelector('.buttons').appendChild(place)
    element=document.querySelector('#add_element')
    place=document.querySelector('#add_place')

}
function delete_image(){
    document.getElementById((parseInt(place.value)-1).toString()).remove()
    add_edit_delete_change();
}
function editing(){
    document.querySelector('.buttons').innerHTML=''
    element=document.createElement('button')
    input=document.createElement('input')
    place=document.createElement('input')
    input.placeholder='URL'
    place.placeholder='Place'
    input.type='text'
    place.type='text'
    input.id='add_input'
    place.id='add_place'
    element.id='add_element'
    element.innerHTML='Edit'
    element.onclick=edit_image
    document.querySelector('.buttons').appendChild(element)
    document.querySelector('.buttons').appendChild(input)
    document.querySelector('.buttons').appendChild(place)
    element=document.querySelector('#add_element')
    input=document.querySelector('#add_input')
    place=document.querySelector('#add_place')
}
function edit_image(){
    document.getElementById((parseInt(place.value)-1).toString()).firstChild.src=input.value
    add_edit_delete_change();
}
function changing(){
    document.querySelector('.buttons').innerHTML=''
    element=document.createElement('button')
    width=document.createElement('input')
    height=document.createElement('input')
    place=document.createElement('input')
    width.placeholder='width'
    height.placeholder='height'
    place.placeholder='Place'
    width.type='text'
    height.type='text'
    place.type='text'
    width.id='add_width'
    height.id='add_height'
    place.id='add_place'
    element.id='add_element'
    element.innerHTML='Change'
    element.onclick=change_image
    document.querySelector('.buttons').appendChild(element)
    document.querySelector('.buttons').appendChild(width)
    document.querySelector('.buttons').appendChild(height)
    document.querySelector('.buttons').appendChild(place)
    element=document.querySelector('#add_element')
    width=document.querySelector('#add_width')
    height=document.querySelector('#add_height')
    place=document.querySelector('#add_place')
}
function change_image(){
    document.getElementById((parseInt(place.value)-1).toString()).firstChild.width=width.value
    document.getElementById((parseInt(place.value)-1).toString()).firstChild.height=parseInt(height.value)
    add_edit_delete_change();
} 

let add;
let edit
let change;
let Delete;
let element;
let input;
let width;
let height;
let place;
generate.addEventListener('click',()=>{
    // document.querySelector('.big_div').remove()
    input=document.querySelector('.input')
    if(parseFloat(input.value)<=10&&parseFloat(input.value)>=1){
    generating(parseFloat(input.value))
    add_edit_delete_change();
    
}else{
    alert('Incorrect input')
}
})
