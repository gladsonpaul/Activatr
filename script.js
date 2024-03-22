let subbtn = document.querySelector('#campaignform');

subbtn.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('HELLO')


    let checkboxes = document.getElementsByName('campaign-type');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            console.log([`Campaign type : ${checkboxes[i].value}`])
        }
    }

    let datatocollect = document.getElementsByName('datatocollect');
    for (let i = 0; i < datatocollect.length; i++) {
        if (datatocollect[i].checked == true) {
            console.log([`Data to be collected : ${datatocollect[i].value}`])
        }
    }


    let pictime = document.getElementById('duration');
    console.log(`Picked Time: ${pictime.value}`);

    let fromDate = document.getElementById('Fromdate');
    console.log(`From Date: ${fromDate.value}`);

    let toDate = document.getElementById('Todate');
    console.log(`To Date: ${toDate.value}`);


    let name = document.getElementById('name');
    console.log(`Name: ${name.value}`)

    let phone = document.getElementById('phone');
    console.log(`Phone No: ${phone.value}`)

    let purpose = document.getElementById('purpose');
    console.log(`Purpose of Campaign: ${purpose.value}`)


});


