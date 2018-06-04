(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/PokerControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '00f79gpHs9Jd7BBB5drfbt3', 'PokerControl', __filename);
// Script/PokerControl.js

"use strict";

var config = require("config");
var CardUtil = require("CardUtil");

cc.Class({
    extends: cc.Component,

    properties: {
        pokerNum: {
            default: null,
            type: cc.Sprite
        },

        pokerType: {
            default: null,
            type: cc.Sprite
        },

        pokerType2: {
            default: null,
            type: cc.Sprite
        },

        pokerBg: {
            default: null,
            type: cc.Sprite
        },
        pokerLight: {
            default: null,
            type: cc.Sprite
        },

        pokerDiZhu: {
            default: null,
            type: cc.Sprite
        },

        canTouch: false,
        isTouched: false,
        cardData: {
            default: null
        },
        isTopped: false //是否被提起
    },
    //展示poker
    showPoker: function showPoker(showData) {
        var self = this;
        self.cardData = showData;
        // self.pokerTxt.string = showData.showTxt;
        var showType = showData.showType;
        self.canTouch = showData.canTouch;

        self.cardValue = CardUtil.StringToNumber(showData.showTxt);
        var numUrl = "cards/poke_" + self.cardValue;

        if (self.cardValue != 16 && self.cardValue != 17) {
            cc.loader.loadRes(numUrl, cc.SpriteFrame, function (err, spriteFrame) {
                self.pokerNum.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }

        console.log("" + showData.showTxt + ":" + self.cardValue);

        self.pokerDiZhu.enabled = false;
        self.pokerLight.enabled = false;
        self.pokerType.enabled = true;
        var imgUrl = "cards/heitao";
        if (showType == config.pokerCardType.spade) {
            imgUrl = "cards/heitao";
            self.pokerNum.node.color = new cc.Color(27, 27, 27);
        } else if (showType == config.pokerCardType.hearts) {
            imgUrl = "cards/hongxin";
            self.pokerNum.node.color = new cc.Color(246, 58, 27);
        } else if (showType == config.pokerCardType.redslice) {
            imgUrl = "cards/hongfang";
            self.pokerNum.node.color = new cc.Color(246, 58, 27);
        } else if (showType == config.pokerCardType.blackberry) {
            imgUrl = "cards/heimei";
            self.pokerNum.node.color = new cc.Color(27, 27, 27);
        } else if (showType == config.ghostCardType.bigG) {
            self.pokerType.enabled = false;
            self.pokerType2.enabled = false;
            self.pokerNum.enabled = false;
            cc.loader.loadRes("cards/joker_red", cc.SpriteFrame, function (err, spriteFrame) {
                self.pokerBg.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        } else if (showType == config.ghostCardType.smallG) {
            self.pokerType.enabled = false;
            self.pokerType2.enabled = false;
            self.pokerNum.enabled = false;
            cc.loader.loadRes("cards/joker_black", cc.SpriteFrame, function (err, spriteFrame) {
                self.pokerBg.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }
        cc.loader.loadRes(imgUrl, cc.SpriteFrame, function (err, spriteFrame) {
            self.pokerType.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            self.pokerType2.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    },
    setPokerLight: function setPokerLight(isVisible) {
        this.pokerLight.enabled = isVisible;
    },
    setChoosed: function setChoosed(isTouched) {
        this.cardData.isChoosed = isTouched;
        this.pokerLight.enabled = isTouched;
    },
    cardMove: function cardMove() {
        if (this.cardData.isChoosed && this.cardData.isTopped) {
            var move = cc.moveBy(0.2, 0, -30);
            move.easing(cc.easeIn(3));
            this.node.runAction(move);
            this.cardData.isTopped = false;
            this.cardData.isChoosed = false;
            this.pokerLight.enabled = false;
        } else if (this.cardData.isChoosed && !this.cardData.isTopped) {
            var move = cc.moveBy(0.2, 0, 30);
            move.easing(cc.easeIn(3));
            this.node.runAction(move);
            this.cardData.isTopped = true;
            this.cardData.isChoosed = false;
            this.pokerLight.enabled = false;
        }
    },
    cardMoveDown: function cardMoveDown() {
        if (this.cardData.isTopped) {
            var move = cc.moveBy(0.2, 0, -30);
            move.easing(cc.easeIn(3));
            this.node.runAction(move);
            this.cardData.isTopped = false;
            this.cardData.isChoosed = false;
            this.pokerLight.enabled = false;
        }
    },
    setCardDiZhu: function setCardDiZhu(isEnabled) {
        this.pokerDiZhu.enabled = isEnabled;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=PokerControl.js.map
        