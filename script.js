function validateForm(){
    const username=document.getElementById("name").value;
    if(username ===""){
        alert("Username must be filled out");
        return false;
    }
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    return true;
}