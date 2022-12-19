// 1社のプランについての情報を表すクラス
class Carrier {
    constructor(carrierName: string, plan: Plan[][]) {
        this.carrierName = carrierName;
        this.plan = plan;
    }
    carrierName: string = "CarrierName";
    plan: Plan[][];
}

// ある容量の選択肢の情報を表す
// 容量・値段を保存するだけ
export class Plan {
    planName: string;
    volume: number;
    price: number;
    note: string;
    carrierName: string;
    constructor(name: string, volume: number, price: number, note: string, carrier: string) {
        this.planName = name;
        this.volume = volume;
        this.price = price;
        this.note = note;
        this.carrierName = carrier;
    }
}

class PlansClass {
    list: Carrier[] = new Array();
    // プランを名前選択可能にする
    ahamo: Carrier;
    povo: Carrier;
    linemo: Carrier;
    uq: Carrier;
    ymobile: Carrier;
    ocn: Carrier;
    mineo: Carrier;
    iij: Carrier;
    aeon: Carrier;
    jcom: Carrier;
    jp: Carrier;
    biglobe: Carrier;
    // プランのインデックス選択も可能にする
    ahamoIndex: number = 0;
    povoIndex: number = 1;
    linemoIndex: number = 2;
    uqIndex: number = 3;
    ymobileIndex: number = 4;
    ocnIndex: number = 5;
    mineoIndex: number = 6;
    iijIndex: number = 7;
    aeonIndex: number = 8;
    jcomIndex: number = 9;
    jpIndex: number = 10;
    biglobeIndex: number = 11;

    dummyPlan = new Plan("", -1, -1, "", ""); // 例外時に返す

    constructor() {
        // ここにキャリア情報を書いていく
        // 0:ahamo
        let ahamoPlan: Plan[][] = this.createArray();
        let ahamoName: string = "ahamo";
        ahamoPlan[0] = new Array();
        ahamoPlan[0].push(new Plan("ahamo20GB", 20, 2970, "", ahamoName));
        ahamoPlan[0].push(new Plan("ahamo大盛り", 100, 4950, "", ahamoName));
        this.ahamo = new Carrier(ahamoName, ahamoPlan);

        // 1:povo
        let povoName: string = "povo";
        let povoPlan: Plan[][] = this.createArray();
        povoPlan[0] = new Array();
        povoPlan[0].push(new Plan("3GB", 3, 990, "", povoName));
        povoPlan[0].push(new Plan("20GB", 20, 2700, "", povoName));
        this.povo = new Carrier(povoName, povoPlan);

        // 2:LINEMO
        let linemoName: string = "LINEMO";
        let linemoPlan: Plan[][] = this.createArray();
        linemoPlan[0] = new Array();
        linemoPlan[0].push(new Plan("3GB", 3, 990, "", linemoName));
        linemoPlan[0].push(new Plan("20GB", 20, 2728, "", linemoName));
        this.linemo = new Carrier(linemoName, linemoPlan);

        // 3:UQ
        let uqName: string = "UQ";
        let uqPlan: Plan[][] = this.createArray();
        uqPlan[0] = new Array();
        uqPlan[0].push(new Plan("3GB", 3, 1628, "", uqName));
        uqPlan[0].push(new Plan("15GB", 15, 2728, "", uqName));
        this.uq = new Carrier(uqName, uqPlan);

        // 4:Ymobile
        let ymobileName: string = "Ymobile";
        let ymobilePlan: Plan[][] = this.createArray();
        ymobilePlan[0] = new Array();
        ymobilePlan[0].push(new Plan("S", 3, 1980, "", ymobileName));
        this.ymobile = new Carrier(ymobileName, ymobilePlan);

        // 5:OCN
        let ocnName: string = "OCNモバイル";
        let ocnPlan :Plan[][] = this.createArray();
        // OCN:通常プラン
        ocnPlan[0] = new Array();
        ocnPlan[0].push(new Plan("500MB", 0.5, 550, "", ocnName));
        ocnPlan[0].push(new Plan("1GB", 1, 770, "", ocnName));
        ocnPlan[0].push(new Plan("3GB", 3, 990, "", ocnName));
        ocnPlan[0].push(new Plan("6GB", 6, 1320, "", ocnName));
        ocnPlan[0].push(new Plan("10GB", 10, 1760, "", ocnName));
        this.ocn = new Carrier(ocnName, ocnPlan);

        // 6:mineo
        let mineoName: string = "OCNモバイル";
        let mineoPlan: Plan[][] = this.createArray();
        mineoPlan[0] = new Array();
        mineoPlan[0].push(new Plan("S", 3, 1980, "", mineoName));
        this.mineo = new Carrier(mineoName, mineoPlan);

        // 7:IIJmio
        let iijName: string = "IIJmio";
        let iijPlan: Plan[][] = this.createArray();
        iijPlan[0] = new Array();
        iijPlan[0].push(new Plan("S", 3, 1980, "", iijName));
        this.iij = new Carrier(iijName, iijPlan);

        // 8イオン:
        let aeonName: string = "イオンモバイル";
        let aeonPlan: Plan[][] = this.createArray();
        aeonPlan[0] = new Array();
        aeonPlan[0].push(new Plan("S", 3, 1980, "", aeonName));
        this.aeon = new Carrier(aeonName, aeonPlan);

        // 9:Ymobile
        let jcomName: string = "J:COM";
        let jcomPlan: Plan[][] = this.createArray();
        jcomPlan[0] = new Array();
        jcomPlan[0].push(new Plan("S", 3, 1980, "", jcomName));
        this.jcom = new Carrier(jcomName, jcomPlan);

        // 10:日本通信
        let jpName: string = "日本通信";
        let jpPlan: Plan[][] = this.createArray();
        jpPlan[0] = new Array();
        jpPlan[0].push(new Plan("S", 3, 1980, "", jpName));
        this.jp = new Carrier(jpName, jpPlan);

        // 11:biglobe
        let biglobeName: string = "biglobe";
        let biglobePlan: Plan[][] = this.createArray();
        biglobePlan[0] = new Array();
        biglobePlan[0].push(new Plan("S", 3, 1980, "", biglobeName));
        this.biglobe = new Carrier(biglobeName, biglobePlan);

        this.list[this.ahamoIndex] = this.ahamo;
        this.list[this.povoIndex] = this.povo;
        this.list[this.linemoIndex] = this.linemo;
        this.list[this.uqIndex] = this.uq;
        this.list[this.ymobileIndex] = this.ymobile;
        this.list[this.ocnIndex] = this.ocn;
        this.list[this.mineoIndex] = this.mineo;
        this.list[this.iijIndex] = this.iij;
        this.list[this.aeonIndex] = this.aeon;
        this.list[this.jcomIndex] = this.jcom;
        this.list[this.jpIndex] = this.jp;
        this.list[this.biglobeIndex] = this.biglobe;
    }

    // newされた二次元配列を返す 行の数はオプション数の最大値で設定
    createArray(): Plan[][] {
        let res: Plan[][] = new Array;
        for (let i = 0; i < 2; i++) {
            res[i] = new Array();
        }
        return res;
    }

    // スライダーで選択したプランを返す
    getSelectedPlan(carrierNumberList: number[], volume: number, option: number): Plan {
        let selectedCarrierPlans: Plan[] = new Array();
        for (let i = 0; i < carrierNumberList.length; i++) {
            let k = carrierNumberList[i]; // 指定キャリア番号
            let selectedCarrier: Carrier = this.list[k];
            if (option < selectedCarrier.plan.length) {
                if (selectedCarrier.plan[option].length != 0) {
                    selectedCarrierPlans = selectedCarrierPlans.concat(selectedCarrier.plan[option]);
                }
            }
        }
        if (selectedCarrierPlans.length <= option) {
            return this.dummyPlan; // オプション指定が不正だと該当プランなしとする
        }

        let res: Plan = new Plan("", -1, 99999, "", "");
        for (let i = 0; i < selectedCarrierPlans.length; i++){
            // 指定容量以上
            if (selectedCarrierPlans[i].volume >= volume) {
                // より安いやつが見つかった
                if (selectedCarrierPlans[i].price <= res.price) {
                    res = selectedCarrierPlans[i];
                }
            }
        }
        if (res.price == -1 || res.price == 99999) {
            return this.dummyPlan; // 該当プランなし
        }
        return res;
    }

    // インデックスに対応するキャリア名を返す
    getCarrierName(idx: number): string {
        return this.list[idx].carrierName;
    }
}

export const Plans = new PlansClass;