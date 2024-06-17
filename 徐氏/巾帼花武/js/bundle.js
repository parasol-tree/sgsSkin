!function(){"use strict";new class{constructor(){this.width=1800,this.height=1300,this.height_offset=100,this.num=0,this.showinfo=0,Laya.init(this.width,this.height,Laya.WebGL),Laya.stage.alignV="middle",Laya.stage.alignH="center",Laya.stage.scaleMode="showall",Laya.stage.screenMode="none",Laya.stage.bgColor="#000000",this.audioElement_1=new Audio("https://sgsimg.netlify.app/file/徐氏/巾帼花武/XuShi_FuZhu_1.mp3"),this.audioElement_2=new Audio("https://sgsimg.netlify.app/file/徐氏/巾帼花武/XuShi_FuZhu_2.mp3"),this.audioElement_3=new Audio("https://sgsimg.netlify.app/file/徐氏/巾帼花武/XuShi_WenGua_1.mp3"),this.audioElement_4=new Audio("https://sgsimg.netlify.app/file/徐氏/巾帼花武/XuShi_WenGua_2.mp3"),this.setup()}getRandomIntBetweenXAndY(t,i){return t>i&&([t,i]=[i,t]),Math.floor(Math.random()*(i-t+1))+t}setup(){this.path_list_init(),this.State_Interactive_on(),this.load_skin()}onKeyDown(t){switch(t.keyCode){case 39:this.next1();break;case 37:this.previous1()}}onClick(t){this["audioElement_"+this.getRandomIntBetweenXAndY(1,4)].play()}mouseWheel(t){switch(t.delta){case 3:this.previous1(),this.num+=1;break;case-3:this.next1(),this.num+=1}var i=new Laya.Text;i.text=String(this.num),i.color="#ffffff",i.pos(0,0),Laya.stage.addChild(i)}load_skin(){var t=this.path_list[0],i=t.concat("beijing.sk"),h=t.concat("daiji.sk");t.concat("daiji_tx.sk"),Laya.stage.destroyChildren(),this.createInteractiveRect(),this.beijing=new Laya.Skeleton,Laya.stage.addChild(this.beijing),this.beijing.pos(this.width/2,this.height/2-this.height_offset),this.beijing.load(i),this.daiji=new Laya.Skeleton,Laya.stage.addChild(this.daiji),this.daiji.pos(this.width/2,this.height/2-this.height_offset),this.daiji.load(h),1==this.showinfo&&this.State_Info()}State_Info(){var t;(t=new Laya.Text).text=String(Laya.Browser.clientWidth),t.color="#ffffff",t.pos(0,0),Laya.stage.addChild(t),(t=new Laya.Text).text=String(Laya.Browser.clientHeight),t.color="#ffffff",t.pos(40,0),Laya.stage.addChild(t),(t=new Laya.Text).text=String(this.path_list_index),t.color="#ffffff",t.pos(80,0),Laya.stage.addChild(t)}State_Interactive_on(){Laya.stage.on(Laya.Event.KEY_DOWN,this,this.onKeyDown),Laya.stage.on(Laya.Event.CLICK,this,this.onClick)}State_Interactive_off(){Laya.stage.off(Laya.Event.KEY_DOWN,this,this.onKeyDown),Laya.stage.off(Laya.Event.MOUSE_WHEEL,this,this.mouseWheel)}createInteractiveRect(){var t=new Laya.Sprite;t.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),t.size(this.width/3,this.height/3),t.x=0,t.y=0,Laya.stage.addChild(t);var i=new Laya.Sprite;i.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),i.size(this.width/3,this.height/3),i.x=2*this.width/3,i.y=0,Laya.stage.addChild(i);var h=new Laya.Sprite;h.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),h.size(this.width/3,this.height/3),h.x=0,h.y=2*this.height/3,Laya.stage.addChild(h);var s=new Laya.Sprite;s.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),s.size(this.width/3,this.height/3),s.x=2*this.width/3,s.y=2*this.height/3,Laya.stage.addChild(s);var a=new Laya.Sprite;a.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),a.size(this.width/3,this.height/3),a.x=2*this.width/3,a.y=1*this.height/3,Laya.stage.addChild(a);var e=new Laya.Sprite;e.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),e.size(this.width/3,this.height/3),e.x=0,e.y=1*this.height/3,Laya.stage.addChild(e);var n=new Laya.Sprite;n.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),n.size(this.width/3,this.height/3),n.x=1*this.width/3,n.y=1*this.height/3,Laya.stage.addChild(n),n.on(Laya.Event.MOUSE_DOWN,this,this.changeskin)}next1(){this.path_list_index==this.path_list.length-1?this.path_list_index=0:this.path_list_index+=1,this.showinfo=0,this.load_skin()}previous1(){0==this.path_list_index?this.path_list_index=this.path_list.length-1:this.path_list_index-=1,this.showinfo=0,this.load_skin()}next2(){this.path_list_index==this.path_list.length-1?this.path_list_index=0:this.path_list_index+=1,this.showinfo=1,this.load_skin()}previous2(){0==this.path_list_index?this.path_list_index=this.path_list.length-1:this.path_list_index-=1,this.showinfo=1,this.load_skin()}play(){console.log("%c [ play ]-232","font-size:13px; background:skyblue; color:#fff;"),this.beijing.play(0,!1),this.daiji.play(0,!1)}pause(){this.beijing.paused(),this.daiji.paused()}changeskin(){this.beijing.play(1,!0),this.daiji.play(1,!0)}path_list_init(){this.path_list_index=93,this.ani_index=0,this.path_list=["https://sgsimg.netlify.app/file/徐氏/巾帼花武/"]}}}();