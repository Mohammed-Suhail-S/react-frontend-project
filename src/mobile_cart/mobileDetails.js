const mobileData = [
    
    {
        id: "1", 
        name: "Samsung Galaxy S24 Ultra", 
        offerPrice: `1,08,499`,
        originalPrice: `1,09,999`, 
        rating: "9 / 10", 
        title: "Best Camera Phone", 
        delivery: 45,
        category: "samsung", 
        image: "https://m.media-amazon.com/images/I/81vxWpPpgNL.jpg"
    }, 
    {
        id: "2", 
        name: "Samsung Galaxy S24 Plus", 
        offerPrice: `83,499`,
        originalPrice: `85,999`, 
        rating: "8.5 / 10", 
        title: "Best Value Samsung Phone", 
        delivery: 40,
        category: "samsung", 
        image: "https://sathya.in/media/94030/catalog/black01%20(11).jpg"
    }, 
    {
        id: "3", 
        name: "Samsung Galaxy Z Fold6", 
        offerPrice: `1,58,499`,
        originalPrice: `1,60,999`, 
        rating: "8.7 / 10", 
        title: "Best Foldable Display", 
        delivery: 48,
        category: "samsung", 
        image: "https://m.media-amazon.com/images/I/61BgEfmZC8L.jpg"
    },
    {
        id: "4", 
        name: "Samsung Galaxy Z Flip6", 
        offerPrice: `85,499`,
        originalPrice: `87,999`, 
        rating: "8 / 10", 
        title: "Best Flip Phone", 
        delivery: 42,
        category: "samsung", 
        image: "https://m.media-amazon.com/images/I/71c2wuq3r9L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: "5", 
        name: "Samsung Galaxy A54 5G", 
        offerPrice: `37,499`,
        originalPrice: `41,999`, 
        rating: "8.1 / 10", 
        title: "Best Mid-range Phone", 
        delivery: 32,
        category: "samsung", 
        image: "https://i.gadgets360cdn.com/products/large/samsung-galaxy-a54-5g-db-623x800-1680082358.jpg"
    },
    {
        id: "6", 
        name: "Samsung Galaxy A34 5G", 
        offerPrice: `28,999`,
        originalPrice: `33,499`, 
        rating: "7.5 / 10", 
        title: "Best Budget 5G Phone", 
        delivery: 42,
        category: "samsung", 
        image: "https://i.gadgets360cdn.com/products/large/samsung-galaxy-a34-5g-621x800-1681716231.jpg"
    },
    {
        id: "7", 
        name: "Redmi Note 14 Pro+", 
        offerPrice: `39,780`,
        originalPrice: `42,780`, 
        rating: "9.2 / 10", 
        title: "Best Pro 14 Phone", 
        delivery: 52,
        category: "redmi", 
        image: "https://cdn1.smartprix.com/rx-iU1QhI9yn-w420-h420/xiaomi-redmi-note-14.jpg"
    },
    {
        id: "8", 
        name: "Redmi 13C", 
        offerPrice: `7,699`,
        originalPrice: `10,699`, 
        rating: "7.4 / 10", 
        title: "Best Pro 13 Phone", 
        delivery: 30,
        category: "redmi", 
        image: "https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: "9", 
        name: "Redmi 12 5G", 
        offerPrice: `10,699`,
        originalPrice: `11,999`, 
        rating: "7.7 / 10", 
        title: "Best Pro 12 Phone", 
        delivery: 37,
        category: "redmi", 
        image: "https://www.sathya.in/media/90596/catalog/silver1%20(2).jpg"
    },
    {
        id: "10", 
        name: "Redmi Note 12", 
        offerPrice: `12,499`,
        originalPrice: `13,999`, 
        rating: "8.1 / 10", 
        title: "Best 12 Phone", 
        delivery: 35,
        category: "redmi", 
        image: "https://www.91-img.com/gallery_images_uploads/6/8/684b306daea7cd27cde4c75addea6c8d95aab984.jpg?tr=h-271,c-at_max,q-80"
    },
    {
        id: "11", 
        name: "Redmi 14", 
        offerPrice: `47,499`,
        originalPrice: `50,999`, 
        rating: "9.5 / 10", 
        title: "Best Pro 14 Phone", 
        delivery: 49,
        category: "redmi", 
        image: "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FRedmi_14_5_G_Specification_cc399e4506.jpg&w=640&q=75"
    },
    {
        id: "12", 
        name: "Redmi Note 13 Pro", 
        offerPrice: `19,400`,
        originalPrice: `20,500`, 
        rating: "8.5 / 10", 
        title: "Best Pro 13 Phone", 
        delivery: 39,
        category: "redmi", 
        image: "https://www.sathya.in/media/93816/catalog/midnightblack1-1.jpg"
    },
    {
        id: "13", 
        name: "iPhone 16 Pro Max", 
        offerPrice: `1,44,900`,
        originalPrice: `1,46,400`, 
        rating: "9.8 / 10", 
        title: "Best 16 Pro Max Model", 
        delivery: 54,
        category: "iphone", 
        image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg"
    },
    {
        id: "14", 
        name: "iPhone 16 Pro", 
        offerPrice: `1,19,900`,
        originalPrice: `1,20,400`, 
        rating: "9.8 / 10", 
        title: "Best 16 Pro Model", 
        delivery: 52,
        category: "iphone", 
        image: "https://fdn.gsmarena.com/imgroot/news/24/06/iphone-16-pro-16-pro-max-dimensions-leak/inline/-1200/gsmarena_001.jpg"
    },
    {
        id: "15", 
        name: "iPhone 16 Plus", 
        offerPrice: `89,900`,
        originalPrice: `90,400`, 
        rating: "9.5 / 10", 
        title: "Best 16 Plus Model", 
        delivery: 50,
        category: "iphone", 
        image: "https://www.imagineonline.store/cdn/shop/files/iPhone_16_Plus_Teal_PDP_Image_Position_1__en-IN_ba0c035a-8e15-420d-a47b-a26813fa2133.jpg?v=1727248656&width=1445"
    },
    {
        id: "16", 
        name: "iPhone 16", 
        offerPrice: `79,900`,
        originalPrice: `80,400`, 
        rating: "9.4 / 10", 
        title: "Best 16 Model", 
        delivery: 48,
        category: "iphone", 
        image: "https://images.macrumors.com/t/vKCWQYBv5sZhRIPH9FimGV6s0YI=/1600x0/article-new/2023/09/iPhone-16-Side-2-Feature.jpg"
    },
    {
        id: "17", 
        name: "iPhone 15 Pro Max", 
        offerPrice: `1,56,900`,
        originalPrice: `1,58,400`, 
        rating: "9.6 / 10", 
        title: "Best 15 Pro Max Model", 
        delivery: 58,
        category: "iphone", 
        image: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694758834&width=1445"
    },
    {
        id: "18", 
        name: "iPhone 15 Pro", 
        offerPrice: `1,30,900`,
        originalPrice: `1,32,400`, 
        rating: "9.5 / 10", 
        title: "Best 15 Pro Model", 
        delivery: 58,
        category: "iphone", 
        image: "https://i.etsystatic.com/39484203/r/il/2a07d7/5450477363/il_570xN.5450477363_7l6t.jpg"
    },
    {
        id: "19", 
        name: "OPPO Reno11 Pro", 
        offerPrice: `29,100`,
        originalPrice: `33,100`, 
        rating: "8.8 / 10", 
        title: "5G smartphone", 
        delivery: 36,
        category: "oppo", 
        image: "https://sathya.in/media/93899/catalog/oppo%20Reno11%20Pro%205G%201.jpg"
    },
    {
        id: "20", 
        name: "OPPO A3 Pro", 
        offerPrice: `17,999`,
        originalPrice: `19,999`, 
        rating: "7.5 / 10", 
        title: "Mid-range 5G", 
        delivery: 46,
        category: "oppo", 
        image: "https://www.sathya.in/media/95463/catalog/3%20(26).jpg"
    },
    {
        id: "21", 
        name: "OPPO A79 5G", 
        offerPrice: `13,999`,
        originalPrice: `15,999`, 
        rating: "7.7 / 10", 
        title: "Budget 5G", 
        delivery: 42,
        category: "oppo", 
        image: "https://mobitez.in/wp-content/uploads/2024/04/OPPO-A79-5G-Glowing-Green-ps1.webp"
    },
    {
        id: "22", 
        name: "OPPO F27", 
        offerPrice: `19,500`,
        originalPrice: `21,500`, 
        rating: "8.3 / 10", 
        title: "Mid-range 5G", 
        delivery: 40,
        category: "oppo", 
        image: "https://www.oppo.com/content/dam/oppo-campaign-site/in/events/oppo-product/image-link/march-2023/F27_5G_Emerald_Green_1200X200.jpg"
    },
    {
        id: "23", 
        name: "OPPO K12x", 
        offerPrice: `15,500`,
        originalPrice: `18,500`, 
        rating: "8.7 / 10", 
        title: "5G Budget", 
        delivery: 44,
        category: "oppo", 
        image: "https://mobitez.in/wp-content/uploads/2024/07/Oppo-K12x-5G-Breeze-Blue.webp"
    },
    {
        id: "24", 
        name: "OPPO Reno8 5G", 
        offerPrice: `28,500`,
        originalPrice: `31,500`, 
        rating: "9 / 10", 
        title: "Premium 5G", 
        delivery: 48,
        category: "oppo", 
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/v/o/3/-original-imaggg5rj8sdgzse.jpeg?q=90&crop=false"
    },
    {
        id: "25", 
        name: "Vivo X100 Pro 5G", 
        offerPrice: `89,999`,
        originalPrice: `92,999`, 
        rating: "9.7 / 10", 
        title: "Flagship", 
        delivery: 60,
        category: "vivo", 
        image: "https://i.gadgets360cdn.com/products/large/vivo-x100-pro-db-709x800-1699936880.jpg"
    },
    {
        id: "26", 
        name: "Vivo V40 Pro", 
        offerPrice: `49,999`,
        originalPrice: `52,999`, 
        rating: "9.2 / 10", 
        title: "Premium", 
        delivery: 65,
        category: "vivo", 
        image: "https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/v/i/vivo_v40_pro_5g_titanium_grey_-3_1.jpg"
    },
    {
        id: "27", 
        name: "Vivo V30", 
        offerPrice: `29,500`,
        originalPrice: `31,500`, 
        rating: "8.3 / 10", 
        title: "Mid-range", 
        delivery: 61,
        category: "vivo", 
        image: "https://m.media-amazon.com/images/I/61LI5G00UNL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: "28", 
        name: "Vivo V40e 5G", 
        offerPrice: `28,000`,
        originalPrice: `30,000`, 
        rating: "8.3 / 10", 
        title: "Mid-range", 
        delivery: 62,
        category: "vivo", 
        image: "https://cdn1.smartprix.com/rx-iBHLwkw5S-w420-h420/vivo-v40e-5g.jpg"
    },
    {
        id: "29", 
        name: "Vivo T3 5G", 
        offerPrice: `18,999`,
        originalPrice: `20,499`, 
        rating: "8 / 10", 
        title: "Budget", 
        delivery: 58,
        category: "vivo", 
        image: "https://i.gadgets360cdn.com/products/large/vivo-t3-5g-vivo-db-697x800-1711007158.jpg"
    },
    {
        id: "30", 
        name: "Vivo Y28e 5G", 
        offerPrice: `10,499`,
        originalPrice: `11,999`, 
        rating: "6.9 / 10", 
        title: "Budget Model", 
        delivery: 47,
        category: "vivo", 
        image: "https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/v/i/vivo_y28e_5g_vintage_red_-1_1.jpg"
    }

];

export default mobileData;
