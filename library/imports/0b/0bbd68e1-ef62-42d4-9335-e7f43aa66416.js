"use strict";
cc._RF.push(module, '0bbd6jh72JC1JM15/Q6pmQW', 'jpqNodeControl');
// Script/dialog/jpqNodeControl.js

"use strict";

var PlayerDetailModel = require("PlayerDetailModel");
// var config = require("config");
// var CardUtil = require("CardUtil");
// var PopCardUtil = require("PopCardUtil");
cc.Class({
    extends: cc.Component,

    properties: {},
    onLoad: function onLoad() {
        this.labNodes = [];
        for (var i = 17; i >= 3; i--) {
            var lab = "lab_" + i;
            var labnode = cc.find("jpqNode/" + lab).getComponent(cc.Label);;
            this.labNodes.push(labnode);
        }
    },
    start: function start() {
        this.isActive = true;
    },
    show: function show(mycards) {
        // var 
        console.log(mycards);
        var tempstr = mycards;
        if (mycards) {} else {
            return;
        }

        var cardNums = [];
        var nodeCards = PlayerDetailModel.getJpqData();
        if (nodeCards && nodeCards != "") {
            for (var i = 1; i < nodeCards.length; i += 2) {
                cardNums.push(nodeCards[i]);
            }
        }

        for (var i = 0; i < cardNums.length; i++) {
            var cardnum = parseInt(cardNums[i]);
            var myCardNum = parseInt(tempstr[tempstr.length - 1 - i]);
            var num = cardnum - myCardNum;
            if (num < 0) {
                num = 0;
            }
            this.labNodes[i].string = "" + num;
            if (num == 0) {
                this.labNodes[i].node.color = new cc.Color(113, 113, 113);
            } else {
                this.labNodes[i].node.color = new cc.Color(191, 45, 0);
            }
        }
    },
    close: function close() {
        console.log("close click");
        if (this.node) {
            this.node.destroy();
            // this.node.active = false;
            // this.isActive = false;
        }
    },
    showNode: function showNode(blt) {
        this.isActive = blt;
        this.node.active = blt;
    },
    getIsActive: function getIsActive() {
        return this.isActive;
    }
});

cc._RF.pop();