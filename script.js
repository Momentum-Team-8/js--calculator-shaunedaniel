document.addEventListener('click', function (event) {
    console.log(event.target)
})

addEventListener('click', function (event) {
    console.log(event.target.innerText)
    output.innerText += event.target.innerText})