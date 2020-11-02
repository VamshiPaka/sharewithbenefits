import React, { Component } from 'react';

import Imagelist from './Imagelist';
import './style.css'
class offers extends Component {
    constructor()
    {
        super();
        this.state={
            name : "Look at all amazing offers"
        }
    }
    render() 
    {
        const imagearrobj =
            [
                {
                    name: " Analog Watch  ",
                    path: "https://images-na.ssl-images-amazon.com/images/I/617HWqbDTEL._UL1133_.jpg",
                    price:330,
                    description:"Comfortable, stylish, Band designed to fit most wrists.",
                    brand:"Acnos",
                    site:"Amazon",
                    link:"https://www.amazon.in/Acnos-Multi-Analogue-FX-425-430-436-Watches/dp/B085FRWFZX/ref=sr_1_6?dchild=1&keywords=combo+watches&qid=1602427117&sr=8-6"

                },
                {
                    name: "Casual Shirts ",
                    path: "https://rukminim1.flixcart.com/image/464/557/jcuu2kw0/shirt/p/5/a/3xl-coms-1155-mrn-nevy-la-milano-original-imaffw4xdptgug7y.jpeg?q=50",
                    price:799,
                    description:"Men Slim Fit Solid Spread Collar Casual Shirt",
                    brand:"La Milano ",
                    site:"Flipkart",
                    link:"https://www.flipkart.com/la-milano-men-solid-casual-dark-blue-maroon-shirt/p/itmf3x6zvhfzszbn?pid=SHTFFWE68CWN7F5F&lid=LSTSHTFFWE68CWN7F5FFA1QOB&marketplace=FLIPKART&srno=s_1_5&otracker=search&otracker1=search&fm=SEARCH&iid=1e506b1b-8ac5-45f1-8de9-397b3cf5f67a.SHTFFWE68CWN7F5F.SEARCH&ppt=sp&ppn=sp&ssid=kd5fnpvkjy5nkb281602437313168&qH=aba8542a1123fc8c"
                },
                {
                    name: " T-shirts ",
                    path: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/6/13/984ecebc-e326-41f0-909b-29ecfeb34a351592000883478-1.jpg",
                    price:794,
                    description:"Men Pack Of 3 Printed Round Neck T-shirts",
                    brand:"Bulmer",
                    site:"Myntra",
                    link:"https://www.myntra.com/tshirts/bullmer/bullmer-men-pack-of-3-printed-round-neck-t-shirts/11934782/buy"
                },
                {
                    name: "Mobiles ",
                    path: "https://cdn.shopclues.com/images/thumbnails/36933/200/200/92104771K11RedK33Black14508642951462459269.png",
                    price:1250,
                    description:"I kall mobile combo K11 Red K33",
                    brand:"Kall",
                    site:"Shopclues",
                    link:"https://www.shopclues.com/i-kall-mobile-combo-k11-red-k33-black-with-brand-warranty.html"
                },
                {
                    name:"Curtains" ,
                    path: "https://m.media-amazon.com/images/I/71UMEvrD5cL._AC_UY218_.jpg",
                    price:299,
                    description:"Motif Window Curtain",
                    brand:"Homely",
                    site:"Amazon",
                    link:"https://www.amazon.in/Homely-Polyester-Eyelet-Window-Curtain/dp/B07SC2LXWK/ref=sr_1_6?dchild=1&pf_rd_i=gb_main&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=daa47517-5bef-4e97-b82e-ec3e7d37859c&pf_rd_r=8TWX9A09Y00C7B8TJBBH&pf_rd_s=slot-5&pf_rd_t=701&qid=1602439669&smid=A1XW4A1FMCCIF1&sr=8-6"
                },{
                    name: "Kitchen",
                    path: "https://cdn0.desidime.com/topics/photos/1205878/medium/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg?1602429080",
                    price:647,
                    description:"Butterfly Rapid Kettle 1.5 Litre + Eco 750 Ml Water Bottle",
                    brand:"Butterfly",
                    site:"DesiDime",
                    link:"https://www.desidime.com/deals/butterfly-rapid-kettle-1-5-litre-eco-750-ml-water-bottle-8a72cb30-ea76-4ba1-9798-d611778fa689"
                },
                {
                    name: "Handbags ",
                    path: "https://m.media-amazon.com/images/I/71CJqPPm2KL._AC_UL320_.jpg",
                    price:799,
                    description:"Mammon Women's Handbag ",
                    brand:"Mammon",
                    site:"Amazon",
                    link:"https://www.amazon.in/Mammon-Womens-Stylish-Handbags-4L-bib-Bpink/dp/B07XG2DMRV/ref=sr_1_9?crid=ZFYCFJ7EGD9W&dchild=1&keywords=combo+offers+for+women&qid=1602481864&sprefix=combo+offe%2Caps%2C277&sr=8-9"
                },
                {
                    name: "Footwear ",
                    path: "https://m.media-amazon.com/images/I/61y23bkCZ6L._AC_UL320_.jpg",
                    price:630,
                    description:"WORLD WEAR FOOTWEAR",
                    brand:"Earton",
                    site:"Amazon",
                    link:"https://www.amazon.in/WORLD-WEAR-FOOTWEAR-Multi-Coloured-Moccasins/dp/B07P5NF2D7/ref=sr_1_11?crid=ZFYCFJ7EGD9W&dchild=1&keywords=combo+offers+for+women&qid=1602481864&sprefix=combo+offe%2Caps%2C277&sr=8-11"
                },
               
                {
                    name: "Lehenga Choli ",
                    path: "https://rukminim1.flixcart.com/image/660/792/jvwpfgw0/lehenga-choli/j/z/j/free-noor01-panchhi-nx-original-imafgpbduyhdvyak.jpeg?q=50",
                    price:849,
                    description:"Embroidered Semi Stitched Lehenga Choli ",
                    brand:"panchhi nx",
                    site:"Flipkart",
                    link:"https://www.flipkart.com/panchhi-nx-embroidered-semi-stitched-lehenga-choli/p/itmfgpdturgvxzxn?pid=LCHFGPBJPGA3CJZJ&lid=LSTLCHFGPBJPGA3CJZJRVQRCF&marketplace=FLIPKART&srno=b_1_5&otracker=clp_omu_Fashion%2BTop%2BDeals_1_2.dealCard.OMU_offers-store_offers-store_AZLPMRUZV6H2_1&otracker1=clp_omu_PINNED_neo%2Fmerchandising_Fashion%2BTop%2BDeals_NA_dealCard_cc_1_NA_view-all_1&fm=neo%2Fmerchandising&iid=5ca46d4c-e81e-47f3-b9af-859ba197ada3.LCHFGPBJPGA3CJZJ.SEARCH&ppt=browse&ppn=browse&ssid=p0pfk3m8340000001602482352097"
                },
                {
                    name: "Sun glasses",
                    path: "http://imshopping.rediff.com/imgshop/300-300/shopping/pixs/946/b/buy-1-get-1-free_557af94a47c72._wayfarer-style-sunglasses-green-amp-purple-buy-1-get-1-free.jpg",
                    price:469,
                    description:"Wayfarer Style Sunglasses ",
                    brand:"Wayfarer",
                    site:"Reddif",
                    link:"http://shopping.rediff.com/product/wayfarer-style-sunglasses-green-amp-purple-buy-1-get-1-free/14884323?sc_cid=www.google.com|search_buy-one-get-one-free"
                },
                {
                    name: "Table linen",
                    path: "https://rukminim1.flixcart.com/image/612/612/kekadu80/table-placemat/d/j/p/rtm-2902-revexo-original-imafv85gctksx4hb.jpeg?q=70",
                    price:299,
                    description:"REVEXO Rectangular Pack of 6 Table Placemat ",
                    brand:"Revexo",
                    site:"Flipkart"
                },
                {
                    name: "Bedsheets ",
                    path: "https://rukminim1.flixcart.com/image/612/612/kao98cw0/bedsheet/j/f/h/bedsheet-0041-2pack-bedsheet-0041-2pack-flat-mr-ronak-original-imafs6ve9phpkymz.jpeg?q=70",
                    price:2964,
                    description:"Mini Sewing Machine With Foot Pedal",
                    brand:"DealMart",
                    site:"Reddif",
                    link:"http://shopping.rediff.com/product/buy-1-get-1-free-mini-sewing-machine-with-foot-pedal-b1g1sewm01/22770990?sc_cid=www.google.com|search_buy-one-get-one-free"
                },
                {
                    name: "Sewing Machine",
                    path: "http://imshopping.rediff.com/imgshop/300-300/shopping/pixs/4654/p/pedal-b1g1sewm01._buy-1-get-1-free-mini-sewing-machine-with-foot-pedal-b1g1sewm01.jpg",
                    price:2480,
                    description:"  Motorbike Helmet  (Black)",
                    brand:"Steelbird",
                    site:"Flipkart",
                    link:"http://shopping.rediff.com/product/buy-1-get-1-free-mini-sewing-machine-with-foot-pedal-b1g1sewm01/22770990?sc_cid=www.google.com|search_buy-one-get-one-free"
                },
                {
                    name: "Napkins ",
                    path: "https://rukminim1.flixcart.com/image/612/612/k5zn9u80/cleaning-cloth/h/p/u/fbsorcc-30x40-pk2-flipkart-smartbuy-original-imafn9fcrrfyxeyk.jpeg?q=70",
                    price:320,
                    description:"Flipkart SmartBuy Microfiber Napkin P6 Multicolor Napkins",
                    brand:"Flipkart",
                    site:"Flipkart"
                },
                {
                    name: "Shoes",
                    path: "https://rukminim1.flixcart.com/image/464/557/kdyus280-0/shoe/z/0/4/combo-o-1595-1242-720-9-earton-multicolor-original-imafur94qrndcjzb.jpeg?q=50",
                    price:499,
                    description:"Sports (Walking & Gym Shoes) ",
                    brand:"Swiggy",
                    site:"Flipkart"
                },
                {
                    name: "Containers ",
                    path: "https://rukminim1.flixcart.com/image/612/612/k2krekw0/container/h/g/t/oifktstmxp14pcsetp-polyset-original-imafhw3wx6mczqdq.jpeg?q=70",
                    price:332,
                    description:"Polyset Twisty-Valley of Tulip - 8600 ml Plastic Grocery Container",
                    brand:"Polyset",
                    site:"Flipkart"
                },
                
                
                
            ]
            
        const arraycard = imagearrobj.map((imagecard, i) => {
            return (<Imagelist key={i} name={imagearrobj[i].name}
                path={imagearrobj[i].path}
                price={imagearrobj[i].price}
                description={imagearrobj[i].description} 
                brand={imagearrobj[i].brand}
                site={imagearrobj[i].site}
                link={imagearrobj[i].link}/>
                )
        })
        return (
            <div className="myapp">
              
                <h1 className="welcome">{this.state.name}</h1>
                {arraycard}
                
            </div>
        );
    }
}
export default offers;