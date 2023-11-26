const list = document.querySelectorAll(".list")
const spinner = document.querySelectorAll(".spinner")
const checkmark = document.querySelectorAll(".checkmark")
const dashed = document.querySelectorAll(".dashed-circle")
const rounded = document.querySelectorAll(".rounded")
let completed = document.querySelector("#point")
let completedValue = document.querySelector("#completed")
const acc = document.querySelectorAll(".accordion")
const coll = document.querySelectorAll(".coll")
const cross = document.querySelector("#cross")
const btn1 = document.querySelector("#arrowup")
const btn2 = document.querySelector("#arrowdown")
const card = document.querySelector(".cards")
const dropdown = document.querySelector("#alias")
const menu = document.querySelector(".menu")
const bell = document.querySelector("#notification-icon")
const alertMenu = document.querySelector(".alerts")




dropdown.onclick = function(){    
    if(alertMenu.classList.contains('alert-drop')){
        alertMenu.classList.remove('alert-drop')
        menu.classList.toggle("menu-drop")
    }
    else {
    menu.classList.toggle("menu-drop")
}
}


bell.onclick = function(){        
    if(menu.classList.contains('menu-drop')){
        menu.classList.remove('menu-drop')
        alertMenu.classList.toggle("alert-drop")
    }
    else{
        alertMenu.classList.toggle("alert-drop")
    }
}
btn1.onclick = function(){
    btn1.style.display = 'none'
    btn2.style.display = 'block'
    card.style.display = 'none'
}
btn2.onclick = function(){
    btn2.style.display = 'none'
    btn1.style.display = 'block'
    card.style.display = 'block'
}
cross.onclick = function () {
    cross.parentElement.parentElement.parentElement.remove()
}
    for (let i = 0; i < list.length; i++) {           
    dashed[i].onclick = function(){
        dashed[i].style.display = 'none'
        spinner[i].style.display = 'block'        
        setTimeout(() => {
            dashed[i].style.display = 'none'
            spinner[i].style.display = 'none'                        
            checkmark[i].style.display = 'block'                                
            completed = +completed.value + 1 
            console.log(completed)
            completedValue.textContent = completed + 1
        }, 1000);
    }
    checkmark[i].onclick = function(){
        checkmark[i].style.display = 'none'
        spinner[i].style.display = 'none'
        dashed[i].style.display = 'block' 
        completed = parseInt(completedValue) - 1
        completedValue.textContent = completed
    }
}    


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', () => {                    
        coll[i].classList.toggle('collapse')                          
        let panel = acc[i].nextElementSibling;            
        if (panel.style.display === "flex") {
            panel.style.display = "none"            
        }
        else {
            panel.style.display = "flex"            
        }                                 
    }
    )
}
         
    