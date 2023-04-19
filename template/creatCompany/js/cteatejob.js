let arr;
function create() {
    let name = $("#name").val()
    let salary = $("#salary").val()
    let postDate = $("#postDate").val()
    let expriteDate = $("#expriteDate").val()
    let experience = $("#experience").val()
    let content = $("#content").val()
    let qualification = $("#qualification").val()
    let programingLanguage = $("#programingLanguage").val()
    let newJob = {
        name: name,
        salary: salary,
        postDate: postDate,
        expriteDate:expriteDate,
        experience:experience,
        content:content,
        qualification:qualification,
        programingLanguage:programingLanguage,
        uploadCV: ""
    }
    let formData = new FormData();
    formData.append("job", new Blob([JSON.stringify(newJob)]
        , {type: 'application/json'}))
    formData.append("file", $('#cv')[0].files[0])
    $.ajax({
        headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
        contentType: false,
        processData: false,
        type: "POST",
        url: "http://localhost:8080/api/user/upload",
        data: formData,
        success: function () {
            getAllData();
                alert("Create successfully!")
        }
    })
    event.preventDefault();
}

