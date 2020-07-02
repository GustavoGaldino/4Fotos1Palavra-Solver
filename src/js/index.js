function calculateWords(){
    let charList = document.getElementsByClassName('selected-chars')[0]
    let stringSize = document.getElementsByClassName('str-size')[0].value

    let modalBody = document.getElementsByClassName('modal-body')[0]
    // deleting all child nodes inside the modal body
    modalBody.innerHTML = ""

    if(charList.children.length < stringSize){
        alert('You need to add more characters to the character list')
    }
    else{

    }
}