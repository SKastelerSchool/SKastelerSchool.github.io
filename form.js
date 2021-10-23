function verifyInfo() {
    let validationHTML = ""
    let valid = true

    // check user name
    let Username = document.getElementById("username").value
    if (Username == "") {
        validationHTML += 'Please Enter <span style="color: red"> Username </span><br>'
        valid = false
    }else if (!(/^([a-z0-9]){4,12}$/.test(Username))) {
        validationHTML += 'Please Enter <span style="color: orange"> a valid Username </span><br>'
        valid = false
    }

    //check email
    let email = document.getElementById("email").value
    if (email == "") {
        validationHTML += 'Please Enter <span style="color: red"> Email </span><br>'
        valid = false
    } else if (!(/@/.test(email)) || (!(/.net/.test(email)) && !(/.com/.test(email)) && !(/.org/.test(email)) && !(/.edu/.test(email)))) {
        validationHTML += 'Please Enter <span style="color: orange"> a valid Email </span><br>'
        valid = false
    }

    //check phone number
    let phone = document.getElementById("phone").value
    if (phone == "") {
        validationHTML += 'Please Enter <span style="color: red"> Phone Number </span><br>'
        valid = false
    } else if (!(/\d\d\d-\d\d\d-\d\d\d\d/.test(phone))) {
        validationHTML += 'Please Enter <span style="color: orange"> a valid Phone Number </span><br>'
        valid = false
    }

    //check password
    let password = document.getElementById("password").value
    if (password== "") {
        validationHTML += 'Please Enter <span style="color: red"> Password </span><br>'
        valid = false
    } else if (!(/[a-z]/.test(password)) || !(/[A-Z]/.test(password)) || !(/[0-9]/.test(password)) || !(/\W/.test(password))) {
        validationHTML += 'Please Enter <span style="color: orange"> a valid password </span><br>'
        valid = false
    }

    //check for gender
    if (!document.myForm.gender[0].checked && !document.myForm.gender[1].checked && !document.myForm.gender[2].checked) {
        validationHTML += 'Please Select <span style="color: red"> Gender </span><br>'
    }

    //check birthday 
    if (document.getElementById("bmonth").selectedIndex == 0 || document.getElementById("bday").selectedIndex == 0 || document.getElementById("byear").selectedIndex == 0) {
        validationHTML += 'Please Select <span style="color: red"> Birthday </span><br>'
        valid = false
    }

    if (valid) {
        if (document.myForm.password.value !== document.myForm.confirmPassword.value) {
            alert("Passwords do not match")
        } else {
            location.href = "index.html"
        }
    } else {
        document.getElementById("errors").innerHTML = validationHTML
    }
}

function onClear() {
    setTimeout(function (){
        document.getElementById("errors").innerHTML = ""
    }, 0)
}