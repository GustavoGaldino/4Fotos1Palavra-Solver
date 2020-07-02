async function calculateWords(){
    let charList = document.getElementsByClassName('selected-chars')[0].children
    let stringSize = document.getElementsByClassName('str-size')[0].value

    let modalBody = document.getElementsByClassName('modal-body')[0]
    // deleting all child nodes inside the modal body
    modalBody.innerHTML = ""

    let listOfCharactersTag = document.getElementsByClassName('possible-chars')[0]

    let charactersFrequency = {}

    for(character of listOfCharactersTag.children){
        charactersFrequency[character.innerHTML] = 0
    }

    for(selectedCharacter of charList){
        charactersFrequency[selectedCharacter.innerHTML]++
    }

    if(charList.length < stringSize){
        alert('You need to add more characters to the character list')
    }

    else{ 
        for(possibleWord of portugueseWords){
            if(possibleWord.length != stringSize){
                continue;
            }
            else{
                possibleWord = possibleWord.toUpperCase()
                let auxObject = JSON.parse(JSON.stringify(charactersFrequency));

                let hasDot = false;

                for(char of possibleWord){
                    if(char == '.'){
                        hasDot = true
                        break;
                    }
                    auxObject[char]--
                }

                if(hasDot){
                    continue
                }

                let isPossibleAnswer = true

                for(char in auxObject){
                    if(auxObject[char] < 0){
                        isPossibleAnswer = false
                        break
                    }
                }
                
                if(isPossibleAnswer){
                    let spanTag = document.createElement('tag')
                    spanTag.classList.add('text-dark')
                    spanTag.innerHTML = possibleWord
                    let brTag = document.createElement('br')
                    modalBody.appendChild(spanTag)
                    modalBody.appendChild(brTag)
                }
            }
        }
    }
}