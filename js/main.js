//global var
let templateScreen = document.getElementById('emptyState')
let templateListProducts = document.getElementById('itemsProducts')
let templateFormProduct = document.getElementById('formCard')
let items = document.getElementById('items')
let btnStart = document.getElementById('start').addEventListener('click', formProduct)
var productsCart = new Array()

//class product
class Product {
    constructor(icon, category, name, description){
        this.icon = icon
        this.category = category
        this.name = name
        this.description = description
    }
}

if(localStorage.getItem('productsCart')){
    let productsCartJson = localStorage.getItem('productsCart')
    this.productsCart = JSON.parse(productsCartJson);
    templateScreen.className = 'off'
    templateListProducts.className = 'on'
    templateFormProduct.className = 'off'
    renderProducts(productsCart)
} else{
    templateScreen.className = 'on'
}

function setItems(productsCart){
    localStorage.setItem('productsCart', JSON.stringify(productsCart))
}

function formProduct(){
        templateScreen.className = 'off'
        templateListProducts.className = 'off'
        templateFormProduct.className = 'on'
        document.getElementById('add').addEventListener('click', addCardToListProduct)
    }

function addCardToListProduct(){ 
    templateScreen.className = 'off'
    templateFormProduct.className = 'off'
    templateListProducts.className = 'on'
    let category = document.getElementById('prodCategory')
    let nameP = document.getElementById('productName')
    let description = document.getElementById('productDesc')
    
    templateScreen.innerHTML = templateListProducts
    
    let categoryProduct = category.value
    let nameProduct = nameP.value
    let descriptionProduct = description.value
  
    switch (categoryProduct){
            case "Bebidas":
                icon = "🍺"
                break
            case "Verduras":
                icon = "🥕"
                break
            case "Lacteos":
                icon = "🧀"
                break
            case "Carnes":
            icon = "🥩"
                break
        }
   
    let newProduct = new Product(icon, categoryProduct, nameProduct, descriptionProduct)
        
    let cardInfoProduct = `<li>
        <div class="listProductCard">
            <p class="icon">${newProduct.icon}</p>
            <div class="text">
                <p>${newProduct.category}</p>
                <h5>${newProduct.name}</h5>
                <p>${newProduct.description}</p>
            </div>
        </div>
        </li>
        `
        items.innerHTML += cardInfoProduct
        productsCart.push(newProduct)
        document.getElementById('listProd').addEventListener('click', formProduct) 
        setItems(productsCart)
    }
    
function renderProducts(productsCart){
    for(prod of productsCart){
    let cardInfoProduct = `<li>
        <div class="listProductCard">
            <p class="icon">${prod.icon}</p>
            <div class="text">
                <p>${prod.category}</p>
                <h5>${prod.name}</h5>
                <p>${prod.description}</p>
            </div>
        </div>
        </li>
        `
        items.innerHTML += cardInfoProduct
    }
    document.getElementById('listProd').addEventListener('click', formProduct) 
}
    
function emptyCart(){
    localStorage.clear()
}


