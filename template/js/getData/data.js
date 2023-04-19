function getAllData()
{
    const requests = [];
    let firstRequest = $.ajax
    ({

        type: "GET",
        //tên API
        url: "http://localhost:8080/all/homes/cityCount",
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
        url: "http://localhost:8080/all/homes/companyCount",
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
        url: "http://localhost:8080/all/homes/programmingLanguage",
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
    getAllListCompanyPage(0);
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
function searchJob()
{
    let qualificationName = $('#qualifcationNameByJob').val();
    let programmingLanguageJob = BigInt($('#programmingLanguageJob').val());
    let locationJob = $('#locationByJob').val();

    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        //tên API
        url: `http://localhost:8080/all/homes/searchingJob?page=0&qualificationName=${qualificationName}&programmingLanguageJob=${programmingLanguageJob}&searchLocationByJob=${locationJob}`,

        //xử lý khi thành công
        success: function ()
        {
            localStorage.setItem("qualificationName", qualificationName);
            localStorage.setItem("programmingLanguageJob", programmingLanguageJob.toString());
            localStorage.setItem("searchLocationByJob", locationJob)
            window.location.href = "http://localhost:63343/module4frontend_nhom3/template/timViec.html";
        }

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}
function getAllDataSearch()
{
    const requests = [];
    let firstRequest = $.ajax
    ({

        type: "GET",
        //tên API
        url: "http://localhost:8080/all/homes/cityCount",
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
        url: "http://localhost:8080/all/homes/companyCount",
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
        url: "http://localhost:8080/all/homes/programmingLanguage",
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


  getAllListJobPage(0);



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
function getProgrammingLanguage(data)
{
    return `<option value="${data.id}">${data.name}</option>`;
}
function getCompanies(data)
{
    return `<li><img src='/template/images/company/${data.avatar}' width="150" height="150" >
 <br><button onclick="detailCompany(${data.id})" class="btn-info">${data.name}</button><br>
 </li>`;
}

function getAllListCompanyPage(page)
{
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/all/homes/companies?page=${page}`,
        success: function (data) {
            displayCompany(data.content)
            displayPageCompany(data)
            //điều kiện bỏ nút previous
            if (data.pageable.pageNumber === 0) {
                document.getElementById("backup").hidden = true
            }
            //điều kiện bỏ nút next
            if (data.pageable.pageNumber + 1 === data.totalPages) {
                document.getElementById("next").hidden = true
            }
        }
    });
}
function displayCompany(data)
{
    let content = "";
    if (data !== undefined) {
        for (let i = 0; i < data.length;i++)
        {
            content += getCompanies(data[i]);
        }
    }
    document.getElementById("companyInfo").innerHTML = content;
}


function getAllListJobPage(page)
{
    let qualificationName = localStorage.getItem("qualificationName");
    let  programmingLanguageJob = localStorage.getItem("programmingLanguageJob");
    let locationJob = localStorage.getItem("searchLocationByJob");
    $.ajax({
        type: "GET",
    url: `http://localhost:8080/all/homes/searchingJob?page=${page}&qualificationName=${qualificationName}&programmingLanguageJob=${programmingLanguageJob}&searchLocationByJob=${locationJob}`,
        success: function (data) {
            displayJob(data.content)
            displayPage(data)
            //điều kiện bỏ nút previous
            if (data.pageable.pageNumber === 0) {
                document.getElementById("backup").hidden = true
            }
            //điều kiện bỏ nút next
            if (data.pageable.pageNumber + 1 === data.totalPages) {
                document.getElementById("next").hidden = true
            }
        }
    });
}

function displayJob(data)
{
    let content = ``;

    for (let i = 0; i < data.length;i++)
    {
        content += `<div class="col-md-12 ftco-animate fadeInUp ftco-animated">
                       <div class="job-post-item p-4 d-block d-lg-flex align-items-center">
                           <div class="one-third mb-4 mb-md-0">
                                <div class="job-post-item-header align-items-center">
                                <a href="#"> <span class="subadge">${data[i].name}</span></a>
                                </div>
                                  <div class="job-post-item-body d-block d-md-flex">
                                     <div class="mr-3"><span class="icon-layers"></span> <a href="#"></a></div>
                                       <div><span class="icon-my_location"></span> <span>Địa chỉ</span></div>
                                  </div>
                           </div>
                           <div class="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                                 <div>
                                   <a href="#" class="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                    <span class="icon-heart"></span></a>
                                </div>
                                <a href="job-single.html" class="btn btn-primary py-2">Apply Job</a>
                           </div>
                       </div>
                    </div>`
    }
    document.getElementById("result").innerHTML = content;
}
function displayPage(data){
    let content = `<button class="btn btn-primary" id="backup" onclick="isPrevious(${data.pageable.pageNumber})">Previous</button>
    <span>${data.pageable.pageNumber+1} | ${data.totalPages}</span>
    <button class="btn btn-primary" id="next" onclick="isNext(${data.pageable.pageNumber})">Next</button>`
    document.getElementById('page').innerHTML = content;
}

//hàm lùi page
function isPrevious(pageNumber) {
    if (pageNumber > 0)
    {
        getAllListJobPage(pageNumber-1);
    }
}

//hàm tiến page
function isNext(pageNumber) {
    getAllListJobPage(pageNumber+1);
}

function displayPageCompany(data){
    let content = `<button class="btn btn-primary" id="backup" onclick="isPreviousCompanies(${data.pageable.pageNumber})">Previous</button>
    <span>${data.pageable.pageNumber+1} | ${data.totalPages}</span>
    <button class="btn btn-primary" id="next" onclick="isNextCompanies(${data.pageable.pageNumber})">Next</button>`
    document.getElementById('pageCompany').innerHTML = content;
}
function isPreviousCompanies(pageNumber)
{
    if (pageNumber > 0)
    {
        getAllListCompanyPage(pageNumber-1);
    }
}

//hàm tiến page
function isNextCompanies(pageNumber)
{
    getAllListCompanyPage(pageNumber+1);
}
