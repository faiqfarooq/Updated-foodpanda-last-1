'use strict';

const dataArr=[
    {
        id:0,
        itemImg:"https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        itemHeader:"Krunch Burger",
        itemDetail:"Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
        itemValue:1,
        itemPrice:250,
        itembtn: "btn1"
    },
    {
        id:1,
        itemImg:"https://images.kfcpakistan.com/image/1670409072074-image.jpg",
        itemHeader:"Rice N Spice",
        itemDetail:"Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
        itemValue:1,
        itemPrice:320,
        itembtn: "btn2"
    },
    {
        id:2,
        itemImg:"https://images.kfcpakistan.com/image/1670409626593-image.jpg",
        itemHeader:"Buffalo Wings",
        itemDetail:"8 Pieces of Hot Wings coated with a spicy Buffalo sauce and topped with chili flakes",
        itemValue:1,
        itemPrice:490,
        itembtn: "btn3"
    },
    {
        id:3,
        itemImg:"https://images.kfcpakistan.com/image/1664273718042-image.png",
        itemHeader:"Zinger Stacker",
        itemDetail:"Double chicken fillet, jalapenos, cheese with our signature Vietnamese Sauce- sandwiched",
        itemValue:1,
        itemPrice:550,
        itembtn: "btn4"
    },
    {
        id:4,
        itemImg:"https://images.kfcpakistan.com/image/1670410693739-image.jpg",
        itemHeader:"Wow Meal Box",
        itemDetail:"Feel good with 1 signature Zinger + 1 pc Hot & Crispy Chicken + 1 regular fries + 1 drink + 1 fresh coleslaw",
        itemPrice:850,
        itemValue:1,
        itembtn: "btn5"
    },
    {
        id:5,
        itemImg:"https://images.kfcpakistan.com/image/1670410866622-image.jpg",
        itemHeader:"Family Festival",
        itemDetail:"It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 dinner rolls + 1.5 Ltr drink",
        itemValue:1,
        itemPrice:1999,
        itembtn: "btn6"
    },
   
]



let i=0;





    document.getElementById("cards").innerHTML=dataArr.map(function(val){
      var{id,itemImg,itemHeader,itemDetail,itemPrice}=val;
        return(
           ` 
           <div class="card">
           <div class="card-main">
             <div class="card-img">
               <img src="${itemImg}" alt="
               Krunch Burger" class="card-pic">
             </div>
             <div class="card-details">
               <div class="card-data">
                 <h2 class="card-header">${itemHeader}</h2>
                 <p class="card-text">${itemDetail}</p>
               </div>
               <div class="card-price-button">
                 <h2 class="card-price"> Rs <span class="price-span">${itemPrice}</span>  </h2>
                 <div class="card-button-set">
                 
                  <button  onclick="addtocart(${id})" class="card-btn"  > <span class="card-plus">+</span>  </button>
                   
                   
                 </div>
             
               </div>
              
             </div>
           </div>
           </div>
           `
        )
    }).join(' ');

    var cart=[]; 

function addtocart(a){
 
  
  cart.push(dataArr[a]);
  remove(a);
 
}

function remove(a){
   
    cart = [...new Set(cart)];
   displaycart(a);

  
}
function delElement(a){

  
    cart.splice(a, 1);
    displaycart(a);
}


function displaycart(){
    let j = 0,  subtotal=0 , gst=0 , delivery=150 , total=0, discount=0 ,totalPrice;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length === 0){
        document.getElementById("cart").innerHTML="You looks hungery.If Yes! Order Now"
        document.getElementById("subtotal").innerHTML = 0+".00";
        document.getElementById("subtotal").innerHTML = 0+".00";
        document.getElementById("gst").innerHTML = 0+".00";
        document.getElementById("total").innerHTML = 0+".00";
        document.getElementById("delivery").innerHTML = 0+".00";
    }
    else{
      
        document.getElementById("cart").innerHTML=cart.map((val)=>{
            var {id, itemValue,itemImg,itemHeader,itemDetail,itemPrice}=val;
    
            subtotal=(subtotal *itemValue)+itemPrice;
            gst= Math.round((4 / 100) * (subtotal *itemValue));
            total=gst+(subtotal *itemValue)+delivery+discount;

            document.getElementById("subtotal").innerHTML = (subtotal *itemValue) +".00";
            document.getElementById("gst").innerHTML = gst+".00";
            document.getElementById("delivery").innerHTML = delivery+".00";
            document.getElementById("total").innerHTML = "Rs "+total+".00";
            console.log('start')
console.log(cart)
console.log('end')

            return(
               
                ` <div class="cart__details--info" >
                <div class="cart--main">
                  <div class="cart--main__img"><img src="${itemImg}" alt="" class="cart--main__img--pic"></div>
                  <div class="cart--main__desc"><h2 class="cart--main__desc--header">${itemHeader}</h2>
                  <p class="cart--main__desc--text
                  ">${itemDetail}</p>
                  </div>
                  <div class="cart--main__quantity"> 
                    <button class="cart--main__quantity--btn" onclick="incrementValue(${id})"> 
                      <span class="cart--main__quantity--btn--span">+</span>
                    </button>
                        <input type='number' class='cart--main__quantity--input' value="${itemValue}" min='1'  id='number' >
                    <button class="cart--main__quantity--btn" onclick="decrementValue(${id})"> <span class="cart--main__quantity--btn--span">-</span> 
                    </button>
                  </div>
                  <div class="cart--main__price">${itemPrice}</div> 
                  <div class="cart--main__remove">
                `+"<img onclick='delElement("+ (j++) +")'  src='./images/icons8-waste-100.png'    class='card-btn--1'>"+  `
                  </div>
                 <div class='cart--main__totalprice' id="totalPrice"> ${(itemPrice * itemValue) }   </div>
                </div>
                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                `
            )
            
        }).join(' ');
    }
  
}

function incrementValue(a)
{
    console.log(a)
       
         dataArr[a].itemValue = dataArr[a].itemValue +1;

   
         displaycart();
 
}
function decrementValue(a)
{
    console.log(a)

    if(dataArr[a].itemValue>1){
        dataArr[a].itemValue = dataArr[a].itemValue -1;
 
    }
         displaycart();
    
}

function checkout(){
    alert(" 🖐Hi. ✔ Your order is placed successfully 💯. Delecious food 👌 is waiting for U. Our 🏍 rider will reached very soon. Please wait for 30 mints 🚚.");
    window.location.reload(true);
}

// function incrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value<10){
//         value++;
//             document.getElementById('number').value = value;
//     }
// }
// function decrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value>1){
//         value--;
//             document.getElementById('number').value = value;
//     }
// }
   







