const products = [
  
  {
    id: "product11",
    url: "https://m.media-amazon.com/images/I/61lWkGr0RiL._SX679_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61lWkGr0RiL._SX679_.jpg",
    title: {
      shortTitle: "iQOO 9 Pro 5G",
      longTitle:
        "iQOO 9 Pro 5G (Legend, 12GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 Mobile Processor | 120W FlashCharge",
    },
    price: {
      mrp: 79990,
      cost: 44990,
      discount: "44%",
    },
    description:
      "Snapdragon 8 Gen 1 Mobile Processor which uses the latest 4nm process technology & has a maximum increase of 20% in CPU performance, a maximum increase of 30% in GPU performance (Compared with Qualcomm Snapdragon 888 5G Mobile Platform) 120W FlashCharge which can charge 50% battery in just 8 minutes and 100% battery in just 20 minutes.Also, 50W Wireless FlashCharge using vertical charger which provides convenience and universality.50MP GN5 Gimbal Camera which is equipped with GN5's all-directional autofocus technology Dual Pixel Pro greatly improves the autofocus performance, Gimbal increases the exposure time to capture breathtaking Motion and Night picture",
    discount: "Upto 44% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product2",
    url: "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Sandwich Makers",
      longTitle: "Amazon SmartBuy Sandwich 01 Grill  (Black)",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    description:
      "This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better",
    discount: "From 99+5% Off",
    tagline: "Pestige, Nova & more",
  },
  {
    id: "product3",
    url: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    title: {
      shortTitle: "Apple MacBook Pro",
      longTitle:
        "Apple 2022 MacBook Pro Laptop with M2 chip:(13.3-inch) Retina Display, 8Gb Ram, Touch Bar, Backlit Keyboard, FaceTime HD Camera;",
    },
    price: {
      mrp: 149900,
      cost: 137900,
      discount: "8%",
    },
    description:
      "SUPERCHARGED BY M2 - The 13-inch MacBook Pro laptop is a portable powerhouse. Get more done faster with a next-generation 8-core CPU, 10-core GPU and up to 24GB of unified memory. UP TO 20 HOURS OF BATTERY LIFE - Go all day and into the night, thanks to the power- efficient performance of the Apple M2 chip. SUSTAINED PERFORMANCE - Thanks to its active cooling system, the 13 - inch MacBook Pro can sustain pro levels of performance, so you can run CPU - and GPU - intensive tasks for hours on end.",
    discount: "Upto 70% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product4",
    url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Molife Sense 500 Smartwatch  (Black Strap, Freesize)",
    },
    price: {
      mrp: 6999,
      cost: 4049,
      discount: "42%",
    },
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product5",
    url: "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    title: {
      shortTitle: "Trimmers, Dryers & more",
      longTitle: "Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)",
    },
    price: {
      mrp: 1899,
      cost: 1124,
      discount: "40%",
    },
    description:
      "New generation compact hair dryer with a modern and elegant design the 2800 professional hair dryer best choice for a salon.For salon or family.Best choice Low noise designed strong power.High - quality powerful wind motor- fan balancing system soft touch handle specifications of 1800 hair dryer",
    discount: "From ₹499",
    tagline: "Kubra, Nova & more",
  },
  {
    id: "product6",
    url: "https://m.media-amazon.com/images/I/81kAitW5qAL._SX522_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/81kAitW5qAL._SX522_.jpg",
    title: {
      shortTitle: "GTA V",
      longTitle: "ROCKSTAR GAMES PS5 Grand Theft Auto V (GTA V)",
    },
    price: {
      mrp: 2799,
      cost: 1799,
      discount: "39%",
    },
    description:
      "Experience entertainment blockbusters, Grand Theft Auto V and GTA Online — now for PlayStation 5. Enhanced fidelity & performance, new graphics modes up to 4K 60FPS, HDR options, ray tracing & more Plus, all - new enhancements to the ever - evolving world of GTA Online. Exclusive new content, Career Builder, New Menu Design, All current, previous updates for GTA Online Experience GTA Online, a dynamic and ever - evolving online universe for up to 30 players",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product7",
    url: "https://m.media-amazon.com/images/I/91Ec4DX538L._SX385_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/91Ec4DX538L._SX385_.jpg",
    title: {
      shortTitle: "God of War III",
      longTitle: "God of War III: Remastered",
    },
    price: {
      mrp: 1499,
      cost: 1049,
      discount: "30%",
    },
    description:
      "IN THE END, THERE WILL BE ONLY CHAOS Originally developed by Sony Computer Entertainment's Santa Monica Studio exclusively for the PLAYSTATION(R)3(PS3) system.God of War III Remastered will bring epic battles to life with stunning graphics and an elaborate plot that puts Kratos at the center of carnage and destruction as he seeks revenge against the Gods who have betrayed him.Set in the realm of brutal Greek mythology, God of War III Remastered is the critically acclaimed single- player game that allows players to take on the fearless role of the ex - Spartan warrior, Kratos, as he rises from the darkest depths of Hades to scale the very heights of Mount Olympus to seek his bloody revenge.",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product1",
    url: "https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)",
    },
    price: {
      mrp: 1195,
      cost: 625,
      discount: "47%",
    },
    description:
      "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product8",
    url: "https://m.media-amazon.com/images/I/71TjrNa3xQL._SY450_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/71TjrNa3xQL._SY450_.jpg",
    title: {
      shortTitle: "Dell XPS 9320 Laptop",
      longTitle:
        'Dell XPS 9320 Laptop, Intel Core I7-1360P/32GB/1TB SSD/13.4" UHD+ AR',
    },
    price: {
      mrp: 259695,
      cost: 201990,
      discount: "22%",
    },
    description:
      "Processor: I7-1360P (3.70 GHz up to 5.00 GHz) 18MB & 12 Cores // RAM: 32GB, LPDDR5, 6000 MHz, integrated, dual channel // Storage: 1TB SSD. Software: Win 11 + Office H& S 2021 & MCAfee Antivirus 15 Months. Graphics: INTEGRATED // Display: 13.4 UHD+ AR Infinity Edge 500 nits Touch // Keyboard: Backlit Keyboard + Fingerprint Reader. Ports: 2x Thunderbolt 4(USB Type - C) with DisplayPort and Power Delivery 1 USB - C to USB - A v3.0 adapter ships standard",
    discount: "Upto 22% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product9",
    url: "https://m.media-amazon.com/images/I/51mWHXY8hyL._SX679_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/51mWHXY8hyL._SX679_.jpg",
    title: {
      shortTitle: "Sony PS5",
      longTitle: "Sony PS5 PlayStation Console",
    },
    price: {
      mrp: 54990,
      cost: 47490,
      discount: "14%",
    },
    description:
      "Maximize your play sessions with near instant load times for installed PS5 games. The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible. Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to - life shadows and reflections in supported PS5 games. Play your favorite PS5 games on your stunning 4K TV. Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.",
    discount: "Upto 14% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product13",
    url: "https://m.media-amazon.com/images/I/71k3gOik46L._SX679_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/71k3gOik46L._SX679_.jpg",
    title: {
      shortTitle: "iQOO Z7s 5G",
      longTitle:
        "iQOO Z7s 5G by vivo (Norway Blue, 8GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G 6nm Processor | 64 MP OIS Ultra Stable Camera | 44WFlashCharge",
    },
    price: {
      mrp: 24999,
      cost: 18999,
      discount: "24%",
    },
    description:
      "Snapdragon 695 5G Mobile Processor with a 6nm energy efficient process which will consume less power and enhance the battery life 6.38 inches FHD+ AMOLED display, 1300 nits peak local brightness, 90 Hz refresh rate, Schott Xensation UP glass protection, IP54 rated 64MP OIS Ultra Stable Camera; 2MP Bokeh camera; Front(Selfie) Camera: 16MP Camera Features: Ultra Stabilization video recording, Micro Movie Mode, Dual View Video, Night Mode, Portrait mode, Double Exposure, Panorama Mode, Pro mode, 1080p video at 60 fps",
    discount: "Upto 24% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product10",
    url: "https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61VbKHdE0rL._SX569_.jpg",
    title: {
      shortTitle: "iQOO Z6 Lite 5G",
      longTitle:
        "iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage) with Charger | World's First Snapdragon 4 Gen 1 | Best in -Segment 120Hz Refresh Rate | Travel Adaptor Included in The Box",
    },
    price: {
      mrp: 19999,
      cost: 13999,
      discount: "30%",
    },
    description:
      "World's First Snapdragon 4 Gen 1 Processor, that allows you to level up your performance with confidence through its efficient 6nm Process. Best In- Segment 120Hz Screen Refresh Rate: Which comes with lagfree & nimble scrolling.The FHD + display lets you enjoy to the fullest with every game you play and every content you watch with its crisp detailing of colours.5000mAh Battery: Keeps iQOO Z6 Lite 5G to a longer usage, for a more enjoyable gaming and video experience, which offers Music Playback Time of 127 Hours, Social Media of 21.6 hours, OTT Streaming of 14.5 hours and Gaming of 8.3 hours.",
    discount: "Upto 30% Off",
    tagline: "Grab Now",
  },
  {
    id: "product12",
    url: "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
    title: {
      shortTitle: "OnePlus Nord CE 3 Lite 5G",
      longTitle:
        "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
    },
    price: {
      mrp: 26999,
      cost: 19999,
      discount: "30%",
    },
    description:
      "Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Rear Camera Mode: Hi - res 108MP mode, 3x Lossles Zoom, Photo, Video, Nightscape, Expert, Panoramic, Portrait, Macro, Time- lapse, Slow - motion, Long exposure, Dual - view video, Text Scanner, 1080p / 720p@30fps, Video zoom: 1080P @30fps, 720P @30fps, Slow motion: 720P @120fps, Time - Lapse: 1080P @30fps, Steady Video EIS support Display: 6.72 Inches; 120 Hz Adaptive refresh rate; FHD + (1080x2400), Colors: 16.7 Million colors, 391 ppi, Aspect Ratio: 20: 9, Brightness: 550 nits(typical), 680 nits(HBM) ",
    discount: "Upto 30% Off",
    tagline: "Grab Now",
  },
  {
    id: "product14",
    url: "https://m.media-amazon.com/images/I/61hiiYPHWvL._SY450_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61hiiYPHWvL._SY450_.jpg",
    title: {
      shortTitle: "Keychron K2 Mechanical Keyboard",
      longTitle:
        "Keychron K2 - Version 2 - Hot-Swappable - RED Switch | Wireless Bluetooth/USB Wired Mechanical Keyboard, Compact 84 Keys RGB LED Backlit, N-Key Rollover",
    },
    price: {
      mrp: 31885,
      cost:19999,
      discount: "39%",
    },
    description:
      "WIRELESS & WIRED MODES : Connects with up to 3 devices via Bluetooth and switch among them easily. DEDICATED TYPING EXPERIENCE: With a lifespan of 50 million keystroke we want to make sure that you experience the same feedback for every keystroke. LARGEST BATTERY: The K2 can last up to 240 hours typing(backlight off) with a 4000 mAh big battery. SUITABLE FOR ALL DEVICES: Compatible with all operating systems from Mac to Android to Windows.K2 is one of the few mechanical keyboard featuring Mac layout media keys.It allows you to use all the same media keys as conventional macOS.Every K2 keyboard comes with 3 specific keycaps for Mac and Windows, respectively. ",
    discount: "Upto 39% Off",
    tagline: "Grab Now",
  },
  {
    id: "product15",
    url: "https://m.media-amazon.com/images/I/61ni3t1ryQL._SY450_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61ni3t1ryQL._SY450_.jpg",
    title: {
      shortTitle: "Logitech MX Master 3S Mouse",
      longTitle:
        "Logitech MX Master 3S - Wireless Performance Mouse with Ultra-Fast Scrolling, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome-Graphite",
    },
    price: {
      mrp: 12999,
      cost: 9999,
      discount: "14%",
    },
    description:
      "Any-surface tracking - now 8K DPI: Use MX Master 3S cordless computer mouse to work on any surface - even glass (1) - with the upgraded 8000 DPI sensor with customizable sensitivity Introducing quiet clicks: MX Master 3S Bluetooth mouse introduces Quiet Clicks - offering the same satisfying feel but with 90 % less click noise(2) Magspeed scrolling: A computer mouse with remarkable speed, precision, and near silence - MagSpeed scrolling is 90 % faster(3), 87 % more precise(4), and ultra quiet ",
    discount: "Upto 14% Off",
    tagline: "Grab Now",
  },
  {
    id: "product16",
    url: "https://m.media-amazon.com/images/I/61cT7BlFYcL._UY625_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61cT7BlFYcL._UY625_.jpg",
    title: {
      shortTitle: "Bersache Sports Shoes for Men",
      longTitle:
        "Bersache Sports Shoes for Men | Latest Stylish Sports Shoes for Men | Lace-Up Lightweight (Light Grey) Shoes for Running",
    },
    price: {
      mrp: 4999,
      cost: 1199,
      discount: "76%",
    },
    description:
      "Sole: Thermoplastic Elastomers Closure: Lace - Up Fit Type: Regular Shoe Width: Medium 👟 Greater Features: Modern, breathable sports shoes that are made to fit you comfortably are ideal for all seasons—winter, summer, and rainy. 👟​ Multiple uses: The best sports shoes for men can be worn for everyday activities, the gym, running, jogging, walking, dancing, and even as party shoes. 👟 Key Elements: Beautiful Presentation, Ideal Gift Options",
    discount: "Upto 76% Off",
    tagline: "Grab Now",
  },
  {
    id: "product17",
    url: "https://m.media-amazon.com/images/I/612aHH1kCuL._UX679_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/612aHH1kCuL._UX679_.jpg",
    title: {
      shortTitle: "Denim Shirt",
      longTitle: "Pepe Jeans Men's Hank Long Sleeves Denim Shirt",
    },
    price: {
      mrp: 2599,
      cost: 699,
      discount: "80%",
    },
    description:
      "Born in 1973 on the streets of Portobello, worn in the world today. As a denim pioneer, we have consistently reinvented the definition of denim to keep up with the trends. Pepe Jeans London gives you the foundations to exude self-confidence, uniqueness and authenticity. Pepe Jeans London was launched in India in 1989. Looking back, over the years the brand has flourished and continues to expand throughout the country, in sync with its global identity.Pepe Jeans showcases the most comprehensive and trendiest collection of denims, athleisure and casual wear for adult and kids",
    discount: "Upto 80% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product18",
    url: "https://m.media-amazon.com/images/I/81rI+ymzaXL._UY741_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/81rI+ymzaXL._UY741_.jpg",
    title: {
      shortTitle: " Women's Silk Saree",
      longTitle: "Nivah Fashion Women's Silk Embroidery Saree",
    },
    price: {
      mrp: 9999,
      cost: 1799,
      discount: "90%",
    },
    description:
      "Nivah Fashion Embroidery Saree for Women. This beautiful Sari design using Heavy Embroidery with Stone Work, Half Half Saree. Ethnic Wear Traditional Saree made from Silk fabric and unstitched blouse piece Dupion Silk fabric which is similar to the shade and design of the saree. Women can wear this Embroidery Saree for wedding wear, Marriage functions, festival occasion. Note: There might be little shade variation between actual product and image shown on the screen due to photography effect.",
    discount: "Upto 90% Off",
    tagline: "Deal of the Day",
  },
];

module.exports = products;
