!function(){"use strict";new class{constructor(){this.width=1800,this.height=1e3,this.height_offset=50,this.showinfo=0,this.index=0,Laya.init(this.width,this.height,Laya.WebGL),Laya.stage.alignV="middle",Laya.stage.alignH="center",Laya.stage.scaleMode="showall",Laya.stage.screenMode="none",Laya.stage.bgColor="#000000",this.audioElement_1=new Audio("https://sgsimg.netlify.app/段巧笑/姝丽风华/DuanQiaoXiao_HuaYi_01.mp3"),this.audioElement_2=new Audio("https://sgsimg.netlify.app/段巧笑/姝丽风华/DuanQiaoXiao_HuaYi_02.mp3"),this.audioElement_3=new Audio("https://sgsimg.netlify.app/段巧笑/姝丽风华/DuanQiaoXiao_CaiZhuang_01.mp3"),this.audioElement_4=new Audio("https://sgsimg.netlify.app/段巧笑/姝丽风华/DuanQiaoXiao_CaiZhuang_02.mp3"),this.setup()}setup(){this.path_list_init(),this.State_Interactive_on(),this.load_skin(),Laya.stage.on(Laya.Event.CLICK,this,this.onClick)}getRandomIntBetweenXAndY(i,t){return i>t&&([i,t]=[t,i]),Math.floor(Math.random()*(t-i+1))+i}onClick(i){this["audioElement_"+this.getRandomIntBetweenXAndY(1,4)].play()}onKeyDown(i){switch(i.keyCode,i.keyCode){case 39:this.next1();break;case 37:this.previous1()}}load_skin(){this.path=this.path_list[this.path_list_index],Laya.stage.destroyChildren(),this.createInteractiveRect(),this.load_beijing(),1==this.showinfo&&this.State_Info()}load_beijing(){var i=this.path.concat("beijing.skel");this.beijing_templet=new Laya.SpineTemplet(Laya.SpineVersion.v4_0),this.beijing_templet.loadAni(i),this.beijing_templet.on(Laya.Event.COMPLETE,this,this.load_daiji)}load_daiji(){var i=this.path.concat("daiji.skel");this.daiji_templet=new Laya.SpineTemplet(Laya.SpineVersion.v4_0),this.daiji_templet.loadAni(i),this.daiji_templet.on(Laya.Event.COMPLETE,this,this.playani)}playani(){this.beijing_skeleton=this.beijing_templet.buildArmature(),Laya.stage.addChild(this.beijing_skeleton),this.beijing_skeleton.pos(this.width/2,this.height/2-this.height_offset),this.beijing_skeleton.scale(1,1),this.beijing_skeleton.play(this.index,!0,!0),this.daiji_skeleton=this.daiji_templet.buildArmature(),Laya.stage.addChild(this.daiji_skeleton),this.daiji_skeleton.pos(this.width/2,this.height/2-this.height_offset),this.daiji_skeleton.scale(1,1),this.daiji_skeleton.play(this.index,!0,!0)}State_Info(){var i;(i=new Laya.Text).text=String(Laya.Browser.clientWidth),i.color="#ffffff",i.pos(0,0),Laya.stage.addChild(i),(i=new Laya.Text).text=String(Laya.Browser.clientHeight),i.color="#ffffff",i.pos(40,0),Laya.stage.addChild(i),(i=new Laya.Text).text=String(this.path_list_index),i.color="#ffffff",i.pos(80,0),Laya.stage.addChild(i)}State_Interactive_on(){Laya.stage.on(Laya.Event.KEY_DOWN,this,this.onKeyDown)}State_Interactive_off(){Laya.stage.off(Laya.Event.KEY_DOWN,this,this.onKeyDown)}createInteractiveRect(){var i=new Laya.Sprite;i.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),i.size(this.width/3,this.height/3),i.x=0,i.y=0,Laya.stage.addChild(i);var t=new Laya.Sprite;t.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),t.size(this.width/3,this.height/3),t.x=2*this.width/3,t.y=0,Laya.stage.addChild(t);var e=new Laya.Sprite;e.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),e.size(this.width/3,this.height/3),e.x=0,e.y=2*this.height/3,Laya.stage.addChild(e);var h=new Laya.Sprite;h.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),h.size(this.width/3,this.height/3),h.x=2*this.width/3,h.y=2*this.height/3,Laya.stage.addChild(h);var s=new Laya.Sprite;s.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),s.size(this.width/3,this.height/3),s.x=2*this.width/3,s.y=1*this.height/3,Laya.stage.addChild(s);var a=new Laya.Sprite;a.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),a.size(this.width/3,this.height/3),a.x=0,a.y=1*this.height/3,Laya.stage.addChild(a);var n=new Laya.Sprite;n.graphics.drawRect(0,0,this.width/3,this.height/3,"#000000"),n.size(this.width/3,this.height/3),n.x=1*this.width/3,n.y=1*this.height/3,Laya.stage.addChild(n),n.on(Laya.Event.MOUSE_DOWN,this,this.changeskin)}next1(){this.path_list_index==this.path_list.length-1?this.path_list_index=0:this.path_list_index+=1,this.showinfo=0,this.load_skin()}previous1(){0==this.path_list_index?this.path_list_index=this.path_list.length-1:this.path_list_index-=1,this.showinfo=0,this.load_skin()}next2(){this.path_list_index==this.path_list.length-1?this.path_list_index=0:this.path_list_index+=1,this.showinfo=1,this.load_skin()}previous2(){0==this.path_list_index?this.path_list_index=this.path_list.length-1:this.path_list_index-=1,this.showinfo=1,this.load_skin()}play(){this.beijing_skeleton.play(this.index,!0,!0),this.daiji_skeleton.play(this.index,!0,!0)}pause(){this.beijing_skeleton.paused(),this.daiji_skeleton.paused()}changeskin(){++this.index>=this.beijing_skeleton.getAnimNum()&&(this.index=0),this.play()}path_list_init(){this.path_list_index=0,this.path_list=["https://sgsimg.netlify.app/段巧笑/姝丽风华/"]}}}();