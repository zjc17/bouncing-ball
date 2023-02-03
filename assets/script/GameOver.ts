import { _decorator, Component, Node } from 'cc';
import * as cc from 'cc';
const { ccclass, property } = _decorator;

/**
 * 
 * GameOver
 * GameOver
 * zhangjc1999
 * Fri Feb 03 2023 23:43:06 GMT+0800 (中国标准时间)
 * GameOver.ts
 * GameOver
 * db://assets/script/GameOver.ts
 * https://docs.cocos.com/creator/3.6/manual/zh/
 *
 */

@ccclass('GameOver')
export class GameOver extends Component {

    @property(cc.Label)
    lastScoreLabel: cc.Label = null;

    @property(cc.Label)
    bestScoreLabel: cc.Label = null;

    @property(cc.Button)
    restartButton: cc.Button = null;

    onLoad() {
        cc.log('[onLoad] game over scene')
        this.restartButton.node.on('click', this.onRetartButtonClick, this);
        const lastScore = cc.sys.localStorage.getItem('last-score');
        const bestScore = cc.sys.localStorage.getItem('best-score');

        this.lastScoreLabel.string = lastScore;
        this.bestScoreLabel.string = `Best Score: ${bestScore}`;
    }

    start() {
        cc.director.preloadScene('game', () => {cc.log('preload [game] scene')});
    }

    update(deltaTime: number) {

    }

    onRetartButtonClick() {
        cc.director.loadScene('game');
    }
}