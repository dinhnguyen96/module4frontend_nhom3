function detailCompany(id){
    event.defaultPrevented;

    $.ajax({
        url:"http://localhost:8080/all/homes/detailCompany/"+id,
        type:"GET",
        success:function (date) {
            var queryString = $.param(date);
            window.location.href = '../../../../module4frontend_nhom3/template/detailcompany/index.html?' + queryString;
        }
    })


}