function generateRandomNumber() {
    let fromNumber = document.getElementById("from-input").value
    fromNumber = Number(fromNumber)

    let toNumber = document.getElementById("to-input").value
    toNumber = Number(toNumber)

    let difference = toNumber - fromNumber

    let randomNumber = Math.floor(Math.random() * (difference + 1)) + fromNumber
    document.getElementById("number").innerHTML = randomNumber

    document.getElementById("from-input").value = ""
    document.getElementById("to-input").value = ""
}