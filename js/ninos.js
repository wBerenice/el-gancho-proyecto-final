const products = [

    {name: "Jacob", desc: "Lorem ipsum dolor sit amet", price: 190, image: './img/01-hombre-negro.png'},
    {name: "Alexander", desc: "Lorem ipsum dolor sit amet", price: 250, image: './img/02-hombre-rojo.png'},
    {name: "Julian", desc: "Lorem ipsum dolor sit amet", price: 99, image: './img/03-hombre-azul.png'},
    {name: "Leonardo", desc: "Lorem ipsum dolor sit amet", price: 200, image: './img/04-hombre-azul-claro.png'},
    {name: "Charlie", desc: "Lorem ipsum dolor sit amet", price: 150, image: './img/05-hombre-tierroso.png'},
    {name: "Willliam", desc: "Lorem ipsum dolor sit amet", price: 120, image: './img/06-hombre-rosa.png'},
    {name: "Noah", desc: "Lorem ipsum dolor sit amet", price: 189, image: './img/07-hombre-naranja.png'},
    {name: "Jack", desc: "Lorem ipsum dolor sit amet", price: 130, image: './img/08-hombre-azul-cielo.png'},
    {name: "Paul", desc: "Lorem ipsum dolor sit amet", price: 140, image: './img/09-hombre-verde-pasto.png'},
    {name: "Daniel", desc: "Lorem ipsum dolor sit amet", price: 160, image: './img/10-hombre-naranja-farol.png'},
   
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