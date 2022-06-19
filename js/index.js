// date and time functions start
let date = new Date();

document.getElementById('time').innerHTML = date.toLocaleTimeString() + " :: "+ date.toDateString();
document.getElementById('time').style.color="#ff022c";
document.getElementById('time').style.fontFamily="Orbitron, sans-serif";
document.getElementById('c_date').innerHTML = date.getFullYear();

// date and time functions is end

// functions for scrollup start
let scrollup = document.getElementById('scrolltop')
scrollup.addEventListener('click', function(){

     window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
     });
});
// functions for scrollup end

// form submisstion process start
let form = document.getElementById('user_form')
form.addEventListener('submit', function(e){
e.preventDefault();

let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let message  = document.getElementById('message').value;

let letter_exp =/^[A-Za-z]$/;
let email_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(name == ""){
    document.getElementById('usernameerror').innerHTML = "Please enter your name";
    return false;
}
else{
    document.getElementById('usernameerror').innerHTML = "";
}
if((name.length <=2 || (name.length > 20))){
    document.getElementById('usernameerror').innerText="user length must be 2 and 20";
    return false;
}else if(!isNaN(name)){
    document.getElementById('usernameerror').innerText="only character is allowed";
    return false;
}else if(email ==""){
    document.getElementById('useremailerror').innerText  ="Please enter your email";
    return false;
}else if(email.indexOf('@') <= 0){
    document.getElementById('useremailerror').innerText = "@ Invalid position";
    return false;
}else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
document.getElementById('useremailerror').innerText="@ position is invalid";
return false;
}
});
// form submission process end