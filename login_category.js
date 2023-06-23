function select(){
    userType = document.getElementById("selectUserType")
    selectedType = userType.value;

    targetVal = parseInt(selectedType)
    console.log(targetVal)

    if(targetVal < 0){
        alert('Please Enter a User Type')
    }
    else if(targetVal === 1){
        window.location.href= "home.html"
    }
    else{
        window.location.href= "jollibeeowner.html"
    }
}


