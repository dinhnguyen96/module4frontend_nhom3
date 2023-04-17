function logout() {
    $.ajax({
        url: "http://localhost:8080/api/logout",
        type: "GET",
        success: function (response) {
            localStorage.removeItem("object");
            window.location.href = "/index.html";
        },
        error: function (error) {
            console.log(error);
        }
    })
}