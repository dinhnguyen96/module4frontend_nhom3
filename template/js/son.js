$(document).ready(function() {

    $("#searchByCate").on('keypress', function(e) {
        if (e.which==13) {
            //Js object: key phải trùng với property của object
            let data = {
                name: $( "#searchByCate1" ).val(),
            };

            jQuery.ajax({
                url: "${base }/homes/jobs/searchByCareer",
                type: "get",
                contentType: "application/json",
                data: JSON.stringify(data),

                dataType: "json",
                success: function(jsonResult) {
                    location.reload();
                },
                error: function(jqXhr, textStatus, errorMessage) {

                }
            })
        }
    })

    $("#searchByCity").on('keypress', function(e) {
        if (e.which==13) {
            //Js object: key phải trùng với property của object
            let data = {
                name: $( "#searchByCity" ).val(),
            };

            jQuery.ajax({
                url: "${base }/homes/jobs/searchByCity",
                type: "get",
                contentType: "application/json",
                data: JSON.stringify(data),

                dataType: "json",
                success: function(jsonResult) {
                    location.reload();
                },
                error: function(jqXhr, textStatus, errorMessage) {

                }
            })
        }
    })

    $("#searchByType").on('keypress', function(e) {
        if (e.which==13) {
            //Js object: key phải trùng với property của object
            let data = {
                content: $( "#searchByType" ).val(),
            };

            jQuery.ajax({
                url: "${base }/homes/jobs/searchByType",
                type: "get",
                contentType: "application/json",
                data: JSON.stringify(data),

                dataType: "json",
                success: function(jsonResult) {
                    location.reload();
                },
                error: function(jqXhr, textStatus, errorMessage) {

                }
            })
        }
    })

    $(".careerCheck").click(function(e) {
            let data = {
                name: $(this).val(),
            };

            jQuery.ajax({
                url: "${base }/homes/jobs/searchByCareer",
                type: "get",
                contentType: "application/json",
                data: JSON.stringify(data),

                dataType: "json",
                success: function(jsonResult) {
                    location.reload();
                },
                error: function(jqXhr, textStatus, errorMessage) {

                }
            })

            $(".cityCheck").click(function(e) {
                let data = {
                    name: $(this).val(),
                };

                jQuery.ajax({
                    url: "${base }/homes/jobs/searchByCity",
                    type: "get",
                    contentType: "application/json",
                    data: JSON.stringify(data),

                    dataType: "json",
                    success: function(jsonResult) {
                        location.reload();
                    },
                    error: function(jqXhr, textStatus, errorMessage) {

                    }
                })
            })

            $(".typeCheck").click(function(e) {
                let data = {
                    content: $(this).val(),
                };

                jQuery.ajax({
                    url: "${base }/homes/jobs/searchByType",
                    type: "get",
                    contentType: "application/json",
                    data: JSON.stringify(data),

                    dataType: "json",
                    success: function(jsonResult) {
                        location.reload();
                    },
                    error: function(jqXhr, textStatus, errorMessage) {

                    }
                })
            } )
        }
    )
});