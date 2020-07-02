var portugueseWords = ""

async function fetchData(){
    let res = await fetch('https://cin.ufpe.br/~gcgm/solver/palavras.txt')
    let textRes = await res.text()
    portugueseWords = textRes.split('\n')
}

fetchData()