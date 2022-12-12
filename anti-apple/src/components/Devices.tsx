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
        note: string
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
    'GoogleTensor',
    '-',
    '-',
    '約68万点',
    'USB Type-C® 3.1 Gen 1',
    'なし',
    'Googleから発売されたミドルレンジスマホです。'
);
export const Xiaomi11TPro = new DeviceParameter(
    'Xiaomi 11T Pro',
    '',
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1634543081.67579045.png',
    '164.1mm',
    '76.9mm',
    '8.8mm',
    '204g',
    'Qualcomm® Snapdragon™ 888',
    'Kryo 680',
    'Qualcomm® Adreno™ 660 GPU',
    '約78万点',
    'USB Type-C 2.0',
    '-',
    '',
);
export const Redminote11 = new DeviceParameter(
    'Redmi note 11',
    '',
    'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646103046.16183466.png',
    '159.87mm',
    '73.87mm',
    '8.09mm',
    '179g',
    'Qualcomm® Snapdragon™ 680',
    'Kryo 265',
    'Qualcomm® Adreno™ 610 GPU',
    '約24万点',
    'USB Type-C 2.0',
    '3.5 mm',
    '',
);
export const iPhoneSE = new DeviceParameter(
    'iPhone SE(2022)',
    'Apple',
    'https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large_2x.jpg',
    '138.4mm',
    '67.3mm',
    '7.3mm',
    '144g',
    'Apple A15',
    '-',
    '-',
    '約83万点',
    'Lightningコネクタ',
    '-',
    '',
)