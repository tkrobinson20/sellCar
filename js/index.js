document.addEventListener('DOMContentLoaded', viewCars )


//functions
function viewCars (){
    autos.forEach((auto)=>{
        const vehicle = document.createElement('div');
        vehicle.setAttribute('class','resultCars')
        vehicle.innerHTML = `
        <div class="portal">
        <img src="${auto.imagen}" class="imageCar">
        </div>
        <div class="descriptionCar">
        <h6>${auto.marca} ${auto.modelo}</h6>
        <h6>${auto.year}</h6>
        </div>
        
        `;
    document.querySelector('#wallpaper').appendChild(vehicle)
    })
}

const homeButton = document.querySelector('.nav');

homeButton.addEventListener('click', activeButton)

function activeButton(e){
    if(e.target.classList.contains('nav-item')){
       const btn = e.target
      // btn.classList.toggle('active')
       console.log(btn)
        
    }else{
        console.log('no')
    }
    
    //console.log(e.target)
    
}


