const logout = document.getElementById("logout");
logout.addEventListener('click', function () {
    window.location.href= 'Login.html';
    window.history.pushState(null,null,"Login.html");
})