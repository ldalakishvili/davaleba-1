const hamburger = document.querySelector(`.hamburger`);
const navMenu = document.querySelector(`.nav-menu`);

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".header-option").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



function renderServices(){
    const serviceSelector = document.querySelector('.service-info')
    
    const services = [
        {
            title: 'flight booking',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
            img: './assets/images/service-img/Clip.png'
        },
        {
            title: 'HOTEL & RESORT BOOKING',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
            img: './assets/images/service-img/pool.jpeg'
        },
        {
            title: 'family trip planner',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
            img: './assets/images/service-img/beach.jpeg'
        },
        {
            title: 'cruise tour',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. ',
            img: './assets/images/service-img/boat.jpeg'
        },
        {
            title: 'fire camp',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
            img: './assets/images/service-img/fire.jpeg'
        },
        {
            title: 'corporate holidays',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
            img: './assets/images/service-img/friends.jpeg'
        },
    ]

    services.forEach((item) => {
        serviceSelector.innerHTML += serviceItem(item)
    })
}

function serviceItem(item){
    return `<button class=" tour-info service-button" id="myBtn">
    <div class="tour-info">
        <img class="tour-img" src=${item.img} alt="plane">
        <h3 class="tour-title">${item.title} </h3>
        <p class="tour-text">${item.description}
        </p>
    </div>
    </button>`
}

renderServices();

const swiper = new Swiper('.main.swiper', {
    slidesPerView: 1,
    loop: true,
  
    navigation: {
        nextEl: ".main-next",
        prevEl: ".main-prev",
    },
  });
