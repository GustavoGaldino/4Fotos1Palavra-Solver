let divTag = document.getElementsByClassName('possible-chars')[0]

charactersArray = [192,193,194,195,200,201,202,204,205,206,210,211,212,217,218,219]


for(let i = 90 ; i >= 65 ; i--){
    charactersArray.push(i)
}

for(char of charactersArray.reverse()){
    let btn = document.createElement('button')
    btn.innerHTML = String.fromCodePoint(char)
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.classList.add("m-1");
    btn.classList.add("px-2");
    btn.classList.add("py-1");
    divTag.appendChild(btn)
}