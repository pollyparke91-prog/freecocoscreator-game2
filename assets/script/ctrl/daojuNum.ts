import { _decorator, CCFloat, Component, director, Label, Node } from 'cc';
import { gameConfig } from '../data/gameConfig';
import { emits } from '../data/enume';
const { ccclass, property } = _decorator;

@ccclass('daojuNum')
export class daojuNum extends Component {
    @property(Node) numNode: Node = null
    @property(Node) goumai: Node = null
    @property(Label) num: Label
    @property(CCFloat) daojuType: number;
    protected onEnable(): void {
        this.init()
        director.on(emits.daojuNum, this.init, this)
    }
    protected onDestroy(): void {
        director.off(emits.daojuNum, this.init, this)
    }
    init() {
        switch (this.daojuType) {
            case 1:
                this.initRest()
                break
            case 2:
                this.initHammer()
                break
            case 3:
                this.initChange()
                break
        }
    }
    initRest() {
        if (gameConfig.restNum > 0) {
            this.goumai.active = false
            this.numNode.active = true
            this.num.string = String(gameConfig.restNum)
        } else {
            this.goumai.active = true
            this.numNode.active = false
        }
    }
    initHammer() {
        if (gameConfig.hammerNum > 0) {
            this.goumai.active = false
            this.numNode.active = true
            this.num.string = String(gameConfig.hammerNum)
        } else {
            this.goumai.active = true
            this.numNode.active = false
        }
    }
    initChange() {
        if (gameConfig.changeNum > 0) {
            this.goumai.active = false
            this.numNode.active = true
            this.num.string = String(gameConfig.changeNum)
        } else {
            this.goumai.active = true
            this.numNode.active = false
        }
    }
}


