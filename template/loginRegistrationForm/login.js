function loginGmail() {
    event.preventDefault();
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;
    let account = {
        "gmail": gmail,
        "password": password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        data: JSON.stringify(account),
        url: "http://localhost:8080/api/login",
        success(data) {
            localStorage.setItem("user", JSON.stringify(data));
            // alert("dang nhap thanh cong")
            let user = JSON.parse(localStorage.getItem("user"));
            let roleee = user["role"];
            for (let i = 0; i < roleee.length; i++) {
                console.log(roleee[i].name);
                if (roleee[i].name === "ROLE_USER") {
                    window.location.href = "../../../module4frontend_nhome3/template/trangChuUser.html";
                    break;
                } else if (roleee[i].name === "ROLE_COMPANY") {
                    window.location.href = "../../../module4frontend_nhome3/template/trangChuCompany.html";
                    break
                } else if (roleee[i].name === "ROLE_ADMIN") {
                    window.location.href = "../../../module4frontend_nhome3/template/trangChu.html";
                    break;
                }
            }
        },

        error: function () {
            alert("Sai tài khoản hoặc mật khẩu !")
        }
    })
}

function signup() {
    event.preventDefault();
    let gmail = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let role = document.getElementById("roles").value;
    let account = {
        "gmail": gmail,
        "password": password,
        "roles": [role]
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(account),
        type: "POST",
        url: "http://localhost:8080/api/signup",
        success: function (data) {
            alert("Create user successfully!");
            window.location.href = "../trangChu.html";
        }
    })
}
