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
        success(data){
            localStorage.setItem("object", JSON.stringify(data))
            if (data === "USER"){
            window.location.href = "../duyetCongViec.html"}
            else if (data === "COMPANY"){
                window.location.href = "../ungVien.html"
            }
        }
    })
}