# 必要なライブラリ
## ページ遷移を実装するReact Routerのインストール
```
npm install react-router-dom@v5
```

## Chakra-UIのインストール（不要かも）
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## カルーセル用ライブラリのインストール
```
npm install slick-carousel --save
```
↑これだけでいけるかもしれない
```
npm install react-slick --save
```

## レスポンシブデザインのためのライブラリのインストール
```
npm install react-responsive
```

# クラスとかの説明
## Plans.tsx
### Carrier
キャリアの情報を格納
#### コンストラクタ
```
constructor(carrierName: string, plan: Plan[][])
```
例 ocnPlan:Plan型二次元配列
```
let ocn = new Carrier("OCNモバイル", ocnPlan);
```

#### 変数
* carrierName: string
キャリア名
* plan: Plan[][]
そのキャリアのプラン選択肢
plan[n][m]においてn:オプション番号，m:プランインデックス
オプション番号nを指定して取り出すので，配列plan[n]にはオプション番号nのときの条件で取り出せる選択肢を格納しておく
配列plan[n]にはプラン情報を容量が少ない順に格納

例 OCNの場合
plan[0]={500MB，1GB，…，10GB}
plan[1]={500MB}

##### オプション番号
0:通常（オプションなし）
1:電話かけ放題（時間制限有り）

#### 使用例
carrier:Carrierクラスのインスタンス
##### キャリア名を取得する
```
name: string = carrier.carrierName;
```
##### オプションなしで2番目に容量の少ないプランの値段を取得（Planクラスの説明も参照）
```
price: number = carrier.plan[0][1].price;
```
carrier.plan[0][1]はプラン型であることに注意

### Plan
あるキャリアの中の1つのプランについての情報（値段と容量）を格納
#### コンストラクタ
```
constructor(name: string, volume: number, price: number)
```
例 OCNのオプションなしプランリストに500MBプラン（0.5GB，550円/月）を追加
```
ocnPlan[0].push(new Plan("500MB", 0.5, 550));
```
#### 変数
* name: string
プラン名（500MB/月コースとかahamo20GBとか）
* volume: number
容量[GB]（数値のみ）
* price: number
値段[円/月]（数値のみ）
#### 使用例
plan:Planクラスのインスタンス
##### 容量を取得する
```
youryou: number = plan.volume;
```

### PlansClass
各キャリアのプラン全てを格納
これのインスタンスPlansをエクスポートする（Simulationから参照される）
#### コンストラクタ
呼べば動く（newすれば勝手に呼ばれる）
中に各キャリアの情報格納コードを記述
```
constructor()
```
#### メソッド
* getSelectedPlan(carrier: number, volume: number, option: number): Plan
    スライダーで指定されている値に適するプランを取得するのに使用する．volume以上の容量のプランを返す．
    適切なプランが見つからなかったときは名前:空字，容量:-1，値段:-1のプランを返す．
    * carrier: キャリア番号
    * volume: スライダーで指定されている容量
    * option: オプション番号
##### 使用例
キャリア番号0でオプションなし容量3GB以上で一番安いプランの値段
```
price: number = getSelectedPlan(0, 3, 0);
```

* getCarrierName(idx: number): string
    指定したインデックスに対応するキャリア名を返す
    * idx: キャリア番号

* createArray(): Plan[][]
    Plan型二次元配列を返す
    コンストラクタ内のみで使用するので気にしなくて良い