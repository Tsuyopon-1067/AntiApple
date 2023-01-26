import pixel6aImg from "./pic/pixel6a.png";
import pixel7Img from "./pic/pixel7.png";
import pixel7proImg from "./pic/pixel7pro.png";
import sense7Img from "./pic/sense7.png";
import motog52jImg from "./pic/motog52j.png";
import iphone13miniImg from "./pic/iphone13mini.png";
import iphone14ProImg from "./pic/iphone14Pro.png";
import iphoneSEImg from "./pic/iphoneSE.png";
import Xiaomi12TProImg from "./pic/Xiaomi12TPro.png";
import Redninote11Img from "./pic/Redminote11.png";

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
  index: number;
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
    source: string,
    index: number
  ) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.img = img;
    this.height = height;
    this.width = width;
    this.thickness = thickness;
    this.weight = weight;
    this.displaySize = displaySize;
    this.resolution = resolution;
    this.soc = soc;
    this.antutu = antutu;
    this.usb = usb;
    this.earphone = earphone;
    this.price = price;
    this.market = market;
    this.note = note;
    this.source = source;
    this.index = index;
  }
};
export const Pixel6a = new DeviceParameter(
  "Pixel 6a",
  "Google",
  pixel6aImg,
  "152.2mm",
  "71.8mm",
  "8.9mm",
  "178g",
  6.1,
  "1080x2400",
  "Google Tensor",
  68,
  "USB Type-C® 3.1 Gen 1",
  "なし",
  53900,
  "Googleストア",
  "Googleから発売されたミドルレンジスマホです。他社ミドルレンジに比べ独自チップにより処理性能が高く、ゲームプレイなどにも使いやすい性能があります。カメラ性能も高く、写真をよく撮る方におすすめです。ワイヤレス充電がない点など、細かい部分ではコストカットが見られるため気になる方は上位モデルのPixel 7/7 Proを選ぶのがおすすめです。",
  "Googleストア https://store.google.com/jp/product/pixel_6a_specs?hl=ja",
  1
);
export const Pixel7 = new DeviceParameter(
  "Pixel 7",
  "Google",
  pixel7Img,
  "152.2mm",
  "71.8mm",
  "8.9mm",
  "178g",
  6.3,
  "1080x2400",
  "Google Tensor G2",
  75,
  "USB Type-C® 3.1 Gen 1",
  "なし",
  82500,
  "Googleストア",
  "Googleから発売されたミドルレンジスマホです。他社ミドルレンジに比べ独自チップにより処理性能が高く、ゲームプレイなどにも使いやすい性能があります。カメラ性能も高く、写真をよく撮る方におすすめです。ワイヤレス充電がない点など、細かい部分ではコストカットが見られるため気になる方は上位モデルのPixel 7/7 Proを選ぶのがおすすめです。",
  "Googleストア https://store.google.com/jp/product/pixel_7_specs?hl=ja",
  3
);
export const Pixel7Pro = new DeviceParameter(
  "Pixel 7 Pro",
  "Google",
  pixel7proImg,
  "152.2mm",
  "71.8mm",
  "8.9mm",
  "178g",
  6.7,
  "1080x2400",
  "Google Tensor G2",
  80,
  "USB Type-C® 3.1 Gen 1",
  "なし",
  124300,
  "Googleストア",
  "Googleから発売されたミドルレンジスマホです。他社ミドルレンジに比べ独自チップにより処理性能が高く、ゲームプレイなどにも使いやすい性能があります。カメラ性能も高く、写真をよく撮る方におすすめです。ワイヤレス充電がない点など、細かい部分ではコストカットが見られるため気になる方は上位モデルのPixel 7/7 Proを選ぶのがおすすめです。",
  "Googleストア https://store.google.com/jp/product/pixel_7_pro_specs?hl=ja",
  5
);

export const Xiaomi12TPro = new DeviceParameter(
  "Xiaomi 12T Pro",
  "Xiaomi",
  Xiaomi12TProImg,
  "164.1mm",
  "76.9mm",
  "8.8mm",
  "204g",
  6.67,
  "2400x1080",
  "Qualcomm® Snapdragon™ 888",
  102,
  "USB Type-C 2.0",
  "なし",
  109800,
  "",
  "iPhoneの最廉価グレードです。現在販売されているiPhoneの中では唯一Touch IDが使用可能で、指紋認証にこだわる方におすすめの端末です。ベンチマークスコアも高く長く余裕を持って使える性能があります。ただし画面比率が16:9と縦に小さく、サイズも4.7インチと小さいうえバッテリー容量も小さいためゲームをプレイしたり動画を見たりする機会が多い方には価格が多少高くなっても他のiPhoneがおすすめです。",
  "Xiaomiオンラインストア https://www.mi.com/jp/product/xiaomi-12t-pro/?skupanel=1",
  6
);
export const Redminote11 = new DeviceParameter(
  "Redmi note 11",
  "Xiaomi",
  Redninote11Img,
  "159.87mm",
  "73.87mm",
  "8.09mm",
  "179g",
  6.43,
  "2400x1080",
  "Qualcomm® Snapdragon™ 680",
  24,
  "USB Type-C 2.0",
  "3.5 mm",
  24800,
  "",
  "iPhoneの最廉価グレードです。現在販売されているiPhoneの中では唯一Touch IDが使用可能で、指紋認証にこだわる方におすすめの端末です。ベンチマークスコアも高く長く余裕を持って使える性能があります。ただし画面比率が16:9と縦に小さく、サイズも4.7インチと小さいうえバッテリー容量も小さいためゲームをプレイしたり動画を見たりする機会が多い方には価格が多少高くなっても他のiPhoneがおすすめです。",
  "Xiaomiオンラインストア https://www.mi.com/jp/product/redmi-note-11/specs?skupanel=1",
  7
);
export const iPhoneSE = new DeviceParameter(
  "iPhone SE(第3世代)",
  "Apple",
  iphoneSEImg,
  "138.4mm",
  "67.3mm",
  "7.3mm",
  "144g",
  4.7,
  "1334x750",
  "Apple A15 Bionic",
  83,
  "Lightningコネクタ",
  "なし",
  62800,
  "Appleストア, 一部の格安SIM事業者",
  "iPhoneの最廉価グレードです。現在販売されているiPhoneの中では唯一Touch IDが使用可能で、指紋認証にこだわる方におすすめの端末です。ベンチマークスコアも高く長く余裕を持って使える性能があります。ただし画面比率が16:9と縦に小さく、サイズも4.7インチと小さいうえバッテリー容量も小さいためゲームをプレイしたり動画を見たりする機会が多い方には価格が多少高くなっても他のiPhoneがおすすめです。",
  "Apple https://www.apple.com/jp/iphone/",
  8
);
export const iPhone14Pro = new DeviceParameter(
  "iPhone 14 Pro",
  "Apple",
  iphone14ProImg,
  "147.5mm",
  "71.5mm",
  "7.85mm",
  "206g",
  6.1,
  "2556x1179",
  "Apple A16 Bionic",
  95,
  "Lightningコネクタ",
  "なし",
  149800,
  "Appleストア",
  "iPhoneの上位モデルです。これさえ買えば確実に失敗しない、といえる一台で、特に筐体の高級感やディスプレイの性能などはどれをとっても満足すること間違いなしです。値段は非常に高いですが、その分スペックも高く長く安心して使えます。難点はステンレス筐体を採用しているためサイズの割に重量が重いことと動画撮影以外のカメラ性能はPixel 7 ProなどのAndroidハイエンドのほうが優れている点です。",
  "Apple https://www.apple.com/jp/iphone/",
  10
);
export const AQUOSsense7 = new DeviceParameter(
  "AQUOS sense7",
  "SHARP",
  sense7Img,
  "152mm",
  "70mm",
  "8.0mm",
  "158g",
  6.1,
  "1080x2432",
  "Qualcomm® Snapdragon™ 695 5G",
  40,
  "USB Type-C",
  "3.5mm",
  47520,
  "",
  "iPhoneの最廉価グレードです。現在販売されているiPhoneの中では唯一Touch IDが使用可能で、指紋認証にこだわる方におすすめの端末です。ベンチマークスコアも高く長く余裕を持って使える性能があります。ただし画面比率が16:9と縦に小さく、サイズも4.7インチと小さいうえバッテリー容量も小さいためゲームをプレイしたり動画を見たりする機会が多い方には価格が多少高くなっても他のiPhoneがおすすめです。",
  "SHARP https://jp.sharp/products/aquos-sense7/d/",
  2
);
export const motog52j = new DeviceParameter(
  "moto g52j",
  "motorola",
  motog52jImg,
  "171.0mm",
  "76.8mm",
  "9.1mm",
  "206g",
  6.8,
  "2460x1080",
  "Qualcomm® Snapdragon™ 695 5G",
  38,
  "USB-Type C (USB 2.0)",
  "3.5 mm",
  39800,
  "",
  "iPhoneの最廉価グレードです。現在販売されているiPhoneの中では唯一Touch IDが使用可能で、指紋認証にこだわる方におすすめの端末です。ベンチマークスコアも高く長く余裕を持って使える性能があります。ただし画面比率が16:9と縦に小さく、サイズも4.7インチと小さいうえバッテリー容量も小さいためゲームをプレイしたり動画を見たりする機会が多い方には価格が多少高くなっても他のiPhoneがおすすめです。",
  "motorola https://store.motorola.co.jp/item/MOTO_G52J_5G.html",
  4
);
export const iPhone13mini = new DeviceParameter(
  "iPhone 13 mini",
  "Apple",
  iphone13miniImg,
  "138.4mm",
  "67.3mm",
  "7.3mm",
  "144g",
  5.4,
  "1334x750",
  "Apple A15 Bionic",
  83,
  "Lightningコネクタ",
  "なし",
  92800,
  "Appleストア, mineo",
  "iPhoneの最廉価グレードです。現在販売されているiPhoneの中では唯一Touch IDが使用可能で、指紋認証にこだわる方におすすめの端末です。ベンチマークスコアも高く長く余裕を持って使える性能があります。ただし画面比率が16:9と縦に小さく、サイズも4.7インチと小さいうえバッテリー容量も小さいためゲームをプレイしたり動画を見たりする機会が多い方には価格が多少高くなっても他のiPhoneがおすすめです。",
  "Apple https://www.apple.com/jp/iphone/",
  9
);
