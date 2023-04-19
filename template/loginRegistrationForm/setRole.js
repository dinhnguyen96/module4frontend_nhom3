// let user = JSON.parse(localStorage.getItem("user"));
// if (user != null) {
//     let token = user.accessToken;
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': "Bearer " + token
//         },
//         type: "GET",
//         url: "http://localhost:8080/api/listRole",
//         success: function (data) {
//             console.log(data)
//         }
//     })
// } else {
//     window.location.href = "template/loginRegistrationForm/index.html";
// }