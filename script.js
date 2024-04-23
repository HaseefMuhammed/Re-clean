ScrollReveal().reveal('.anm1', {
    scale: 0.85, duration: 1000
},);

ScrollReveal().reveal('.flip', {
    rotate: {
        x: 20,
        z: 20
    }
});

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == "admin" && password == "haseef@ats"){
        window.location.href = "admin.html";
    }else{
        alert("Incorrect username or password");
        location.reload();
    }
}


