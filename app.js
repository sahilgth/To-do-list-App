
let btn = document.querySelector('button')
let inp = document.querySelector('input')
let ul = document.querySelector('ul');



btn.addEventListener("click", function(){
    let li = document.createElement('li')
    li.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = '🗑️';
    delbtn.classList.add('delete');

    ul.appendChild(li) // task ko add karega
    li.appendChild(delbtn) // task k saath delete button ko add karega

    inp.value="" // will leave the inpur bar blank

})

// DELETE BUTTONS - only for existing buttons/tasks nor new tasks/buttons ( Its working of AddEventListner) - Solution = EVENT DELIGATION
// let delbtns = document.querySelectorAll(".delete");
// for ( delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let parentel =this.parentElement;
//         parentel.remove();
//     })
// }



// EVENT DELIGATION - EVENT BUBBLING
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('deleted');
    }
});