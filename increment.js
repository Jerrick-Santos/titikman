happy_list = document.getElementsByClassName("happy")
sad_list = document.getElementsByClassName("sad")

function populateHappyIds(){
    for(let i = 0; i < happy_list.length; i++){
        happy_list[i].setAttribute("id", "happy-" + i)
    }
}

function populateSadIds(){
    for(let i = 0; i < sad_list.length; i++){
        sad_list[i].setAttribute("id", "sad-" + i)
    }
}

populateHappyIds()
populateSadIds()

function incDecHappy(id){

    num = parseInt(id[id.length - 1])
    target = document.getElementById("happy-" + num)

    if (target.classList.contains("unliked")) {
        target.classList.remove("unliked");
        value = target.textContent

        newVal = parseInt(value) + 1

        target.textContent = newVal

      } else {
        target.classList.add("unliked")
        value = target.textContent

        newVal = parseInt(value) - 1

        target.textContent = newVal
      }

}


function incDecSad(id){

    num = parseInt(id[id.length - 1])
    target = document.getElementById("sad-" + num)

    if (target.classList.contains("unliked")) {
        target.classList.remove("unliked");
        value = target.textContent

        newVal = parseInt(value) + 1

        target.textContent = newVal

      } else {
        target.classList.add("unliked")
        value = target.textContent

        newVal = parseInt(value) - 1

        target.textContent = newVal
      }

}