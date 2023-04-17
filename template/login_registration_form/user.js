let object = JSON.parse(localStorage.getItem("object"));
if (object != null){
    let token = object.accessToken;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        type: "GET",
        url: "http://localhost:8080/api/user",
        success: function (data) {
            console.log(data);
        }
    })
}else {
    window.location.href = "/index.html"
}