// ここで端末情報クラスとそれぞれの端末の情報を定義する
const DeviceParameter = class {
        name: string;
        manufacturer: string;
        img: string;
        height: string;
        width: string;
        thickness: string;
        weight: string;
        displaySize: string;
        resolution: string;
        soc: string;
        cpu: string;
        gpu: string;
        antutu: string;
        usb: string;
        earphone: string;
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
        soc: string,
        displaySize: string,
        resolution: string,
        antutu: string,
        usb: string,
        earphone: string,
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
        this.soc= soc;
        this.displaySize= displaySize;
        this.resolution= resolution;
        this.antutu= antutu;
        this.usb = usb;
        this.earphone = earphone;
        this.note = note;
        this.source = source;
    }
}
export const Pixel6a = new DeviceParameter(
    'Pixel6a',
    'Google',
    'https://lh3.googleusercontent.com/YTjc4mvSUQmALOWyOamuLMiBf4TdFWW2D94yUsnhsQXO9DQ61ZxRV060BvfKD0pn7mFeXTCS1dD_wRfN2GWGqBM-Zm6rdztVsBM=rw-e365-w500',
    '152.2mm',
    '71.8mm',
    '8.9mm',
    '178g',
    '6.1',
    '1080x2400',
    'GoogleTensor',
    '約68万点',
    'USB Type-C® 3.1 Gen 1',
    'なし',
    'Googleから発売されたミドルレンジスマホです。',
    'Googleストア https://store.google.com/jp/product/pixel_6a_specs?hl=ja',
);
export const Xiaomi11TPro = new DeviceParameter(
    'Xiaomi 11T Pro',
    '',
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1634543081.67579045.png',
    '164.1mm',
    '76.9mm',
    '8.8mm',
    '204g',
    '6.67',
    '2400x1080',
    'Qualcomm® Snapdragon™ 888',
    '約78万点',
    'USB Type-C 2.0',
    'なし',
    '',
    'Xiaomiオンラインストア https://www.mi.com/jp/product/xiaomi-11t-pro/specs?skupanel=1',
);
export const Redminote11 = new DeviceParameter(
    'Redmi note 11',
    '',
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646103046.16183466.png',
    '159.87mm',
    '73.87mm',
    '8.09mm',
    '179g',
    '6.43',
    '2400x1080',
    'Qualcomm® Snapdragon™ 680',
    '約24万点',
    'USB Type-C 2.0',
    '3.5 mm',
    '',
    'Xiaomiオンラインストア https://www.mi.com/jp/product/redmi-note-11/specs?skupanel=1',
);
export const iPhoneSE = new DeviceParameter(
    'iPhone SE(2022)',
    'Apple',
    'https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large_2x.jpg',
    '138.4mm',
    '67.3mm',
    '7.3mm',
    '144g',
    '4.7',
    '1334x750',
    'Apple A15',
    '約83万点',
    'Lightningコネクタ',
    'なし',
    '',
    'Apple https://www.apple.com/jp/iphone/',
);
export const iPhone14 = new DeviceParameter(
    'iPhone14',
    'Apple',
    'https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14__ct4sjk962pea_large_2x.jpg',
    '146.7mm',
    '71.5mm',
    '7.80mm',
    '172g',
    '6.1',
    '2532x1170',
    'Apple A15',
    '約78万点',
    'Lightningコネクタ',
    'なし',
    '',
    'Apple https://www.apple.com/jp/iphone/',
);
export const AQUOSsense7 = new DeviceParameter(
    'AQUOS sense7',
    '',
    'https://jp.sharp/k-tai/lineup/compare/images/color_sense7_copper.png',
    '152mm',
    '70mm',
    '8.0mm',
    '158g',
    '6.1',
    '1080x2432',
    'Snapdragon® 695 5G',
    '	約40万点',
    'USB Type-C',
    '3.5mm',
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
    'motorola https://store.motorola.co.jp/item/MOTO_G52J_5G.html',
);