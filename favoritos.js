let favoritos;

if(JSON.parse(localStorage.getItem('favoritos'))) {
  favoritos = JSON.parse(localStorage.getItem('favoritos'))
} else {
  localStorage.setItem('favoritos', JSON.stringify([]))
  favoritos = JSON.parse(localStorage.getItem('favoritos'))
}

const body = document.getElementById('favoritos');
if (favoritos.length == 0) {
    const texto = `
    <div class='favContainer'>
        <h1 class='txtFavoritos'>No hay favoritos</h1>
        <a class='btnVolver' href='index.html'>
            <button>VOLVER</button>
        </a>
    </div>`;        
    body.innerHTML += texto;    
} else {
    const titulo = `
    <div class'favContainer'>
        <h1 class='txtFavoritos'>Favoritos</h1>
    </div>`;
    body.innerHTML += titulo;
    const table = `    
    <div class="tableContainer">
    <table>
        <thead>
            <tr>
                <th></th>
                <th class="txtTabla">AUTOS</th>
                <th class="txtTabla">PRECIO</th>
            </tr>
        </thead>
        <Tbody id="tbody">
        </Tbody>
        <tfoot>
            <tr>
                <th></th>
                <th></th>
                <th class="txtTotal">Total:</th>
                <th id="total">$${totalfavoritos().toLocaleString()}</th>
            </tr>
        </tfoot>
    </table>
    </div>
    <div class="btn-container">
        <button class="btnBorrar"> BORRAR FAVORITOS</button>
    </div>`;
    body.innerHTML += table
    const tbody = document.getElementById('tbody')
    for (let i = 0; i < favoritos.length; i++) {
        const element = favoritos[i];
        const { id, auto, precio, img } = element;
        const favoritos = `
        <tr id=${id}>
            <th><img class="trash" src="" alt="basura" srcset=""></th>
            <th class="detallesTabla"><img class="imgAutoFav" src="${img}" alt="auto"><span class="nombreauto">${auto}</span></th>
            <th>$${precio.toLocaleString()}</th>
        </tr>
        `
        tbody.innerHTML += favoritos;
        }
}