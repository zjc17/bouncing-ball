import { _decorator, Component, Node, input, Input } from 'cc';
const { ccclass, property } = _decorator;
import * as cc from 'cc';
import { Block } from './Block';

// 砖块的X轴质点间距
const BLOCK_INTERVAL = 200;
const BLOCK_Y_POSITION = -200;

@ccclass('Game')
export class Game extends Component {

    @property(Node)
    ballNode: Node = null;

    @property(cc.Prefab)
    blockPrefeb: cc.Prefab = null;

    @property(cc.Node)
    blockSpawnerNode: Node = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Vec3)
    blockVelocity: cc.Vec3 = cc.v3(-150, 0, 0);

    // TODO 使用 cc.NodePool 重构
    blockNodePool: cc.Node[] = [];

    // 得分
    score: number = 0;

    start() {

    }

    update(deltaTime: number) {
        this.updateBlocks(deltaTime);
    }

    onLoad() {
        this.initBall();
        this.initBlock();
        input.on(Input.EventType.MOUSE_DOWN, this.boost, this)
        input.on(Input.EventType.KEY_DOWN, this.boost, this);
        input.on(Input.EventType.TOUCH_START, this.boost, this)
    }

    onDestory() {
        input.off(Input.EventType.MOUSE_DOWN, this.boost, this)
        input.off(Input.EventType.KEY_DOWN, this.boost, this);
        input.off(Input.EventType.TOUCH_START, this.boost, this)
    }

    initBall() {
        // cc.log('this.ballNode.getWorldPosition()', this.ballNode.getWorldPosition())
        this.ballNode.setWorldPosition(cc.v3(150, 640, 0))
    }

    initBlock() {
        const START_X_POSITION = this.ballNode.position.x;
        for (let i = 0; i < 4; i++) {
            const blockNode = cc.instantiate(this.blockPrefeb);
            blockNode.getComponent(Block).init({width: 100 + 20 * cc.math.randomRange(0, 3)}) 
            blockNode.setPosition(START_X_POSITION + i * BLOCK_INTERVAL, BLOCK_Y_POSITION);
            this.blockSpawnerNode.addChild(blockNode);
            this.blockNodePool.push(blockNode);
        }
    }

    updateBlocks(deltaTime: number) {

        // get max value in the array
        const GC_THRESHOLD = -300;
        this.blockNodePool.forEach((blockNode) => {
            // 移动 block
            blockNode.setPosition(blockNode.position.add(this.blockVelocity.clone().multiplyScalar(deltaTime)))
            // 到达左边时回收，并在右边重新生成
            if (blockNode.getPosition().x < GC_THRESHOLD) {
                const maxXPosition = Math.max(...this.blockNodePool.map((blockNode) => blockNode.getPosition().x));
                blockNode.setPosition(maxXPosition + BLOCK_INTERVAL, BLOCK_Y_POSITION);
                blockNode.getComponent(Block).isPassed = false;
                // cc.log('this.blockNodePool.map((blockNode) => blockNode.getPosition().x)', this.blockNodePool.map((blockNode) => blockNode.getPosition().x))
            }
            // 平板经过小球时添加得分
            if (!blockNode.getComponent(Block).isPassed && blockNode.position.x < this.ballNode.position.x) {
                blockNode.getComponent(Block).isPassed = true;
                // 增加得分
                this.score++;
                this.updateScoreLabel();
            }
        })
    }

    updateScoreLabel() {
        this.scoreLabel.string = `${this.score}`;
    }

    // 加速下落
    boost() {
        const ballRigidBody = this.ballNode.getComponent(cc.RigidBody2D);
        ballRigidBody.linearVelocity = cc.v2(0, -12);
    }

}

// https://www.bilibili.com/video/BV1TE411v7U1/?p=2&spm_id_from=333.880.my_history.page.click&vd_source=550196077122a5d40dfe7ea45c76e992
