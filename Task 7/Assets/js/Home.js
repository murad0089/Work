    const form =document.getElementById("form") 
    const create_button = document.getElementById("Adding")
    const Title_input = document.getElementById("Title")
    const Priority_input = document.getElementById("Priority")
    const task_list = document.getElementById("tasks")
    let deletebtn;
    let editbtn;

    function load(storage){
        const title = storage.title
        const priority = storage.priority
        
        const task_el = document.createElement("div")
        task_el.classList.add("task")

        const task_content = document.createElement("div")
        task_content.classList.add("content")

        const task_Title_input = document.createElement("input")
        task_Title_input.classList.add("title")
        task_Title_input.type ="text"
        task_Title_input.setAttribute("readonly","readonly")
        task_Title_input.value= title
       
        const task_Priority_input = document.createElement("input")
        task_Priority_input.classList.add("priority")
        task_Priority_input.type ="text"
        task_Priority_input.setAttribute("readonly","readonly")
        task_Priority_input.value= priority
        
        task_list.appendChild(task_el)
        task_el.appendChild(task_content)
        task_content.appendChild(task_Title_input)
        task_content.appendChild(task_Priority_input)

        let img_edit = new Image()
        let img_delete = new Image()
        img_edit.src='./Assets/images/edit.png'
        img_delete.src = './Assets/images/delete.png'
        img_delete.className='delete'
        img_edit.className='edit'

        const buttons= document.createElement("div")
        buttons.classList.add("buttons")
        task_el.appendChild(buttons)
        buttons.appendChild(img_edit)
        buttons.appendChild(img_delete)
        let n=0;
        img_edit.addEventListener('click', () =>{
            if(n==0){
                task_Priority_input.removeAttribute("readonly","readonly")
                task_Title_input.removeAttribute("readonly","readonly")
                n=1    
            }else if(n==1){
                task_Title_input.setAttribute("readonly","readonly")
                task_Priority_input.setAttribute("readonly","readonly")
                n=0
            }
            
        })
        img_delete.addEventListener('click', () =>{
            task_list.removeChild(task_el)
        })
        Title_input.value=''
        Priority_input.value=''

    }

    const start = ()=>{
        const tasks = JSON.parse(localStorage.getItem('task')) 
        localStorage.setItem('edit',0)
        if(!tasks){
            localStorage.setItem('task',JSON.stringify([]))
        }else{
            tasks.forEach(storage => {
                load(storage)
            });
        }
        create_button.addEventListener('click', function(){
            create();
        })
        deletebtn = document.querySelectorAll('.delete')
        editbtn= document.querySelectorAll('.edit')
        console.log(deletebtn)
    }
    start();


    function create(){
        const tasks = JSON.parse(localStorage.getItem('task'))
        const title = Title_input.value
        const priority = Priority_input.value
        
        const task_el = document.createElement("div")
        task_el.classList.add("task")

        const task_content = document.createElement("div")
        task_content.classList.add("content")

        const task_Title_input = document.createElement("input")
        task_Title_input.classList.add("title")
        task_Title_input.type ="text"
        task_Title_input.setAttribute("readonly","readonly")
        task_Title_input.value= title
       
        const task_Priority_input = document.createElement("input")
        task_Priority_input.classList.add("priority")
        task_Priority_input.type ="text"
        task_Priority_input.setAttribute("readonly","readonly")
        task_Priority_input.value= priority
        
        task_list.appendChild(task_el)
        task_el.appendChild(task_content)
        task_content.appendChild(task_Title_input)
        task_content.appendChild(task_Priority_input)

        let img_edit = new Image()
        let img_delete = new Image()
        img_edit.src='./Assets/images/edit.png'
        img_delete.src = './Assets/images/delete.png'

        img_delete.className='delete'
        img_edit.className='edit'

        const buttons= document.createElement("div")
        buttons.classList.add("buttons")
        task_el.appendChild(buttons)
        buttons.appendChild(img_edit)
        buttons.appendChild(img_delete)
        let n=0;

        Title_input.value=''
        Priority_input.value=''
        const storage={
            'title': title,
            'priority': priority, 
            'edit':'0'  
        }
        tasks.push(storage);

        console.log("Salam")

        img_edit.addEventListener('click', () =>{
            if(n==0){
                task_Priority_input.removeAttribute("readonly","readonly")
                task_Title_input.removeAttribute("readonly","readonly")
                n=1    
            }else if(n==1){
                task_Title_input.setAttribute("readonly","readonly")
                task_Priority_input.setAttribute("readonly","readonly")
                n=0
            }
            
        })
        img_delete.addEventListener('click', () =>{
            task_list.removeChild(task_el)
        })
        
        localStorage.setItem('task',JSON.stringify(tasks))

       
       
    }

const deletediv= (e)=>{
    const todo=e.target.parentElement.parentElement
    const t= todo.firstChild.children[0].value
    const p= todo.firstChild.children[1].value
    let tasks = JSON.parse(localStorage.getItem('task'))
    tasks = tasks.filter(td => ((td.title != t)||(td.priority != p)));
    localStorage.setItem('task',JSON.stringify(tasks))
    
}
const editdiv= (e)=>{
    let tasks = JSON.parse(localStorage.getItem('task'))
    
    const todo=e.target.parentElement.parentElement
    const t= todo.firstChild.children[0].value
    const p= todo.firstChild.children[1].value
    let index
    if(localStorage.getItem('edit')=='0'){
        index = tasks.indexOf(tasks.find(td => (td.title==t && td.priority ==p)))
        tasks[index].edit='1';
        localStorage.setItem('edit','1');
        localStorage.setItem('task',JSON.stringify(tasks))
    }else if(localStorage.getItem('edit')=='1'){
        index = tasks.indexOf(tasks.find(td => (td.edit == '1')))
        tasks[index].edit='0';
        localStorage.setItem('edit','0')
        localStorage.setItem('task',JSON.stringify(tasks))
    }
    tasks[index].title = t
    tasks[index].priority=p
    // tasks[index].priority=p
    localStorage.setItem('task',JSON.stringify(tasks))
    
}

editbtn.forEach(ed => ed.addEventListener('click',editdiv))
deletebtn.forEach(bt => bt.addEventListener('click',deletediv))




