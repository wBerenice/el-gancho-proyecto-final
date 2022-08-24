const products = [

    {name: "Dalila", desc: "Lorem ipsum dolor sit amet", price: 299, image: './img/01-mujer-morado-claro.png'},
    {name: "Nancy", desc: "Lorem ipsum dolor sit amet", price: 150, image: './img/02-mujer-blanco.png'},
    {name: "Lisa", desc: "Lorem ipsum dolor sit amet", price: 120, image: './img/03-mujer-azul-marino.png'},
    {name: "ludmila", desc: "Lorem ipsum dolor sit amet", price: 140, image: './img/04-mujer-azul-cielo.png'},
    {name: "Lucia", desc: "Lorem ipsum dolor sit amet", price: 299, image: './img/05-mujer-azul-puntos.png'},
    {name: "ximena", desc: "Lorem ipsum dolor sit amet", price: 199, image: './img/06-mujer-coral.png'},
    {name: "Mabel", desc: "Lorem ipsum dolor sit amet", price: 150, image: './img/07-mujer-azul-rey.png'},
    {name: "Madison", desc: "Lorem ipsum dolor sit amet", price: 250, image: './img/08-mujer-azul-tercio.png'},
    {name: "Aurora", desc: "Lorem ipsum dolor sit amet", price: 130, image: './img/09-mujer-verde.png'},
    {name: "Amelia", desc: "Lorem ipsum dolor sit amet", price: 160, image: './img/10-mujer-amarillo.png'},
   
]
    

  
  function createProductCards(data){
    data.forEach(e =>{
  
      const productTemplate = document.getElementById('cardContainer')
  
      const header = productTemplate.content.querySelectorAll('h3')
      header[0].innerHTML = e.name
    
  
      const image  = productTemplate.content.querySelectorAll('img')
      image[0].src = e.image
  
      const pTags = productTemplate.content.querySelectorAll('p')
      pTags[0].innerHTML = e.desc
      pTags[1].innerHTML = '$' + e.price 
      pTags[1].innerHTML = '$' + e.price 
      pTags[1].innerHTML = '$' + e.price 

      const botonCarta = productTemplate.content.querySelectorAll('button')
    //   botonCarta =document.createElement("img")
      botonCarta[0].innerHTML = "Agregar"

    //   const imgBolsa = productTemplate.content.getElementById('imgBolsa')
      
      
  
      const productsContainer = document.getElementById('products') 
      let clone  = document.importNode(productTemplate.content, true)
      productsContainer.appendChild(clone)
    })
  }
  
  createProductCards(products)
  
//   const cards = document.getElementsByClassName('card')
  const cards = document.getElementsByClassName('button-shopping')
  
  console.log(cards)
  let numberContainer = document.getElementById('cart')
  let cart = []
  let number  = 0 
  
  for(let i = 0; i < cards.length; i ++){
    
  cards[i].addEventListener('click', function(event){
    number ++
    cart.push(products[i])
    numberContainer.innerHTML = number
    console.log(cart)
  })
  }
  
  
  document.getElementById('checkout').addEventListener('click', function(){
    console.log(cart, 'real cart?')
  alert(outputCart(cart))
    cart=[]
    number = 0
    document.getElementById('cart').innerHTML = number
    window.location = './checkout.html'
  })
  
  function outputCart(array){
    console.log(array)
    let output = ''
    let total = 0
    for(let i = 0; i < array.length; i ++){
    //   output = output.concat(`${array[i].name} ${array[i].price}\n`)
      output = output.concat(`$${array[i].price} ${array[i].name}\n`)
      total = total + array[i].price
    }
  return `Total: $${total} \n\nProductos:    \n${output}`
    
  }