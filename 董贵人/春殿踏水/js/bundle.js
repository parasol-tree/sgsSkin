(function () {
  'use strict';

  class SgsSkinViewerSkel {
      constructor() {
          this.width = 1800;
          this.height = 1000;
          this.height_offset = 50;
          this.showinfo = 0;
          this.index = 0;
          Laya.init(this.width, this.height, Laya["WebGL"]);
          Laya.stage.alignV = "middle";
          Laya.stage.alignH = "center";
          Laya.stage.scaleMode = "showall";
          Laya.stage.screenMode = "none";
          Laya.stage.bgColor = "#000000";
          this.audioElement_1 = new Audio("https://sgsimg.netlify.app/董贵人/春殿踏水/DongGuiRen_FengYing_01.mp3");
          this.audioElement_2 = new Audio("https://sgsimg.netlify.app/董贵人/春殿踏水/DongGuiRen_FengYing_02.mp3");
          this.audioElement_3 = new Audio("https://sgsimg.netlify.app/董贵人/春殿踏水/DongGuiRen_ShouZe_01.mp3");
          this.audioElement_4 = new Audio("https://sgsimg.netlify.app/董贵人/春殿踏水/DongGuiRen_LingFang_01.mp3");
          this.audioElement_5 = new Audio("https://sgsimg.netlify.app/董贵人/春殿踏水/DongGuiRen_LingFang_02.mp3");
          this.audioElement_6 = new Audio("https://sgsimg.netlify.app/董贵人/春殿踏水/DongGuiRen_LianZhi_01.mp3");
          this.audioElement_7 = new Audio("https://sgsimg.netlify.app/董贵人/春殿踏水/DongGuiRen_LianZhi_02.mp3");
          this.setup();
      }
      setup() {
          this.path_list_init();
          this.State_Interactive_on();
          this.load_skin();
          Laya.stage.on(Laya.Event.CLICK, this, this.onClick);
      }
      getRandomIntBetweenXAndY(x, y) {
          if (x > y) {
              [x, y] = [y, x];
          }
          return Math.floor(Math.random() * (y - x + 1)) + x;
      }
      onClick(e) {
          var number = this.getRandomIntBetweenXAndY(1, 4);
          var audioDom = this['audioElement_' + number];
          audioDom.play();
      }
      onKeyDown(e) {
          var keyCode = e["keyCode"];
          switch (e["keyCode"]) {
              case 39:
                  this.next1();
                  break;
              case 37:
                  this.previous1();
                  break;
          }
      }
      load_skin() {
          this.path = this.path_list[this.path_list_index];
          Laya.stage.destroyChildren();
          this.createInteractiveRect();
          this.load_beijing();
          if (this.showinfo == 1) {
              this.State_Info();
          }
      }
      load_beijing() {
          var beijing_file = this.path.concat("beijing.skel");
          this.beijing_templet = new Laya.SpineTemplet(Laya.SpineVersion.v4_0);
          this.beijing_templet.loadAni(beijing_file);
          this.beijing_templet.on(Laya.Event.COMPLETE, this, this.load_daiji);
      }
      load_daiji() {
          var daiji_file = this.path.concat("daiji.skel");
          this.daiji_templet = new Laya.SpineTemplet(Laya.SpineVersion.v4_0);
          this.daiji_templet.loadAni(daiji_file);
          this.daiji_templet.on(Laya.Event.COMPLETE, this, this.playani);
      }
      playani() {
          this.beijing_skeleton = this.beijing_templet.buildArmature();
          Laya.stage.addChild(this.beijing_skeleton);
          this.beijing_skeleton.pos(this.width / 2, this.height / 2 - this.height_offset);
          this.beijing_skeleton.scale(1, 1);
          this.beijing_skeleton.play(this.index, true, true);
          this.daiji_skeleton = this.daiji_templet.buildArmature();
          Laya.stage.addChild(this.daiji_skeleton);
          this.daiji_skeleton.pos(this.width / 2, this.height / 2 - this.height_offset);
          this.daiji_skeleton.scale(1, 1);
          this.daiji_skeleton.play(this.index, true, true);
      }
      State_Info() {
          var txt = new Laya.Text();
          txt.text = String(Laya.Browser.clientWidth);
          txt.color = "#ffffff";
          txt.pos(0, 0);
          Laya.stage.addChild(txt);
          var txt = new Laya.Text();
          txt.text = String(Laya.Browser.clientHeight);
          txt.color = "#ffffff";
          txt.pos(40, 0);
          Laya.stage.addChild(txt);
          var txt = new Laya.Text();
          txt.text = String(this.path_list_index);
          txt.color = "#ffffff";
          txt.pos(80, 0);
          Laya.stage.addChild(txt);
      }
      State_Interactive_on() {
          Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
      }
      State_Interactive_off() {
          Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown);
      }
      createInteractiveRect() {
          var previous_rect1 = new Laya.Sprite();
          previous_rect1.graphics.drawRect(0, 0, this.width / 3, this.height / 3, "#000000");
          previous_rect1.size(this.width / 3, this.height / 3);
          previous_rect1.x = 0;
          previous_rect1.y = 0;
          Laya.stage.addChild(previous_rect1);
          var next_rect1 = new Laya.Sprite();
          next_rect1.graphics.drawRect(0, 0, this.width / 3, this.height / 3, "#000000");
          next_rect1.size(this.width / 3, this.height / 3);
          next_rect1.x = this.width * 2 / 3;
          next_rect1.y = 0;
          Laya.stage.addChild(next_rect1);
          var previous_rect2 = new Laya.Sprite();
          previous_rect2.graphics.drawRect(0, 0, this.width / 3, this.height / 3, "#000000");
          previous_rect2.size(this.width / 3, this.height / 3);
          previous_rect2.x = 0;
          previous_rect2.y = this.height * 2 / 3;
          Laya.stage.addChild(previous_rect2);
          var next_rect2 = new Laya.Sprite();
          next_rect2.graphics.drawRect(0, 0, this.width / 3, this.height / 3, "#000000");
          next_rect2.size(this.width / 3, this.height / 3);
          next_rect2.x = this.width * 2 / 3;
          next_rect2.y = this.height * 2 / 3;
          Laya.stage.addChild(next_rect2);
          var pause_rect = new Laya.Sprite();
          pause_rect.graphics.drawRect(0, 0, this.width / 3, this.height / 3, "#000000");
          pause_rect.size(this.width / 3, this.height / 3);
          pause_rect.x = this.width * 2 / 3;
          pause_rect.y = this.height * 1 / 3;
          Laya.stage.addChild(pause_rect);
          var play_rect = new Laya.Sprite();
          play_rect.graphics.drawRect(0, 0, this.width / 3, this.height / 3, "#000000");
          play_rect.size(this.width / 3, this.height / 3);
          play_rect.x = 0;
          play_rect.y = this.height * 1 / 3;
          Laya.stage.addChild(play_rect);
          var changeskin_rect = new Laya.Sprite();
          changeskin_rect.graphics.drawRect(0, 0, this.width / 3, this.height / 3, "#000000");
          changeskin_rect.size(this.width / 3, this.height / 3);
          changeskin_rect.x = this.width * 1 / 3;
          changeskin_rect.y = this.height * 1 / 3;
          Laya.stage.addChild(changeskin_rect);
          changeskin_rect.on(Laya.Event.MOUSE_DOWN, this, this.changeskin);
      }
      next1() {
          if (this.path_list_index == this.path_list.length - 1) {
              this.path_list_index = 0;
          }
          else {
              this.path_list_index += 1;
          }
          this.showinfo = 0;
          this.load_skin();
      }
      previous1() {
          if (this.path_list_index == 0) {
              this.path_list_index = this.path_list.length - 1;
          }
          else {
              this.path_list_index -= 1;
          }
          this.showinfo = 0;
          this.load_skin();
      }
      next2() {
          if (this.path_list_index == this.path_list.length - 1) {
              this.path_list_index = 0;
          }
          else {
              this.path_list_index += 1;
          }
          this.showinfo = 1;
          this.load_skin();
      }
      previous2() {
          if (this.path_list_index == 0) {
              this.path_list_index = this.path_list.length - 1;
          }
          else {
              this.path_list_index -= 1;
          }
          this.showinfo = 1;
          this.load_skin();
      }
      play() {
          this.beijing_skeleton.play(this.index, true, true);
          this.daiji_skeleton.play(this.index, true, true);
      }
      pause() {
          this.beijing_skeleton.paused();
          this.daiji_skeleton.paused();
      }
      changeskin() {
          if (++this.index >= this.beijing_skeleton.getAnimNum()) {
              this.index = 0;
          }
          this.play();
      }
      path_list_init() {
          this.path_list_index = 0;
          this.path_list = [
              "https://sgsimg.netlify.app/董贵人/春殿踏水/"
          ];
      }
  }
  new SgsSkinViewerSkel();

}());
