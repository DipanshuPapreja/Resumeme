let menu = document.querySelector('.navbar');
let close = document.querySelector('#close');
let cart = document.querySelector('.cart');
let wishlist = document.querySelector('.wish');

//================================ MenuList Open =========================

document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle('active');
};
document.querySelector('#close').onclick = () => {
    menu.classList.remove('active');
};

//================================ MenuList Close ========================

//================================ CartList Open =========================

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
};

document.querySelector('#close-cart').onclick = () => {
    cart.classList.remove('active');
};

//================================ CartList Close =========================

// ================================ WishList Open =========================

document.querySelector('#wish-btn').onclick = () => {
    wishlist.classList.toggle('active');
};

document.querySelector('#close-wish').onclick = () => {
    wishlist.classList.remove('active');
};

//================================ WishList Close =========================

// ============================ ProductsList Loop =========================

$('.owl-carousel').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    margin:0,
    NavText:[
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        200:{
            items:1
        },

        700:{
            items:2
        },

        821:{
            items:3
        },

        915:{
            items:3
        },

        1100:{
            items:4
        },
    }
});

// ============================ ProductsList Loop =========================

// ============================ Add To CartList ===========================

let addtocartbtn = document.getElementsByClassName('addcart');
cartcontainer = document.getElementsByClassName('cart-content')[0];

for(var i=0;i<addtocartbtn.length;i++){
    addtocartbtn[i].addEventListener('click',updateCartContainer);
}

function updateCartContainer(e){
    let currentaddtocartbtn = e.target;
    let productcontainer = currentaddtocartbtn.parentElement;
    let productTitle = productcontainer.getElementsByClassName('producttitle')[0].innerHTML;
    let productPrice = productcontainer.getElementsByClassName('productprice')[0].innerHTML;
    let productImage = productcontainer.getElementsByClassName('productimage')[0].src;

    let cartTitle = cartcontainer.getElementsByClassName('cart-Title');
    for(let i=0;i<cartTitle.length;i++){
        if(cartTitle[i].innerHTML == productTitle){
            alert("Already Exist");
            return;
        }
    }

    AddnewRowinCart(productTitle,productPrice,productImage);

    totalPrice = 0;
    cartPrices = cartcontainer.getElementsByClassName('cart-price');
    for(var i=0;i<cartPrices.length;i++){
        totalPrice = totalPrice + parseInt(cartPrices[i].innerHTML.replace('$','').replace('',''));
    }
    document.getElementsByClassName('total-price')[0].innerHTML = new Number(totalPrice).toLocaleString('en');
}



function AddnewRowinCart(productTitle,productPrice,productImage){
    div = document.createElement('div');
    div.classList.add('cart-box');

    insideDivContent = `<img src="${productImage}" alt="product-1" class="cart-img">
                        <div class="detail">
                            <div class="cart-Title">${productTitle}</div>
                            <div class="cart-price">${productPrice}</div>
                        </div>
                        <i class="bx bxs-trash-alt cart-remove"></i>`;
    
    div.innerHTML = insideDivContent;
    cartcontainer.appendChild(div);

    removebutton = document.getElementsByClassName('cart-remove');
    for(let i=0;i<removebutton.length;i++){
        removebutton[i].addEventListener('click',removeFromCart);
    }
}

function removeFromCart(e){
    e.target.parentElement.remove();
    updatePriceAfterRemove();
}

function updatePriceAfterRemove(){
    totalPrice = 0;
    cartPrices = cartcontainer.getElementsByClassName('cart-price');
    for (var i = 0; i < cartPrices.length; i++) {
        priceFormatedNumb = cartPrices[i].innerHTML.replace('$', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('total-price')[0].innerHTML = new Number(totalPrice).toLocaleString('en');
}

// ============================ Add to CartList ============================

// ============================ Add to WishList ============================

let addtowish = document.getElementsByClassName('addwish');
wishcontainer = document.getElementsByClassName('wish-content')[0];
for(var i=0;i<addtowish.length;i++){
    addtowish[i].addEventListener('click',updatewishcontainer);
}

function updatewishcontainer(e){
    let currentaddtowishbtn = e.target;
    let wishproductcontain = e.target.parentElement;
    let wishproducttitle = wishproductcontain.getElementsByClassName('producttitle')[0].innerHTML;
    let wishproductPrice = wishproductcontain.getElementsByClassName('productprice')[0].innerHTML;
    let wishproductImage = wishproductcontain.getElementsByClassName('productimage')[0].src;
    AddnewRowinWish(wishproducttitle,wishproductPrice,wishproductImage);
}


function AddnewRowinWish(wishproductTitle,wishproductPrice,wishproductImage){
    div = document.createElement('div');
    div.classList.add('wish-detail-box');

    insideDivContent = `<img src="${wishproductImage}" alt="product-1" class="cart-img">
                        <div class="wish-detail">
                            <div class="wish-product-Title">${wishproductTitle}</div>
                            <div class="wish-price">${wishproductPrice}</div>
                        </div>
                        <i class="bx bxs-trash-alt wish-remove"></i>`;
    
    div.innerHTML = insideDivContent;
    wishcontainer.appendChild(div);

    wishremovebutton = document.getElementsByClassName('wish-remove');
    for(let i=0;i<wishremovebutton.length;i++){
        wishremovebutton[i].addEventListener('click',removeFromWish);
    }
}

function removeFromWish(e){
    e.target.parentElement.remove();
}

// ============================ Add to WishList ============================