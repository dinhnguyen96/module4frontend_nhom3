function detailCompany(id){
    event.defaultPrevented;

    $.ajax({
        url:"http://localhost:8080/all/homes/detailCompany/"+id,
        type:"GET",
        success:function (date) {
            var queryString = $.param(date);
            window.location.href = "../../../template/detailcompany/index.html?" + queryString;
        }
    })

}
function detailCompany1(id){
    event.defaultPrevented;

    $.ajax({
        url:"http://localhost:8080/all/homes/detailCompany/"+id,
        type:"GET",
        success:function (date) {
            var queryString = $.param(date);
            window.location.href = "../../../template/detailcompany/index.html?" + queryString;
        }
    })

}