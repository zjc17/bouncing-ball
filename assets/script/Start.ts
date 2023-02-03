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
    }

    onDestory() {
        cc.log('[onDestory] start scene')
    }

    start() {

    }

    update(deltaTime: number) {

    }

    onStartButtonClick() {
        cc.director.loadScene('game');
    }
}