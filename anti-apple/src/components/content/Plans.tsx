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
    name: string;
    volume: number;
    price: number;
    constructor(name: string, volume: number, price: number) {
        this.name = name;
        this.volume = volume;
        this.price = price;
    }
}

class PlansClass {
    list: Carrier[] = new Array();
    // プランを名前選択可能にする
    ahamo: Carrier;
    ocn: Carrier;
    // プランのインデックス選択も可能にする
    ahamoIndex: number = 0;
    ocnIndex: number = 1;

    constructor() {
        // ここにキャリア情報を書いていく
        // ahamo
        let ahamoPlan :Plan[][] = this.createArray();
        ahamoPlan[0] = new Array();
        ahamoPlan[0].push(new Plan("ahamo20GB", 20, 2970));
        ahamoPlan[0].push(new Plan("ahamo大盛り", 100, 4950));
        this.ahamo = new Carrier("ahamo", ahamoPlan);

        // OCN
        let ocnPlan :Plan[][] = this.createArray();
        // OCN:通常プラン
        ocnPlan[0] = new Array();
        ocnPlan[0].push(new Plan("500MB", 0.5, 550));
        ocnPlan[0].push(new Plan("1GB", 1, 770));
        ocnPlan[0].push(new Plan("3GB", 3, 990));
        ocnPlan[0].push(new Plan("6GB", 6, 1320));
        ocnPlan[0].push(new Plan("10GB", 10, 1760));
        this.ocn = new Carrier("OCNモバイル", ocnPlan);

        this.list[this.ahamoIndex] = this.ahamo;
        this.list[this.ocnIndex] = this.ocn;
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
    getSelectedPlan(carrier: number, volume: number, option: number): Plan {
        if (this.list[carrier].plan.length <= option) {
            return new Plan("", -1, -1); // オプション指定が不正だと該当プランなしとする
        }
        let tmp: Plan[] = this.list[carrier].plan[option]; // 指定キャリア・オプション
        let idx = -1; // 該当プランのインデックス
        for (let i = 0; i < tmp.length; i++){
            // 指定容量以上
            if (tmp[i].volume >= volume) {
                idx = i;
                break;
            }
        }
        if (idx == -1) {
            return new Plan("", -1, -1); // 該当プランなし
        }
        return this.list[carrier].plan[option][idx];
    }

    // インデックスに対応するキャリア名を返す
    getCarrierName(idx: number): string {
        return this.list[idx].carrierName;
    }
}

export const Plans = new PlansClass;