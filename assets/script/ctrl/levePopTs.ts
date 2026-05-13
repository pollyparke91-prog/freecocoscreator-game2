import { _decorator, Component, director, Label, Node, tween, v3 } from 'cc';
import { gameConfig } from '../data/gameConfig';
import { emits, local } from '../data/enume';
import { loadPool } from '../getRes/loadPool';
import { save } from '../unitls/tools';
const { ccclass, property } = _decorator;

@ccclass('levePopTs')
export class levePopTs extends Component {
    @property(Label) level: Label = null
    @property(Label) mubiao: Label = null
    /**
     * 开始游戏及下一关分数
     */
    protected onEnable(): void {
        // 提示文字
        this.level.string = '关卡' + ' ' + gameConfig.level
        this.mubiao.string = '目标：' + ' ' + gameConfig.needScore
        // 文字动画
        tween(this.node).to(0.5, { position: v3(0, 0, 0) }).delay(1.2).to(0.5, { position: v3(-700, 0, 0) }).call(() => {
            director.emit(emits.initItem)
            loadPool.ins.huiShouNode(this.node)
        }).start()
    }

}


