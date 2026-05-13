import { _decorator, Component, director, Node } from 'cc';
import { emits } from '../data/enume';
import { loadPool } from '../getRes/loadPool';
const { ccclass, property } = _decorator;

@ccclass('daojuTishi')
export class daojuTishi extends Component {
    protected onEnable(): void {
        director.on(emits.daojuTishi, (() => {
            loadPool.ins.huiShouNode(this.node)
        }), this)
    }
    protected onDestroy(): void {
        director.off(emits.daojuTishi, (() => {
            loadPool.ins.huiShouNode(this.node)
        }), this)
    }
}


