import { _decorator, Component, Node } from 'cc';
import * as cc from 'cc';
const { ccclass, property } = _decorator;

/**
 * 
 * Ball
 * Ball
 * zhangjc1999
 * Thu Feb 02 2023 23:29:31 GMT+0800 (中国标准时间)
 * Ball.ts
 * Ball
 * db://assets/script/Ball.ts
 * https://docs.cocos.com/creator/3.6/manual/zh/
 *
 */

// 加速下落：调整重力加速度系数

const CONTRACT_VELOCITY = cc.v2(0, -12);
const NORMAL_GRAVITY_SCALE = 1;
const BOOST_GRAVITY_SCALE = 5;

@ccclass('Ball')
export class RobotBall extends Component {

    @property(cc.Node)
    ballNode: cc.Node = null;

    @property(cc.CircleCollider2D)
    ballCollider: cc.CircleCollider2D = null;

    onLoad() {
        this.ballCollider.on(cc.Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    onDestory() {
        this.ballCollider.off(cc.Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    start() {

    }

    update(deltaTime: number) {

    }

    // 取消加速下落
    disableBoost() {
        const ballRigidBody = this.ballNode.getComponent(cc.RigidBody2D);
        ballRigidBody.gravityScale = NORMAL_GRAVITY_SCALE;
        ballRigidBody.linearVelocity = CONTRACT_VELOCITY
    }

    // 在两个碰撞体开始接触时被调用一次
    onBeginContact() {
        this.disableBoost();
        // cc.log(this.ballNode.getComponent(cc.RigidBody2D).linearVelocity = CONTRACT_VELOCITY)
    }

}