let autos = [
    {
      "id":"001",
      "auto":"Honda Civic",
      "precio":"50.000",
      "img":"./img/hondacivic.png",
      "desc":""
    },
    {
      "id":"002",
      "auto":"Ford Mondeo",
      "precio":"90.000",
      "img":"./img/fordmondeo.png",
      "desc":""
    },
    {
      "id":"003",
      "auto":"Chevrolet Cruze",
      "precio":"70.000",
      "img":"./img/cruze.png",
      "desc":""
    },
  ];
  
  let favoritos;
  
  if(JSON.parse(localStorage.getItem('favoritos'))) {
    favoritos = JSON.parse(localStorage.getItem('favoritos'))
  } else {
    localStorage.setItem('favoritos', JSON.stringify([]))
    favoritos = JSON.parse(localStorage.getItem('favoritos'))
  }
  
  function desplegarAutos() {
  
    for (let i = 0; i < autos.length; i++) {
      const element = autos[i];
      const { id, auto, precio, img } = element
      const card = `
      <div class='card'>
        <div>
         <img class='imgAuto' src=${img} width='350px' alt=''/>
        </div>
        <p>${auto}</p>
        <div>
          <p>$${precio.toLocaleString()}</p>
        </div>
        <div class="btn-container">
          <button id=${id} class='btnAgregar'>AGREGAR A FAVORITOS</button>
        </div>
      </div>
      `
      const container = document.getElementById('container')
      container.innerHTML += card
    }
  }
  
  desplegarAutos()
  
  const btnAgregar = document.getElementsByClassName('btnAgregar')
  
  for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i];
    element.addEventListener('click', agregarAFavoritos)
    
  }
  
  function agregarAFavoritos(e) {
    const btn = e.target;
    const idBoton = btn.getAttribute('id')
    const autoEncontrado = autos.find(aut => aut.id == idBoton)
    console.log(autoEncontrado)  
  }
  
  const contador = document.getElementById('favCounter')
  contador.innerHTML = favoritos.length
  
  