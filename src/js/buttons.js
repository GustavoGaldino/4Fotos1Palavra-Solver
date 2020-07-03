let divTag = document.getElementsByClassName('possible-chars')[0]

charactersArray = [199]


for(let i = 90 ; i >= 65 ; i--){
    charactersArray.push(i)
}

function removeFromList(){
    let charList = document.getElementsByClassName('selected-chars')[0]
    for(element of charList.children){
        if(element.innerHTML === this.innerHTML){
            element.remove()
            break
        }
    }
}

function addToList(){
    let charList = document.getElementsByClassName('selected-chars')[0]
    let sz = charList.children.length
    if(sz >= 16){
        alert('Maximum number of possible characters exceeded')
    }
    else{
        let btn = document.createElement('button')
        btn.classList.add("btn");
        btn.classList.add("btn-primary");
        btn.classList.add("m-1");
        btn.classList.add("px-2");
        btn.classList.add("py-1");
        btn.classList.add("btn-outline-light");
        btn.innerHTML = this.innerHTML
        btn.onclick = removeFromList
        charList.appendChild(btn)
    }
}

for(char of charactersArray.reverse()){
    let btn = document.createElement('button')
    btn.innerHTML = String.fromCodePoint(char)
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.classList.add("m-1");
    btn.classList.add("px-2");
    btn.classList.add("py-1");
    btn.classList.add("btn-outline-light");
    btn.onclick = addToList
    divTag.appendChild(btn)
}