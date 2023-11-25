
const list = document.querySelector(".list")
const spinner = document.querySelector(".spinner")
const checkmark = document.querySelector(".checkmark")
const dashed = document.querySelector(".dashed-circle")
const completed = document.querySelector("#point")
const completedValue = document.querySelector("#completed")
const acc = document.querySelectorAll(".accordion")
const coll = document.querySelectorAll(".coll")

dashed.onclick = function(){
    dashed.style.display = 'none'
    spinner.style.display = 'block'
    setTimeout(() => {
        dashed.style.display = 'none'
        spinner.style.display = 'none'
        checkmark.style.display = 'block'
        completed.value =+ 1
        completedValue.textContent = completed.value
    }, 1000);
}
checkmark.onclick = function(){
    checkmark.style.display = 'none'
    spinner.style.display = 'none'
    dashed.style.display = 'block'
    completed.value =- 1
    completedValue.textContent = completed.value
}

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', () => {
        acc[i].classList.toggle ('collapse')
        for (let j = 0; j < coll.length; j++) {            
        coll[j].classList.toggle('collapse')                                          
        }    
        let panel = acc[i].nextElementSibling;
        if (panel.style.display === "flex") {
          panel.style.display = "none";
        } else {
          panel.style.display = "flex";
        }    
        
    }
    )
}
         
    