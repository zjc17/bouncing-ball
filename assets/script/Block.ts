import { _decorator, Component, Node } from 'cc';
import * as cc from 'cc';
const { ccclass, property } = _decorator;

/**
 * 
 * Block
 * Block
 * zhangjc1999
 * Fri Feb 03 2023 11:21:08 GMT+0800 (中国标准时间)
 * Block.ts
 * Block
 * db://assets/script/Block.ts
 * https://docs.cocos.com/creator/3.6/manual/zh/
 *
 */

@ccclass('Block')
export class Block extends Component {

    @property(cc.BoxCollider2D)
    boxCollider2D: cc.BoxCollider2D = null;
    
    @property(cc.UITransform)
    uiTransform: cc.UITransform = null;


    type: BlockType = BlockType.NORMAL;
    width: number = 100;
    height: number = 25;
    isPassed: boolean = false;

    init(options?: { type?: BlockType, width?: number }) {
        if (options?.type) this.type = options!.type;
        if (options?.width) this.width = options!.width;
        this.isPassed = false;
        this.boxCollider2D.size = cc.size(this.width, this.height);
        this.uiTransform.contentSize = cc.size(this.width, this.height);
    }

    start() {

    }

    update(deltaTime: number) {

    }
}

export enum BlockType {
    NORMAL = 0,
}