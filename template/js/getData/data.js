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
    requests.push(firstRequest);
    requests.push(secondRequest);
    requests.push(thirdRequest);
    $.when.apply($, requests).done(function()
    {
        console.log('All requests complete');
    }).fail(function() {
        console.log('At least one request failed');
    });
}
function getCompanies(data)
{
    return `<li><img src='/template/images/company/${data.avatar}'> <br>${data.name}<br></li>`;
}
