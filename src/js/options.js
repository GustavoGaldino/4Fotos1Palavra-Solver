let selectTag = document.getElementsByClassName('str-size')[0]


const minStringSize = 3
const maxStringSize = 12

for(let i = minStringSize ; i <= maxStringSize ; i++){
    let optionTag = document.createElement('option')
    optionTag.innerHTML = i
    selectTag.appendChild(optionTag)
}