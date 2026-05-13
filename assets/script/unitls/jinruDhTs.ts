import { _decorator, Component, Node, Size, tween, UITransform, Vec3 } from 'cc';
import { audioTool } from './audioTool';
import { musicName, perName } from '../data/enume';
import { gameConfig } from '../data/gameConfig';
import { loadPool } from '../getRes/loadPool';
const { ccclass, property } = _decorator;
//源码网站 开vpn全局模式打开 https://web3incubators.com/
//客服联系方式 https://web3incubators.com/kefu.html
@ccclass('jinruDhTs')
export class jinruDhTs extends Component {
    protected onEnable(): void {
        this.init()
    }
    init() {
        let size = this.node.getComponent(UITransform)
        tween(size).to(0.1, { contentSize: new Size(0, 0) }).to(0.5, { contentSize: new Size(1900, 1900) }).call(() => { this.jinru() }).start()
    }
    jinru() {

    }
}


