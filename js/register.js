function submitData() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value + ""
    let password = document.getElementById('password').value
    let date = document.getElementById('date').value
    let nationality = document.getElementById('nationality').selectedIndex
    let checkbox = document.getElementById('checkbox').checked

    if(name.length == 0){
        document.getElementById('errorName').innerHTML = "*Name can't be empty!"
    }
    else if(email.length == 0){
        document.getElementById('errorMail').innerHTML = "*Email can't be empty!"
    }
    else if(!email.endsWith('.com') || !email.includes('@') || email.indexOf('@') != email.lastIndexOf('@') || email.indexOf('@')+1 == email.lastIndexOf('.com')){
        document.getElementById('errorMail').innerHTML = "*Wrong email format!"
    }
    else if(password.length == 0){
        document.getElementById('errorPass').innerHTML = "*Password can't be empty!"
    }
    else if(password.length < 7){
        document.getElementById('errorPass').innerHTML = "*Password must be more than 6 characters!"
    }
    else if(!date){
        document.getElementById('errorDate').innerHTML = "*Date can't be empty!"
    }
    else if(nationality == 0){
        document.getElementById('errorNation').innerHTML = "*Please choose your nationality!"
    }
    else if(checkbox == false){
        document.getElementById('errorCheck').innerHTML = "*Please agree to our terms and conditions!"
    }
    else{
        document.getElementsByClassName('error').innerHTML = ""
        let result = confirm("Your account has been registered!")
    }
}