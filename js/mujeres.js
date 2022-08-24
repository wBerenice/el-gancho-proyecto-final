//Molde para la creacion de objetos tipo Camisa
class Camisa {
    constructor(id, nombre, material, precio, foto, color,descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.material = material;
        this.precio = precio;
        this.foto = foto;
        this.color = color;
        this.descripcion = descripcion;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}


//Array principal= almacena todas las camisas
const productos = [];

//Array secundario = almacena todas las camisas en el carrito
const elementosCarrito = [];


//Llamando los contenedores padre donde se irá mostrando cada camisa (Card)
const contenedorProductos = 
    document.getElementById('container-cards');
    // document.getElementById('container-cards').getElementsByClassName('row');


const rowContenedorProductos = contenedorProductos[0];

const contenedorCarritoCompras = document.getElementById("checkout-table")


//Se llama a las funciones:

//1) Camisas para Mujer
//2) Camisas para Hombre
cargarProductosMujer();
// cargarProductosHombre();

//3) Crea la plantilla para ir mostrando cada Camisa y sus características con su correspondiente columna
dibujarCarrito();
dibujarCatalogoProductos();

//(Camisas de Mujer y Hombre)
//Funciones pusheando nuevos valores a cada propiedad previamente descrita en el Molde Camisa 

function cargarProductosMujer() {
    productos.push(new Camisa(1, 'Dalila',"Lino", 299, './img/01-mujer-morado-claro.png', "Lila", "Lorem ipsum dolor sit amet"));
    productos.push(new Camisa(2, 'Nancy',"Lana", 150, './img/02-mujer-blanco.png', "Blanco", "Lorem ipsum dolor sit amet"));
    productos.push(new Camisa(3, 'Lisa', "Algodón", 120, './img/03-mujer-azul-marino.png', "Azul marino", "Lorem ipsum dolor sit amet"));
    productos.push(new Camisa(4, 'Ludmila', "Lino", 140, './img/04-mujer-azul-cielo.png', "Azul cielo", "Lorem ipsum dolor sit amet"));
    productos.push(new Camisa(5, 'Lucia', "Lana" ,299, './img/05-mujer-azul-puntos.png', "Azul con puntos", "Lorem ipsum dolor sit amet"));
    productos.push(new Camisa(6, 'Ximena',"Lino", 199, './img/06-mujer-coral.png', "Coral"));
    productos.push(new Camisa(7, 'Mabel', "Algodón", 150, './img/07-mujer-azul-rey.png', "Azul Rey", "Lorem ipsum dolor sit amet"));
    productos.push(new Camisa(8, 'Madison', "Lino", 250, './img/08-mujer-azul-tercio.png', "Azul Tercio", "Lorem ipsum dolor sit amet"));
    productos.push(new Camisa(9, 'Aurora', "Algodón",130, './img/09-mujer-verde.png', "Verde", "Lorem ipsum dolor sit amet"));
    productos.push(new Camisa(10, 'Amelia', "Algodón", 160, './img/10-mujer-amarillo.png', "Amarillo", "Lorem ipsum dolor sit amet"));
}


// function cargarProductosHombre() {
//     productos.push(new Camisa(11, 'Jacob',"Algodón", 199, './img/01-hombre-negro.png', "Negro"));
//     productos.push(new Camisa(12, 'Alexander',"Lino", 250, './img/02-hombre-rojo.png', "Rojo"));
//     productos.push(new Camisa(13, 'Julian', "Algodón", 99, './img/03-hombre-azul.png', "Azul"));
//     productos.push(new Camisa(14, 'leonardo', "Lino", 200, './img/04-hombre-azul-claro.png', "Azul Claro"));
//     productos.push(new Camisa(15, 'Charlie', "Lana" , 150, './img/05-hombre-tierroso.png', "Tierroso"));
//     productos.push(new Camisa(16, 'William',"Algodón", 120, './img/06-hombre-rosa.png', "Rosa"));
//     productos.push(new Camisa(17, 'Noah', "Lana", 189, './img/07-hombre-naranja.png', "Naranja"));
//     productos.push(new Camisa(18, 'Jack', "Algodón", 130, './img/08-hombre-azul-cielo.png', "Azul Cielo"));
//     productos.push(new Camisa(19, 'Paul', "Lino",140, './img/09-hombre-verde-pasto.png', "Verde Pasto"));
//     productos.push(new Camisa(20, 'Daniel', "Algodón", 160, './img/10-hombre-naranja-farol.png', "Naranja Farol"));
// }




function dibujarCarrito() {
    let renglonesCarrito = '';

    elementosCarrito.forEach(
        (elemento) => {
            renglonesCarrito+=
            `
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>$ ${elemento.producto.precio}</td>
                    <td>${elemento.producto.color}</td>
                    <td>${elemento.cantidad}</td>
                </tr>
            `;
        }
    );

    contenedorCarritoCompras.innerHTML = renglonesCarrito;
}

//Funciones para la creación de tarjetas (manipulando el DOM)
//Se incluyen: los botones con su texto ("Comprar"), el cuerpo principal de la Card con sus elementos (h2, h5, <button>)

function crearCard(camisas) {
    
    let botonAgregar = document.createElement("button");
    // botonAgregar.className = "btn btn-info";
    botonAgregar.className = "button-shopping";
    // botonAgregar.innerText = "Agregar";
    botonAgregar.innerText = "Agregar";

    // let cuerpoCarta = document.createElement("div");
    // cuerpoCarta.className = "card";
    // cuerpoCarta.innerHTML = `
    //     <h3>${camisas.nombre}</h3>
    //     <h5>$ ${camisas.precio}</h5>
    // `;
    
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card";
    cuerpoCarta.innerHTML = `
        <div class="card_main">
            <div class="card_image">
            <img src="img/01-mujer-morado-claro.png">
            </div>
        </div>

        <div class="contenedor-carta-texto">
            <h3>${camisas.nombre}</h3>
            <p>${camisas.descripcion}</p>
        </div>      

        <div class="contenedor-precios-btn">
            <p>${camisas.precio}</p>
            <button id="btn-shopping-bag" class="button-shopping"><img src="img/shopping-bag.png">Agregar</button>
        </div>
    `;
    //Aquí se anexa (append) el <button> al final de todos los elementos de la Card (h2 & h5)
    cuerpoCarta.append(botonAgregar);
    

    let imagen = document.createElement("img");
    imagen.src = camisas.foto;
    imagen.className = "card-img-top";
    imagen.alt = camisas.nombre;

    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);


    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);


    //Evento: Al hacer click en el botonAgregar ("Comprar"), añadimos (pusheamos) la camisa seleccionada al carrito (componente MODAL en bootstrap)
    botonAgregar.onclick = () => {
        
        let elementoCarrito = new ElementoCarrito(camisas, 1);
        elementosCarrito.push(elementoCarrito);
        
        alert("La camisa \"" + camisas.nombre + "\" ha sido agregada al carrito! \n" + "Puedes ver el material y su número identificador en el carrito.");
        dibujarCarrito();

    } 
    
    return contenedorCarta;
}

function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            rowContenedorProductos.append(contenedorCarta);
        }
    );

}