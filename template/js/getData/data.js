function getAllData()
{
    const requests = [];
    let firstRequest = $.ajax
    ({

        type: "GET",
        //tên API
        url: "http://localhost:8080/homes/cityCount",
        success: function (data)
        {
            if (data !== undefined)
            {
                $('#section-counter, .hero-wrap, .ftco-counter, .ftco-volunteer').waypoint( function( direction )
                {

                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated'))
                    {

                        let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                        $('#locationNumber').each(function ()
                        {
                            let $this = $(this);
                            $this.animateNumber(
                                {
                                    number: data,
                                    numberStep: comma_separator_number_step
                                }, 1000
                            );
                        });

                    }
                } , { offset: '95%' } );
            }
        }
    });
    let secondRequest = $.ajax({

        type: "GET",
        //tên API
        url: "http://localhost:8080/homes/companyCount",
        success: function (data) {
            if (data !== undefined) {
                $('#section-counter, .hero-wrap, .ftco-counter, .ftco-volunteer').waypoint(function (direction) {

                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                        let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                        $('#companyNumber').each(function () {
                            let $this = $(this);
                            $this.animateNumber(
                                {
                                    number: data,
                                    numberStep: comma_separator_number_step
                                }, 1000
                            );
                        });

                    }
                }, {offset: '95%'});
            }
        }
    });
    let thirdRequest = $.ajax({

        type: "GET",
        //tên API
        url: "http://localhost:8080/homes/companies",
        success: function (data) {
            let content = "";
            if (data !== undefined) {
                for (let i = 0; i < data.length;i++)
                {
                    content += getCompanies(data[i]);
                }
            }
            document.getElementById("companyInfo").innerHTML = content;
        }
    });
    let fourthRequest = $.ajax({

        type: "GET",
        //tên API
        url: "http://localhost:8080/homes/programmingLanguage",
        success: function (data) {
            let content = "";
            if (data !== undefined) {
                for (let i = 0; i < data.length;i++)
                {
                    content += getProgrammingLanguage(data[i])
                }
            }
            document.getElementById("programmingLanguageJob").innerHTML = content;
            document.getElementById("programmingLanguageCandidate").innerHTML = content;
        }
    });
    requests.push(firstRequest);
    requests.push(secondRequest);
    requests.push(thirdRequest);
    requests.push(fourthRequest);
    $.when.apply($, requests).done(function()
    {
        console.log('All requests complete');
    }).fail(function() {
        console.log('At least one request failed');
    });
}
function searchJob()
{
    let qualificationName = $('#qualifcationNameByJob').val();
    let programmingLanguageJobId = $('#programmingLanguageJobId').val();
    let locationJob = $('#locationByJob').val();

    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(searchJob),
        //tên API
        url: `http://localhost:8080/homes/jobs/searchingJob?searchLocationByJob=${locationJob}&programmingLanguageJob=${programmingLanguageJobId}&qualificationName=${qualificationName}`,
        //xử lý khi thành công
        success: getAllData

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}
function getProgrammingLanguage(data)
{
    return `<option value="${data.id}">${data.name}</option>`;
}
function getCompanies(data)
{
    return `<li><img src='/template/images/company/${data.avatar}' > <br>${data.name}<br></li>`;
}



