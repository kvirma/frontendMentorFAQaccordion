const lists = document.querySelectorAll(".list")
NodeList.prototype.indexOf = Array.prototype.indexOf; // to use indexOf on nodelists



lists.forEach(list => {
    list.addEventListener('click', ()=>{
        list.classList.toggle("show")
        for(let lst of lists){
            if(lists.indexOf(list) != lists.indexOf(lst) && lst.classList.contains("show")){
                lst.classList.remove("show")
            }
        }
    })
})


