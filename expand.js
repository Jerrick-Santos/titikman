text_list = document.getElementsByClassName("text-content")

for(let i = 0; i < text_list.length; i++){
    string = text_list[i].textContent
    words = string.split(' ')
    console.log(words)
}
