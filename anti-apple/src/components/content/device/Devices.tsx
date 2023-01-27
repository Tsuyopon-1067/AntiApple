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
  resolution: string;ß
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
  "/pic/pixel6a.jpg",
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
  "Googleから発売されたミドルレンジスマホです。他社ミドルレンジに比べ独自チップにより処理性能が高く、ゲームプレイなどにも使いやすい性能があります。セキュリティアップデートが毎月、かつ5年間利用できるので長く安心して使いたい人にもおすすめです。カメラ性能も高く、写真をよく撮る方におすすめです。ワイヤレス充電がない点など、細かい部分ではコストカットが見られるため気になる方は上位モデルのPixel 7/7 Proを選ぶのがおすすめです。",
  "Googleストア https://store.google.com/jp/product/pixel_6a_specs?hl=ja",
  1
);
export const Pixel7 = new DeviceParameter(
  "Pixel 7",
  "Google",
  "/pic/pixel7.jpg",
  "155.6mm",
  "73.2mm",
  "8.97m",
  "197g",
  6.3,
  "1080x2400",
  "Google Tensor G2",
  75,
  "USB Type-C® 3.2 Gen 2",
  "なし",
  82500,
  "Googleストア",
  "Googleのハイエンドスマホです。他社ハイエンドに比べるとベンチマークスコア自体は劣るもの他独自チップによりAI性能が高く、消しゴムマジックやボケ補正などの独自カメラ機能が強みです。もともとのカメラ性能も高く、写真をよく撮る方におすすめです。（ただし望遠レンズはついていないので望遠写真が撮りたい人は上位モデルのPixel 7 Proがおすすめです。）セキュリティアップデートが毎月、かつ5年間利用できるので長く安心して使いたい人にも向いています。この高性能ながら8万円台というコスパの良さも魅力です。",
  "Googleストア https://store.google.com/jp/product/pixel_7_specs?hl=ja",
  2
);
export const Pixel7Pro = new DeviceParameter(
  "Pixel 7 Pro",
  "Google",
  "/pic/pixel7pro.jpg",
  "162.9mm",
  "76.6mm",
  "8.9mm",
  "212g",
  6.7,
  "1440x3120",
  "Google Tensor G2",
  80,
  "USB Type-C® 3.2 Gen 2",
  "なし",
  124300,
  "Googleストア",
  "Googleのフラッグシップスマホです。他社フラッグシップに比べるとベンチマークスコア自体は劣るもの他独自チップによりAI性能が高く、消しゴムマジックやボケ補正などの独自カメラ機能が強みです。もともとのカメラ性能も高く、写真をよく撮る方におすすめです。超広角、広角、望遠すべてスマホ史上最強レベルのものがついています。セキュリティアップデートが毎月、かつ5年間利用できるので長く安心して使いたい人にも向いています。価格は12万円と少し高いですが、高いUXを求める人におすすめのスマホです。",
  "Googleストア https://store.google.com/jp/product/pixel_7_pro_specs?hl=ja",
  6
);

export const Xiaomi12TPro = new DeviceParameter(
  "Xiaomi 12T Pro",
  "Xiaomi",
  "/pic/Xiaomi12TPro.jpg",
  "163mm",
  "76mm",
  "8.8mm",
  "205g",
  6.7,
  "2712x1220",
  "Qualcomm® Snapdragon™ 8+ Gen1",
  102,
  "USB Type-C 2.0",
  "なし",
  109800,
  "Xiaomiオンラインストア、家電量販店、一部の格安SIM事業者",
  "Xiaomiのハイエンドスマホです。Androidスマホ最高レベルの処理性能の高さと充電速度の速さが最大のアピールポイントで、特に充電速度は付属の充電器を使用すれば最大120Wで電力が供給され19分で満充電に到達するレベルです。また高い性能をしっかりと活かすために強力な冷却機構を備えています。カメラは2億画素、1/1.22型センサーをアピールしていますが、ソフトウェア処理はそれほど良くないため実際の画質はPixel 7など他のハイエンドに比べると特段綺麗なわけではありません。また、コストカットのためかハイエンドにもかかわらずUSB-C端子がUSB 2.0準拠で転送速度が遅い点、ワイヤレス充電や防水防塵がない点などの欠点はあります。価格は定価だと11万円近いですが、格安SIM業者によってはキャンペーンなどで安く買えたり、10万円を切る価格に設定されているなど処理性能の高さに対するコスパの良さが魅力です。カメラ性能や細かい機能より高い処理性能をできるだけ安い価格で求める方向けのスマホです。",
  "Xiaomiオンラインストア https://www.mi.com/jp/product/xiaomi-12t-pro/?skupanel=1",
  7
);
export const Redminote11 = new DeviceParameter(
  "Redmi note 11",
  "Xiaomi",
  "/pic/Redminote11.jpg",
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
  "Xiaomiオンラインストア、家電量販店、一部の格安SIM事業者",
  "Xiaomiのエントリースマホです。エントリーモデルながらコントラストや発色などで液晶に勝る有機ELディスプレイを搭載しています。安価ながら33W急速充電に対応し、朝充電を忘れたことに気づいた時にも安心です。販路や格安SIM業者によってはキャンペーンで安くなっていることもあり、安価なスマホを求めている方におすすめです。残念ながら5G通信には非対応のため、5Gを用いた高速通信をしたい方にはおすすめしません。また、NFCセンサーも搭載していないので、運転免許証やマイナンバーカードの読み取りもできません。より高機能を求める方はもう少し予算を上げて上位モデルのRedmi note 11 Pro 5Gやmotorola moto g52jなどがおすすめです。",
  "Xiaomiオンラインストア https://www.mi.com/jp/product/redmi-note-11/specs?skupanel=1",
  10
);
export const iPhoneSE = new DeviceParameter(
  "iPhone SE(第3世代)",
  "Apple",
  "/pic/iphoneSE.jpg",
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
  "Appleストア、家電量販店、一部の格安SIM事業者",
  "iPhoneの最廉価グレードです。現在販売されているiPhoneの中では唯一Touch IDが使用可能で、指紋認証にこだわる方におすすめの端末です。ベンチマークスコアも高くiPhoneならではの長期システムアップデートサポートがあるため長く余裕を持って使える性能があります。ただし画面比率が16:9と縦に小さく、サイズも4.7インチと小さいうえバッテリー容量も少なく、さらにはカメラもナイトモードが搭載されていないなど機能面で劣るため、ゲームをプレイしたり動画を見たりする機会が多い方、写真・動画撮影が多い方には価格が多少高くなっても他のiPhoneがおすすめです。具体的には、縦幅と横幅が近く、画面がさらに大きいiPhone 13 miniなどがおすすめです。",
  "Apple https://www.apple.com/jp/iphone/",
  9
);
export const iPhone14Pro = new DeviceParameter(
  "iPhone 14 Pro",
  "Apple",
  "/pic/iphone14Pro.jpg",
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
  "iPhoneの上位モデルです。これさえ買えば確実に失敗しない、といえる一台で、特に筐体の高級感やディスプレイの性能などはどれをとっても満足すること間違いなしです。AppleのSoCは長時間負荷をかけても性能が落ち込みにくく、ゲームプレイを楽しみたい人にもよいでしょう。値段は非常に高いですが、その分スペックも高く、iPhoneならではの長期システムアップデートサポートがあるため長く安心して使えます。難点はステンレス筐体を採用しているためサイズの割に重量が重いことと動画撮影以外のカメラ性能はPixel 7 ProなどのAndroidハイエンドのほうが優れている点です。",
  "Apple https://www.apple.com/jp/iphone/",
  4
);
export const AQUOSsense7 = new DeviceParameter(
  "AQUOS sense7",
  "SHARP",
  "/pic/sense7.jpg",
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
  "一部の格安SIM事業者、家電量販店",
  "AQUOSのミドルレンジモデルです。米国国防総省の調達基準、通称MIL規格に対応した耐衝撃性能、IP68の防水防塵など耐久性に優れたモデルです。省電力なSoCのSnapdragon 695 5Gと省エネディスプレイで抜群のバッテリー持ちを誇ります。今までのAQUOS senseシリーズはカメラ性能がイマイチな印象がありましたが、sense7では1/1.55インチの大型センサーとブラッシュアップされたソフトウェア処理で改善されています。ただし、同じような価格帯でも画像処理性能が段違いのPixel 6aなどには劣ります。また、Snapdragon 695 5Gは仕様上の制限で4K動画撮影に非対応のため、動画撮影性能を重視する方にはおすすめしません。目立った特徴はないもののゲームなどはせず、安定感のあるスマートフォンを求めている方におすすめです。動画撮影やゲームなど高い負荷がかかる作業をする方は、この価格帯であればPixel 6aがおすすめです。格安SIM事業者によっては安く購入できるキャンペーンをやっている場合があるので、購入を検討している方は要チェックです。",
  "SHARP https://jp.sharp/products/aquos-sense7/d/",
  3
);
export const motog52j = new DeviceParameter(
  "moto g52j",
  "motorola",
  "/pic/motog52j.jpg",
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
  "motorola公式オンラインサイト, 一部の格安SIM事業者、家電量販店",
  "motorola motoシリーズのミドルレンジスマホです。motorolaのスマホでは初めておサイフケータイ、IP68等級の防水防塵を搭載したため、モバイルSuicaやQUICPayなどの電子マネーを利用する方や。今まで防水防塵のあったスマホを利用していた方にもおすすめです。また画面サイズが6.8インチとかなり大きくイヤホンジャックも残っているため。電子書籍や漫画、動画などのコンテンツを視聴する機会が多い方にもおすすめです。一部の格安SIM事業者では安く購入できる場合があるので、おサイフケータイや防水防塵のついたスマホをできるだけ安く購入したい方は要チェックです。",
  "motorola https://store.motorola.co.jp/item/MOTO_G52J_5G.html",
  4
);
export const iPhone13mini = new DeviceParameter(
  "iPhone 13 mini",
  "Apple",
  "/pic/iphone13mini.jpg",
  "131.5mm",
  "64.2mm",
  "7.65mm",
  "140g",
  5.4,
  "2340x1080",
  "Apple A15 Bionic",
  83,
  "Lightningコネクタ",
  "なし",
  92800,
  "Appleストア、家電量販店、一部の格安SIM事業者",
  "小型モデルのiPhone 13です。小さい割にバッテリー持ちと総合的な性能が高く、サイズは小さいものの高機能なスマホが欲しい方におすすめです。小型モデルが欲しい方はまず最初に検討すると良いモデルでしょう。ベンチマークスコアも高くiPhoneならではの長期システムアップデートサポートがあるため長く余裕を持って使える性能があります。ポップかつ高級感のある6色のカラーから選べるのでファッション感覚で選べます。ただしサイズは今時にしてはかなり小さいので、購入前に一度実機を触ってみるのをおすすめします。",
  "Apple https://www.apple.com/jp/iphone/",
  7
);
