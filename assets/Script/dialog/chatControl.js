var config = require("config");
var chatItemControl = require("chatItemControl");

cc.Class({
    extends: cc.Component,

    properties: {
        content : {
            default : null,
            type : cc.Node
        },
        chatItem : {
            default : null,
            type : cc.Prefab
        },
    },
    // onLoad () {},
    start () {
        // console.log("chat show"+config.chatContent.length);
        for(var i = 0;i < config.chatContent.length;i++){
            var chatItem = cc.instantiate(this.chatItem);
            chatItem.parent = this.content;
            var item = chatItem.getComponent(chatItemControl);
            item.show(config.chatContent[i],i+1,this);
        }
    },   
    show(click){
        this.click = click;
    },
    close(){
        console.log("chat close");
        if(this.click){
            this.click();
        }
        this.node.destroy();
    }
});