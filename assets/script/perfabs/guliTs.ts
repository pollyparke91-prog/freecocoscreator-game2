import { _decorator, Component, Node, tween, Vec3 } from 'cc';
import { loadPool } from '../getRes/loadPool';
const { ccclass, property } = _decorator;

@ccclass('guliTs')
export class guliTs extends Component {
    protected onEnable(): void {
        this.init()
    }

    init() {
        tween(this.node).to(0.1, { scale: new Vec3(1, 1, 1) }).delay(0.8).call(() => {
            loadPool.ins.huiShouNode(this.node)
        }).start()
    }
}


