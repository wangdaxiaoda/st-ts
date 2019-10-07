declare const ADVANCED: {
    ZERO: 0
    ONE: 1
    TWO: 2
}

// 等级范围
const LEVEL_RANGE = {
    MAX: 50,
    MIN: 1
}

interface GeneralModel {
    name: string
    attack: number
    speed: number
    defense: number
    strategy: number
    destory: number
    originAttack: number
    originSpeed: number
    originDefense: number
    originStrategy: number
    originDestory: number
    // 攻击成长
    attackGrow: number
    speedGrow: number
    defenseGrow: number
    strategyGrow: number
    destoryGrow: number
    // 稀有度，通俗点，就是三星四星五星，目前只收录五星
    rarity: number
    // 进阶数
    advanced: 0 | 1 | 2 | 3 | 4 | 5
    // 兵种
    arms: string
    // 统率
    command: number
    // 攻击距离
    attackDistance: number
    level: number
    // 兵力
    troops: number
    // 国家
    country: string
    // 画像
    portrait: string
}

class GeneralClass implements GeneralModel {
    name: string
    attack: number
    speed: number
    defense: number
    strategy: number
    destory: number
    // 攻击成长
    attackGrow: number
    speedGrow: number
    defenseGrow: number
    strategyGrow: number
    destoryGrow: number
    originAttack: number
    originSpeed: number
    originDefense: number
    originStrategy: number
    originDestory: number
    // 稀有度，通俗点，就是三星四星五星，目前只收录五星
    rarity: number
    // 进阶数
    advanced: 0 | 1 | 2 | 3 | 4 | 5
    // 兵种
    arms: string
    // 统率
    command: number
    // 攻击距离
    attackDistance: number
    level: number
    // 兵力
    troops: number
    country: string
    // 画像
    portrait: string
    constructor(name: string, originAttack: number, originSpeed: number, originDefense: number,
        originStrategy: number, originDestory: number,
        attackGrow: number, speedGrow: number, defenseGrow: number, strategyGrow: number, destoryGrow: number,
        rarity: number, advanced: 0 | 1 | 2 | 3 | 4 | 5, arms: string, command: number, attackDistance: number,
        level: number, country: string) {
        this.name = name;
        this.originAttack = originAttack;
        this.originSpeed = originSpeed;
        this.originDefense = originDefense;
        this.originStrategy = originStrategy;
        this.originDestory = originDestory;
        this.attackGrow = attackGrow;
        this.speedGrow = speedGrow;
        this.defenseGrow = defenseGrow;
        this.strategyGrow = strategyGrow;
        this.destoryGrow = destoryGrow;
        this.rarity = rarity;
        this.advanced = advanced;
        this.arms = arms;
        this.command = command;
        this.attackDistance = attackDistance;
        this.level = level;
        this.country = country;
    }

    /**
     * 等级改变影响属性值
     */
    changeLevelAttr(): void {
        this.attack = this.originAttack + this.level * this.attackGrow;
        this.defense = this.originDefense + this.level * this.defenseGrow;
        this.attack = this.originAttack + this.level * this.attackGrow;
        this.defense = this.originDefense + this.level * this.defenseGrow;
        this.defense = this.originDefense + this.level * this.defenseGrow;
    }

    /**
     * 调整等级
     * @param type true:升级，false:降级
     * @param value 具体等级数，默认 1
     */
    changeLevel(type: boolean, value: number = 1): void {
        // 降级
        if (type === false) {
            this.level -= value;
        } else {
            // 升级
            this.level += value;
        }

        // 等级不在范围内，重新设置
        if (this.level > LEVEL_RANGE.MAX) {
            this.level = LEVEL_RANGE.MAX;
        }
        if (this.level < LEVEL_RANGE.MIN) {
            this.level = LEVEL_RANGE.MIN; 
        }

        this.changeLevelAttr();
    }
}