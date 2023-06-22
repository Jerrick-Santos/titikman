text_list = document.getElementsByClassName("text-content")
hidden_content = document.getElementsByClassName("hidden-content")
read_more_buttons = document.getElementsByClassName("expand-link")


function populateReadMoreIds(){
    for(let i = 0; i < read_more_buttons.length; i++){
        read_more_buttons[i].setAttribute("id", "readmore-" + i)
    }
}

function populateHiddenContentIds(){
    for(let i = 0; i < hidden_content.length; i++){
        hidden_content[i].setAttribute("id", "hide-" + i)
    }
}

populateReadMoreIds()
populateHiddenContentIds()



for(let i = 0; i < text_list.length; i++){

    string = text_list[i].textContent
    words = string.split(/[\s\n]+/)
    console.log(words)

    //remove read more button
    if(words.length < 10){
        document.getElementById("readmore-" + i).style.display = "none";
    }

}

function clik(myId){
    
    num = parseInt(myId[myId.length - 1])
    target = document.getElementById("hide-" + num)
    target_read_more_button = document.getElementById("readmore-" + num)

    if (target.classList.contains("hide")) {
        target.classList.remove("hide");
        target_read_more_button.textContent = "Read Less";
      } else {
        target.classList.add("hide");
        target_read_more_button.textContent = "Read More";
      }

}
