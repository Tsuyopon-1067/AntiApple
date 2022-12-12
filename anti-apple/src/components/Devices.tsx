// ここで端末情報クラスとそれぞれの端末の情報を定義する
const DeviceParameter = class {
        name: string;
        manufacturer: string;
        img: string;
        height: string;
        width: string;
        thickness: string;
        weight: string;
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
        cpu: string,
        gpu: string,
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
        this.cpu= cpu;
        this.gpu= gpu;
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