// ここで端末情報クラスとそれぞれの端末の情報を定義する
const DeviceParameter = class {
        name: string;
        manufacturer: string;
        img: string;
        height: string;
        width: string;
        thickness: string;
        weight: string;
        displaySize: number;
        resolution: string;
        soc: string;
        antutu: number;
        usb: string;
        earphone: string;       
        price: number;       
        market: string;       
        note: string;
        source: string;
    constructor(
        name: string,
        manufacturer: string,
        img: string,
        height: string,
        width: string,
        thickness: string,
        weight: string,
        displaySize: number,
        resolution: string,
        soc: string,
        antutu: number,
        usb: string,
        earphone: string,
        price: number,       
        market: string, 
        note: string,
        source: string
        ) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.img = img;
        this.height = height;
        this.width = width;
        this.thickness= thickness;
        this.weight = weight;
        this.displaySize= displaySize;
        this.resolution= resolution;
        this.soc= soc;
        this.antutu= antutu;
        this.usb = usb;
        this.earphone = earphone;
        this.price = price;
        this.market = market;
        this.note = note;
        this.source = source;
    }
}
export const Pixel6a = new DeviceParameter(
    'Pixel 6a',
    'Google',
    'https://lh3.googleusercontent.com/YTjc4mvSUQmALOWyOamuLMiBf4TdFWW2D94yUsnhsQXO9DQ61ZxRV060BvfKD0pn7mFeXTCS1dD_wRfN2GWGqBM-Zm6rdztVsBM=rw-e365-w500',
    '152.2mm',
    '71.8mm',
    '8.9mm',
    '178g',
    6.1,
    '1080x2400',
    'Google Tensor',
    68,
    'USB Type-C® 3.1 Gen 1',
    'なし',
    53900,
    'Googleストア',
    'Googleから発売されたミドルレンジスマホです。他社ミドルレンジに比べ独自チップにより処理性能が高く、ゲームプレイなどにも使いやすい性能があります。カメラ性能も高く、写真をよく撮る方におすすめです。ワイヤレス充電がない点など、細かい部分ではコストカットが見られるため気になる方は上位モデルのPixel 7/7 Proを選ぶのがおすすめです。',
    'Googleストア https://store.google.com/jp/product/pixel_6a_specs?hl=ja',
);
export const Pixel7 = new DeviceParameter(
    'Pixel 7',
    'Google',
    'https://lh3.googleusercontent.com/xbP10Y4IcIZhACiMQC_70U-NaUnDPTh7Bk3br6NlbHrVCb3dx9eCqT2xj8KKugI7CFpyoOG2HUP6Fq1GFRTbqt4YXLso2OmAcPA=rw-e365-w1000',
    '152.2mm',
    '71.8mm',
    '8.9mm',
    '178g',
    6.1,
    '1080x2400',
    'Google Tensor G2',
    68,
    'USB Type-C® 3.1 Gen 1',
    'なし',
    53900,
    'Googleストア',
    'Googleから発売されたミドルレンジスマホです。他社ミドルレンジに比べ独自チップにより処理性能が高く、ゲームプレイなどにも使いやすい性能があります。カメラ性能も高く、写真をよく撮る方におすすめです。ワイヤレス充電がない点など、細かい部分ではコストカットが見られるため気になる方は上位モデルのPixel 7/7 Proを選ぶのがおすすめです。',
    'Googleストア https://store.google.com/jp/product/pixel_7_specs?hl=ja',
);
export const Pixel7Pro = new DeviceParameter(
    'Pixel 7 Pro',
    'Google',
    'https://lh3.googleusercontent.com/2QKYQg6WuyEbx0Kd83N8-_lhs0Vk-GYQWCqsQjtuGejiimGFRTp-FEc9tDfMer_xoj7FaOMuAE7pg0Uj-rpWS9A2RpZiCQpZSXi3=rw-e365-w700',
    '152.2mm',
    '71.8mm',
    '8.9mm',
    '178g',
    6.1,
    '1080x2400',
    'Google Tensor G2',
    68,
    'USB Type-C® 3.1 Gen 1',
    'なし',
    53900,
    'Googleストア',
    'Googleから発売されたミドルレンジスマホです。他社ミドルレンジに比べ独自チップにより処理性能が高く、ゲームプレイなどにも使いやすい性能があります。カメラ性能も高く、写真をよく撮る方におすすめです。ワイヤレス充電がない点など、細かい部分ではコストカットが見られるため気になる方は上位モデルのPixel 7/7 Proを選ぶのがおすすめです。',
    'Googleストア https://store.google.com/jp/product/pixel_7_pro_specs?hl=ja',
);

export const Xiaomi12TPro = new DeviceParameter(
    'Xiaomi 12T Pro',
    'Xiaomi',
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1669880669.58193659.png',
    '164.1mm',
    '76.9mm',
    '8.8mm',
    '204g',
    6.67,
    '2400x1080',
    'Qualcomm® Snapdragon™ 888',
    78,
    'USB Type-C 2.0',
    'なし',
    64800,
    '',
    '',
    'Xiaomiオンラインストア https://www.mi.com/jp/product/xiaomi-12t-pro/?skupanel=1',
);
export const Redminote11 = new DeviceParameter(
    'Redmi note 11',
    'Xiaomi',
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646103046.16183466.png',
    '159.87mm',
    '73.87mm',
    '8.09mm',
    '179g',
    6.43,
    '2400x1080',
    'Qualcomm® Snapdragon™ 680',
    24,
    'USB Type-C 2.0',
    '3.5 mm',
    '',
    '',
    '',
    'Xiaomiオンラインストア https://www.mi.com/jp/product/redmi-note-11/specs?skupanel=1',
);
export const iPhoneSE = new DeviceParameter(
    'iPhone SE(第3世代)',
    'Apple',
    'https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large_2x.jpg',
    '138.4mm',
    '67.3mm',
    '7.3mm',
    '144g',
    4.7,
    '1334x750',
    'Apple A15 Bionic',
    83,
    'Lightningコネクタ',
    'なし',
    62800,
    'Appleストア, 一部の格安SIM事業者',
    'iPhoneの最廉価グレードです。現在販売されているiPhoneの中では唯一Touch IDが使用可能で、指紋認証にこだわる方におすすめの端末です。ベンチマークスコアも高く長く余裕を持って使える性能があります。ただし画面比率が16:9と縦に小さく、サイズも4.7インチと小さいうえバッテリー容量も小さいためゲームをプレイしたり動画を見たりする機会が多い方には価格が多少高くなっても他のiPhoneがおすすめです。',
    'Apple https://www.apple.com/jp/iphone/',
);
export const iPhone14Pro= new DeviceParameter(
    'iPhone 14 Pro',
    'Apple',
    'https://www.apple.com/v/iphone/home/bl/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg',
    '147.5mm',
    '71.5mm',
    '7.85mm',
    '206g',
    6.1,
    '2556x1179',
    'Apple A16 Bionic',
    95,
    'Lightningコネクタ',
    'なし',
    149800,
    'Appleストア',
    'iPhoneの上位モデルです。これさえ買えば確実に失敗しない、といえる一台で、特に筐体の高級感やディスプレイの性能などはどれをとっても満足すること間違いなしです。値段は非常に高いですが、その分スペックも高く長く安心して使えます。難点はステンレス筐体を採用しているためサイズの割に重量が重いこととカメラ性能はPixel 7 ProなどのAndroidハイエンドのほうが優れている点です。',
    'Apple https://www.apple.com/jp/iphone/',
);
export const AQUOSsense7 = new DeviceParameter(
    'AQUOS sense7',
    'SHARP',
    'https://jp.sharp/k-tai/22winter/images/link-sense7-sf-img.png',
    '152mm',
    '70mm',
    '8.0mm',
    '158g',
    6.1,
    '1080x2432',
    'Qualcomm® Snapdragon™ 695 5G',
    40,
    'USB Type-C',
    '3.5mm',
    '',
    '',
    '',
    'SHARP https://jp.sharp/products/aquos-sense7/d/',
);
export const motog52j = new DeviceParameter(
    'moto g52j',
    'motorola',
    'https://store.motorola.co.jp/client_info/MOTOROLA/itemimage/MOTO_G52J_5G/Shironeri_FRONT.png',
    '171.0mm',
    '76.8mm',
    '9.1mm',
    '206g',
    '6.8',
    '2460x1080',
    'Qualcomm® Snapdragon™ 695 5G',
    '約38万点',
    'USB-Type C (USB 2.0)',
    '3.5 mm',
    '',
    '',
    '',
    'motorola https://store.motorola.co.jp/item/MOTO_G52J_5G.html',
);
export const iPhone13mini = new DeviceParameter(
    'iPhone 13 mini',
    'Apple',
    'https://www.apple.com/v/iphone/home/bl/images/overview/compare/compare_iphone_13__fqzwhmfmroey_medium_2x.jpg',    
    '138.4mm',
    '67.3mm',
    '7.3mm',
    '144g',
    5.4,
    '1334x750',
    'Apple A15 Bionic',
    83,
    'Lightningコネクタ',
    'なし',
    92800,
    'Appleストア, mineo',
    '',
    'Apple https://www.apple.com/jp/iphone/',
);