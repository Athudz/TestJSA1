const btn_click = document.getElementsByClassName("btn btn-success")
btn_click[0].addEventListener("click", (e)=>{
    e.preventDefault()
    const name = document.getElementById("basic-addon1").value
    const price = document.getElementById("basic-addon2").value
    const Image = document.getElementById("basic-addon3").value
    
    var product_data = JSON.parse(localStorage.getItem("products"))
    var products = [
        {
            name:name,
            price:price,
            Image :Image,
           
        }
    ]
    var main =document.getElementById("products")
               for(let item of products){
                   var item_div = document.createElement("div")
                   item_div.classList.add("card")
                   item_div.innerHTML = `
                   <div class="card">
                   <div class="img">
                     <img src="${item.Image}" alt="Watch">
                   </div>
                   <div class="text">
                     <h3>${item.name_product}</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam sunt numquam cumque hic!</p>
                     <h5>$ ${item.price}</h5>
                     <div class="rating">
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                     </div>
                   </div>
                   <div class="btn">
                     <button>Add To Cart</button>
                   </div>
                 </div>
                  `
                main.appendChild(item_div)
               }
        if(product_data == null){
              product_data = [products]
              localStorage.getItem("products" , JSON.stringify (product_data))
        }else{
            product_data.push(products)
            localStorage.getItem("products" ,JSON.stringify(product_data))
        }
        localStorage.setItem("user_info", JSON.stringify (products))
})
btn_click[0].addEventListener("click", (e)=> {
     e.preventDefault
    var user_info = JSON.parse(localStorage.getItem("user_info"))
    console.log("user_info")
})
