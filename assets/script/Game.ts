import { _decorator, Component, Node, input, Input } from 'cc';
const { ccclass, property } = _decorator;
import * as cc from 'cc';

@ccclass('Game')
export class Game extends Component {

    @property(Node)
    ballNode: Node = null;

    @property(Node)
    blockNode: Node = null;

    start() {

    }

    update(deltaTime: number) {
        
    }

    onLoad() {
        input.on(Input.EventType.MOUSE_DOWN, this.boost, this)
        input.on(Input.EventType.KEY_DOWN, this.boost, this);
        input.on(Input.EventType.TOUCH_START, this.boost, this)
    }

    onDestory() {
        input.off(Input.EventType.MOUSE_DOWN, this.boost, this)
        input.off(Input.EventType.KEY_DOWN, this.boost, this);
        input.off(Input.EventType.TOUCH_START, this.boost, this)
    }

    // 加速下落
    boost() {
        const ballRigidBody = this.ballNode.getComponent(cc.RigidBody2D);
        ballRigidBody.gravityScale = 5;
    }

}

