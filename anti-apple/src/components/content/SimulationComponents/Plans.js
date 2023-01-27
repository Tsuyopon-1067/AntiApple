"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plans = exports.Plan = void 0;
// 1社のプランについての情報を表すクラス
var Carrier = /** @class */ (function () {
    function Carrier(carrierName, plan) {
        this.carrierName = "CarrierName";
        this.carrierName = carrierName;
        this.plan = plan;
    }
    return Carrier;
}());
// ある容量の選択肢の情報を表す
// 容量・値段を保存するだけ
var Plan = /** @class */ (function () {
    function Plan(planName, volume, price, note, carrierName) {
        this.planName = planName;
        this.volume = volume;
        this.price = price;
        this.note = note;
        this.carrierName = carrierName;
    }
    return Plan;
}());
exports.Plan = Plan;
var PlansClass = /** @class */ (function () {
    function PlansClass() {
        this.list = new Array();
        // プランのインデックス選択も可能にする
        this.ahamoIndex = 0;
        this.povoIndex = 1;
        this.linemoIndex = 2;
        this.uqIndex = 3;
        this.ymobileIndex = 4;
        this.ocnIndex = 5;
        this.mineoIndex = 6;
        this.iijIndex = 7;
        this.aeonIndex = 8;
        this.jcomIndex = 9;
        this.jpIndex = 10;
        this.biglobeIndex = 11;
        this.dummyPlan = new Plan("", -1, -1, "", ""); // 例外時に返す
        // ここにキャリア情報を書いていく
        // 0:ahamo
        var ahamoPlan = this.createArray();
        var ahamoName = "ahamo";
        ahamoPlan[0] = new Array();
        ahamoPlan[0].push(new Plan("ahamo20GB", 20, 2970, "", ahamoName));
        ahamoPlan[0].push(new Plan("ahamo大盛り", 100, 4950, "", ahamoName));
        this.ahamo = new Carrier(ahamoName, ahamoPlan);
        // 1:povo
        var povoName = "povo";
        var povoPlan = this.createArray();
        povoPlan[0] = new Array();
        povoPlan[0].push(new Plan("3GB", 3, 990, "", povoName));
        povoPlan[0].push(new Plan("20GB", 20, 2700, "", povoName));
        this.povo = new Carrier(povoName, povoPlan);
        // 2:LINEMO
        var linemoName = "LINEMO";
        var linemoPlan = this.createArray();
        linemoPlan[0] = new Array();
        linemoPlan[0].push(new Plan("3GB", 3, 990, "", linemoName));
        linemoPlan[0].push(new Plan("20GB", 20, 2728, "", linemoName));
        this.linemo = new Carrier(linemoName, linemoPlan);
        // 3:UQ
        var uqName = "UQ";
        var uqPlan = this.createArray();
        uqPlan[0] = new Array();
        uqPlan[0].push(new Plan("3GB", 3, 1628, "", uqName));
        uqPlan[0].push(new Plan("15GB", 15, 2728, "", uqName));
        this.uq = new Carrier(uqName, uqPlan);
        // 4:Ymobile
        var ymobileName = "Ymobile";
        var ymobilePlan = this.createArray();
        ymobilePlan[0] = new Array();
        ymobilePlan[0].push(new Plan("S", 3, 1980, "", ymobileName));
        this.ymobile = new Carrier(ymobileName, ymobilePlan);
        // 5:OCN
        var ocnName = "OCNモバイル";
        var ocnPlan = this.createArray();
        // OCN:通常プラン
        ocnPlan[0] = new Array();
        ocnPlan[0].push(new Plan("500MB", 0.5, 550, "", ocnName));
        ocnPlan[0].push(new Plan("1GB", 1, 770, "", ocnName));
        ocnPlan[0].push(new Plan("3GB", 3, 990, "", ocnName));
        ocnPlan[0].push(new Plan("6GB", 6, 1320, "", ocnName));
        ocnPlan[0].push(new Plan("10GB", 10, 1760, "", ocnName));
        this.ocn = new Carrier(ocnName, ocnPlan);
        // 6:mineo
        var mineoName = "OCNモバイル";
        var mineoPlan = this.createArray();
        mineoPlan[0] = new Array();
        mineoPlan[0].push(new Plan("S", 3, 1980, "", mineoName));
        this.mineo = new Carrier(mineoName, mineoPlan);
        // 7:IIJmio
        var iijName = "IIJmio";
        var iijPlan = this.createArray();
        iijPlan[0] = new Array();
        iijPlan[0].push(new Plan("S", 3, 1980, "", iijName));
        this.iij = new Carrier(iijName, iijPlan);
        // 8イオン:
        var aeonName = "イオンモバイル";
        var aeonPlan = this.createArray();
        aeonPlan[0] = new Array();
        aeonPlan[0].push(new Plan("S", 3, 1980, "", aeonName));
        this.aeon = new Carrier(aeonName, aeonPlan);
        // 9:Ymobile
        var jcomName = "J:COM";
        var jcomPlan = this.createArray();
        jcomPlan[0] = new Array();
        jcomPlan[0].push(new Plan("S", 3, 1980, "", jcomName));
        this.jcom = new Carrier(jcomName, jcomPlan);
        // 10:日本通信
        var jpName = "日本通信";
        var jpPlan = this.createArray();
        jpPlan[0] = new Array();
        jpPlan[0].push(new Plan("S", 3, 1980, "", jpName));
        this.jp = new Carrier(jpName, jpPlan);
        // 11:biglobe
        var biglobeName = "biglobe";
        var biglobePlan = this.createArray();
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
    PlansClass.prototype.createArray = function () {
        var res = new Array;
        for (var i = 0; i < 2; i++) {
            res[i] = new Array();
        }
        return res;
    };
    // スライダーで選択したプランを返す
    PlansClass.prototype.getSelectedPlan = function (carrierNumberList, volume, option) {
        var selectedCarrierPlans = new Array();
        for (var i = 0; i < carrierNumberList.length; i++) {
            var k = carrierNumberList[i]; // 指定キャリア番号
            var selectedCarrier = this.list[k];
            if (option < selectedCarrier.plan.length) {
                if (selectedCarrier.plan[option].length != 0) {
                    selectedCarrierPlans = selectedCarrierPlans.concat(selectedCarrier.plan[option]);
                }
            }
        }
        if (selectedCarrierPlans.length <= option) {
            return this.dummyPlan; // オプション指定が不正だと該当プランなしとする
        }
        var res = new Plan("", -1, 99999, "", "");
        for (var i = 0; i < selectedCarrierPlans.length; i++) {
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
    };
    // インデックスに対応するキャリア名を返す
    PlansClass.prototype.getCarrierName = function (idx) {
        return this.list[idx].carrierName;
    };
    return PlansClass;
}());
exports.Plans = new PlansClass;
