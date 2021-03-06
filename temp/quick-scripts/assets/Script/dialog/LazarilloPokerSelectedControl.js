(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/dialog/LazarilloPokerSelectedControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bedbcfZI7lNw6c1hqe9AkLz', 'LazarilloPokerSelectedControl', __filename);
// Script/dialog/LazarilloPokerSelectedControl.js

"use strict";

var LazarilloCardListControl = require("LazarilloCardListControl");
cc.Class({
    extends: cc.Component,

    properties: {
        nodeGrad: {
            default: null,
            type: cc.Node
        },
        nodeLayout: {
            default: null,
            type: cc.Node
        },
        spBg: {
            default: null,
            type: cc.Sprite
        },
        cardList: {
            default: null,
            type: cc.Prefab
        }
    },
    start: function start() {
        // this.spBg.node.width = 1000;
        // this.spBg.node.height = 20;
        // this.nodeGrad.x = 0;
        // this.nodeGrad.y = -20;
        // this.show();
    },
    show: function show(cardlist, click) {
        console.log("--------cardlist:", cardlist);
        this.click = click;

        var _cardlist = cardlist;

        // var _cardlist = [
        //     ["42", "32","22", "12", "01","00", "4b", "4a", "49", "39", "48", "28", "18", "25", "15", "14", "43", "33", "23", "13"],
        //     ["42", "32","22", "12", "01","00", "4b", "4a", "49", "39", "48", "28", "18", "25", "15", "14", "43", "33", "23", "13"],
        //     ["26", "16", "14", "43"],
        //     ["27", "17", "14", "43"],
        //     ["28", "18", "14", "43"],
        //     ["27", "17", "14", "43"],
        //     ["28", "18", "14", "43"],
        //     ["27", "17", "14", "43"],
        //     ["28", "18", "14", "43"],
        //     ["29", "19", "14", "43"]
        // ];
        this.nodeGrad.y = -20 + (Math.ceil(_cardlist.length / 2) - 1) * 100;
        this.spBg.node.height = 20 + Math.ceil(_cardlist.length / 2) * 100;
        this.nodeLayout.height = 50 + Math.ceil(_cardlist.length / 2) * 100;
        for (var i = 0; i < _cardlist.length; i++) {
            var cardListItem = cc.instantiate(this.cardList);
            cardListItem.parent = this.nodeGrad;
            var ItemControl = cardListItem.getComponent(LazarilloCardListControl);
            ItemControl.show(_cardlist[i], i, this);
        }
    },
    closeClick: function closeClick() {
        console.log("cardlist click");
        if (this.click) {
            this.click();
        }
        if (this.node) this.node.destroy();
        cc.vv.audioMgr.playSFX("SpecOk");
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
        //# sourceMappingURL=LazarilloPokerSelectedControl.js.map
        