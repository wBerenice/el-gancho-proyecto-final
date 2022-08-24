const products = [

    {name: "Iker", desc: "Lorem ipsum dolor sit amet", price: 149, image: './img/01-nino-rojo-azul.png'},
    {name: "Paula", desc: "Lorem ipsum dolor sit amet", price: 220, image: './img/02-nina-crema-jeans.png'},
    {name: "Hugo", desc: "Lorem ipsum dolor sit amet", price: 399, image: './img/03-nino-cafe-tierra.png'},
    {name: "Carla", desc: "Lorem ipsum dolor sit amet", price: 179, image: './img/04-nina-rosa-completo.png'},
    {name: "Diego", desc: "Lorem ipsum dolor sit amet", price: 249, image: './img/05-nino-amarillo-gris.png'},
    {name: "Abigail", desc: "Lorem ipsum dolor sit amet", price: 129, image: './img/06-nina-rosa-leggins.png'},
   
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