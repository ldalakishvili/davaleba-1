function serviceItem(item){
    return `<button class=" tour-info service-button" id="myBtn">
    <div class="tour-info">
        <img class="tour-img" src=${item.url} alt="plane">
        <h3 class="tour-title">${item.title} </h3>
        <p class="tour-text">${item.description}
        </p>
    </div>
    </button>`
}

function getServiceItem(){
    fetch("https://fakerapi.it/api/v1/images?_width=380")
    .then(res => res.json())
    .then(res => {
        const serviceSelector = document.querySelector('.service-info')
        res.data.forEach(item => {
            serviceSelector.innerHTML += serviceItem(item) 
        })
    })
}

getServiceItem()