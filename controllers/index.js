


const Product = require ('../models/product');
const Category = require('../models/category');

var productList = [
    {
        name: 'Roadster',
        cname: 'jeans',
        img:'https://sc01.alicdn.com/kf/HTB1uNjAQVXXXXaHapXXq6xXFXXX1.jpg_350x350.jpg'
    },
    {
        name: 'Noise Watch',
        cname: 'watch',
        img: 'https://staticimg.titan.co.in/Titan/Catalog/1584SL03_1.jpg?pView=pdp'
        
    },
    {
        name: 'Noise Earbuds',
        cname: 'earbuds',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71LOa1JA0qL._SY355_.jpg'
    },
    {
        name: 'Soch',
        cname: 'kurta',
        img: 'https://i.pinimg.com/originals/18/8c/86/188c860adba2bcdef8ed5b2b9c7d0040.jpg'
    },
    {
        name: 'Yufta',
        cname: 'kurta',
        img: 'https://img3.junaroad.com/uiproducts/16914937/pri_175_p-1580982608.jpg'
    },
    {
        name: 'Campus Sutra',
        cname: 'Sweatshirts',
        img: 'https://assets.ajio.com/medias/sys_master/root/he3/h9a/15737449775134/-473Wx593H-461070459-yellow-MODEL.jpg'
    },
    {
        name: 'Daniel Klein',
        cname: 'watch',
        img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/d/k/dk11421-7_1.jpg?rnd=20200526195200'
       
    },
    {
        name: 'Hubberholme',
        cname: 'casuals',
        img: 'https://n1.sdlcdn.com/imgs/e/a/f/230X258_sharpened/Hubberholme-Grey-Cotton-Trackpants-Single-SDL782934951-1-4d3e9.jpg'
    },
    {
        name: 'Ecko Unltd',
        cname: 'jacket',
        img: 'https://img.looksgud.com/upload/item-image/1770/11yec/11yec-ecko-unltd-men-olive-green-solid-denim-jacket_500x500_0.jpg'
    },
    {
        name: 'Boat',
        cname: 'earbuds',
        img: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-airdopes-431-black.jpg?v=1600151382'   
    }
    
]

const productsMap = productList.map(products => `${products.name}`);

module.exports.getProducts = async function(req,res) {
   
    res.status(200).json(productsMap);

};

module.exports.showProducts = async function(req,res) {
    return res.render('home',{
        title:"Shoppiee",
        products:productList
    });
}



module.exports.getCategory = async function(req,res) {
    let category= req.params.category;
    const retailCompanies = productList.filter(company => company.cname===category);
    res.status(200).json(retailCompanies);
}    

