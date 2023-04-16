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
    requests.push(firstRequest);
    requests.push(secondRequest);
    $.when.apply($, requests).done(function()
    {
        console.log('All requests complete');
    }).fail(function() {
        console.log('At least one request failed');
    });
}