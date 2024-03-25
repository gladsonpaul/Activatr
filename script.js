// FORM SUBMIT Script

let subbtn = document.querySelector('#campaignform');

subbtn.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('HELLO')


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


// CAROUSEL SCRIPT

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const firstText = document.querySelector('.narrow_card p');
const spanText = document.querySelector('.narrow_card span');
// console.log(firstText.innerHTML)


// Set width and left position for each slide
slides.forEach((item, index) => {
    item.style.width = '20%'; // Set width for each slide
    item.style.left = (index * 20) + '%'; // Set left position for each slide
});

// Initial Styles
firstText.style.transform = 'rotate(0deg)';
spanText.style.display = 'block'

// Next Button Event Listener
nextBtn.addEventListener('click', function () {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');

    // Rotate paragraphs of the current slide to -90deg
    const currentSlidesTexts = currentSlide.querySelector('.narrow_card p');
    currentSlidesTexts.style.transform = 'rotate(-90deg)';

    const spanTexts = currentSlide.querySelector('.narrow_card span');
    spanTexts.style.display = 'none'


    // Rotate paragraphs of the new current slide to 0deg
    const newCurrentSlidesTexts = nextSlide.querySelector('.narrow_card p');
    newCurrentSlidesTexts.style.transform = 'rotate(0deg)';

    const newspanTexts = nextSlide.querySelector('.narrow_card span');
    newspanTexts.style.display = 'block';
});

prevBtn.addEventListener('click', function () {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;

    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');

    const currentSlidesTexts = currentSlide.querySelector('.narrow_card p');
    currentSlidesTexts.style.transform = 'rotate(-90deg)';

    const spanTexts = currentSlide.querySelector('.narrow_card span');
    spanTexts.style.display = 'none'

    const newCurrentSlidesTexts = prevSlide.querySelector('.narrow_card p');
    newCurrentSlidesTexts.style.transform = 'rotate(0deg)';

    const newspanTexts = prevSlide.querySelector('.narrow_card span');
    newspanTexts.style.display = 'block';

});
