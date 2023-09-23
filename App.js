const product = [
    { 
        id: 0,
        image: 'watch.jpeg',
        title: 'smart watch for men',
        price: 1200,
    },
    {
        id: 1,
        image: 'smart.jpeg',
        title: '43inch smart tv',
        price: 15000,
    },
    {
        id: 2,
        image: 'laptop.jpeg',
        title: 'dell i5 lap top',
        price: 35000,
    },
    {
        id: 3,
        image: 'oneplus.jpeg',
        title: 'one plus never cetel',
        price: 40000,
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
   let Cart= document.getElementById('root')
   Cart.innerHTML = categories.map((item)=>
    {
        var {image,title,price} = item;
        return(
            `<div class='box'>
               <div class='img-box'>
                   <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
               <p>${title}</p>
               <h2>₹ ${price}.00</h2>`+
            "<button on click='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

