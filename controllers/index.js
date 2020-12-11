


// list of products on the site
// name: name of products, cname: category of the product
var productList = [
    {
        name: 'Roadster',
        cname: 'Jeans',
        img:'https://sc01.alicdn.com/kf/HTB1uNjAQVXXXXaHapXXq6xXFXXX1.jpg_350x350.jpg'
    },
    {
        name: 'Noise Watch',
        cname: 'Watch',
        img: 'https://staticimg.titan.co.in/Titan/Catalog/1584SL03_1.jpg?pView=pdp'
        
    },
    {
        name: 'Noise Earbuds',
        cname: 'Earbuds',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71LOa1JA0qL._SY355_.jpg'
    },
    {
        name: 'Soch',
        cname: 'Kurta',
        img: 'https://i.pinimg.com/originals/18/8c/86/188c860adba2bcdef8ed5b2b9c7d0040.jpg'
    },
    {
        name: 'Yufta',
        cname: 'Kurta',
        img: 'https://img3.junaroad.com/uiproducts/16914937/pri_175_p-1580982608.jpg'
    },
    {
        name: 'Campus Sutra',
        cname: 'Sweatshirts',
        img: 'https://assets.ajio.com/medias/sys_master/root/he3/h9a/15737449775134/-473Wx593H-461070459-yellow-MODEL.jpg'
    },
    {
        name: 'Daniel Klein',
        cname: 'Watch',
        img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/d/k/dk11421-7_1.jpg?rnd=20200526195200'
       
    },
    {
        name: 'Hubberholme',
        cname: 'Casuals',
        img: 'https://n1.sdlcdn.com/imgs/e/a/f/230X258_sharpened/Hubberholme-Grey-Cotton-Trackpants-Single-SDL782934951-1-4d3e9.jpg'
    },
    {
        name: 'Ecko Unltd',
        cname: 'Jacket',
        img: 'https://img.looksgud.com/upload/item-image/1770/11yec/11yec-ecko-unltd-men-olive-green-solid-denim-jacket_500x500_0.jpg'
    },
    {
        name: 'Boat',
        cname: 'Earbuds',
        img: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-airdopes-431-black.jpg?v=1600151382'   
    }
    
]

// to get list of matched categories
const prodMap = productList.map(products => `${products.cname}`);
const list = prodMap.filter((x, i, a) => a.indexOf(x) === i)

const productsMap = productList.map(products => `${products.name}`);

// to show products and category options on screen
module.exports.showProducts = async function(req,res) {
    return res.render('home',{
        title:"Shoppiee",
        products:productList,
        category:list
    });
}

// to get selected category list of products
 module.exports.getCategoryProducts = async function(req,res) {
    let categoryname= req.params.categoryname;
    const selectedCatergory = productList.filter(categ => categ.cname===categoryname);
    return res.render('category',{
        title:"Shoppiee",
        categories:selectedCatergory,
        category:list
    });
}  



// api routes
// to get all the products
module.exports.getProducts = async function(req,res) {
    res.status(200).json({
    message: "List of posts",
    products: productList
})
};

// to get the selected products
module.exports.getCategory = async function(req,res) {
    let category= req.params.category;
    const selectedCatergory = productList.filter(cate => cate.cname===category);
    // res.status(200).json(selectedCatergory);
    res.status(200).json({
        message: "Category of products",
        products: selectedCatergory
    })
} 

