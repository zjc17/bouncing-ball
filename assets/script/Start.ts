import { _decorator, Component, Node } from 'cc';
import * as cc from 'cc';
const { ccclass, property } = _decorator;

/**
 * 
 * Start
 * Start
 * zhangjc1999
 * Fri Feb 03 2023 23:26:32 GMT+0800 (中国标准时间)
 * Start.ts
 * Start
 * db://assets/script/Start.ts
 * https://docs.cocos.com/creator/3.6/manual/zh/
 *
 */

@ccclass('Start')
export class Start extends Component {

    @property(cc.Button)
    startButton: cc.Button = null;

    onLoad() {
        this.startButton.node.on('click', this.onStartButtonClick, this);
        this.initCocosAnalytics();
    }

    initCocosAnalytics() {
        cocosAnalytics.init({
            appID: "654050385", // 游戏ID
            version: "1.0.0",   // 游戏/应用版本号
            storeID: "H5",      // 分发渠道
            engine: "cocos",    // 游戏引擎
        });
        cocosAnalytics.enableDebug(true);
    }

    onDestory() {
        cc.log('[onDestory] start scene')
    }

    start() {

    }

    update(deltaTime: number) {

    }

    onStartButtonClick() {
        const onLaunched = () => {
            cocosAnalytics.CACustomEvent.onSuccess("start-game", {
                name: "click-start-button",
            });
        }
        cc.director.loadScene('game', onLaunched);
    }
}