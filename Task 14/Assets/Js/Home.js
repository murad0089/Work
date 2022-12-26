fetch('./Assets/Js/data.json')
.then(response=>response.json())
.then(data=>{
    let main_data=data.data.services
    main_data.forEach(dt => {
        let new_div=document.createElement('div')
        new_div.className='service'
        let second_div=document.createElement('div')
        second_div.className='image'
        let image=document.createElement('img')
        image.src=dt.cover_img.publicUrl
        image.width=350
        image.height=250
        let service_payment=document.createElement('div')
        service_payment.className='service_payment'
        let p=document.createElement('p')
        p.innerHTML=dt.title_az
        service_payment.appendChild(p)
        second_div.appendChild(image)
        second_div.appendChild(service_payment)
        new_div.appendChild(second_div)
        let one_div=document.createElement('div')
        one_div.className='service_names'
        for(let i=0;i<dt.subServices.length;i++){
            let link_div=document.createElement('div')
            let new_p=document.createElement('a')
            new_p.innerHTML=dt.subServices[i].title_az
            link_div.appendChild(new_p)
            one_div.appendChild(link_div)
        }
        new_div.appendChild(one_div)
        document.querySelector('.services').appendChild(new_div)
    });

})
let x
// function clicking(){
//     x= window.matchMedia('(max-width:600px)')
//     if(x.matches){
//         const service= document.querySelectorAll('.service')
//         console.log('salam1')
//         service.forEach(sv=>{
//             let image=sv.firstChild
//             console.log('salam2')
//             image.addEventListener('click',(e)=>{
//                 if(e.target.nextSibling.style.display=='none'){
//                     e.target.nextSibling.style.display='block'
//                 }else{
//                     e.target.nextSibling.style.display='none'
//                 }

//             })
            
//         })
//     }else{
//         console.log('sagol')
//     }
// }
function display(){
    let img=document.querySelectorAll('.image')
    img.forEach(ad=>{
        ad.addEventListener('click',(e)=>{
            if(e.target.nextSibling.style.display=='none'&&screen.width<600){
                e.target.nextSibling.style.display='block'
            }else if(screen.width<600){
                e.target.nextSibling.style.display='none'
            }
        })
        
    
    })
}


setTimeout(display,1000)