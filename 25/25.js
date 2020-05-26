window.onload = function(){
let flo;
let flo2;
let xong = {
    // 属性
    name: 'fjt',
    age: 13,
    isMale: true,
  
    // 是否存活
    isLive: true,
  
    // 为宠物添加饱食度，这个属性
    food: 100,
    
    // 健康度
    health: 100,
  
    water : 100,
    // 生存计时器
    liveTimer: null,
  
    // 方法 bark
    bark: function () {
      if (!this.isLiving()) return;
       view.displayYell('wang!Wang!');
    },
  
  
  
    // 方法 tellName 用于告诉别人自己的名字
    tellName: function() {
      if (!this.isLiving()) return;
       view.displayYell('my name is ' + this.name);
      return this.name;
    },
  
    // 利用内部的方法，来修改宠物的名字
    setName: function(newName) {
      if (!this.isLiving()) return;
       this.name = newName;
    },
  
    isLiving: function () {
      if (this.isLive) {
        return true;
      } else {
         view.displayYell(this.name + '一动不动，已经去了天堂');
        return false;
      }
    },
  
    // 让宠物可以跑起来
    run: function() {
      // 跑起来之前，先判断是否存活，
      if (this.isLive) {
        // 如果饱食度低于20，宠物拒绝跑动
        if (this.food <= 20 ) {
           view.displayYell('主人！' + this.name + '饿了！');
        } else {
           view.displayYell( this.name + '在草地上撒欢跑步');
          // this.food = this.food - 10;
          this.food -= 10;
        }
      } else {
         view.displayYell('一动不动，已经去了天堂');
      }
  
    },
    
    feed: function () {
      if (this.isLive) {
        this.food = 100;
        this.water = 100;
        view.displayYell(this.name + '吃饱了，满意的对你摇头晃脑');
      }
    },
  
    live: function() {
      let self = this;
      this.liveTimer = setInterval(function () {
        self.food-=0.5;
        self.water-=0.5;
        self.checkFood();
        self.checkHealth();
        console.log("11")
      }, 100);
    },
  
    checkFood: function (){
      if (this.food <= 0 || this.water <= 0) {
        this.food = 0;
        this.water = 0;
        this.health -= 5;
        view.displayYell('Wang!Wang!Wang!')
      } else if (this.food >= 80) {
        this.food = this.food >= 100 ? 100 : this.food;
        this.health += 5;
      }
    },
  
    checkHealth: function () {
      //  view.displayYell(this.health);
      this.health = this.health >= 100 ? 100 : this.health;
      if (this.health <= 0 ) {
        this.dead();
      };
    },
  
    dead: function () {
      view.displayYell("aoWooooooo....");
      clearInterval(this.liveTimer);
      this.isLive = false;
    },
  
    // 该方法用于告诉别人，宠物目前的状态 
    tellStatus () {
      return '饱食度: [' + this.food + '],' + '饮水值: [' + this.water + '],' + ' 健康值: [' + this.health + '], 是否存活: [' + (this.isLive ? '活的' : '挂了') + ']';
    },
  
    resurrect: function () {
      if (!this.isLive) {
        this.isLive = true;
        this.health = 100;
        this.food = 100;
        this.water = 100;
        this.live();
        view.displayYell('为你而战，我的主人');
        return this.isLive
      } else {
        view.displayYell('说啥呢，老子活蹦乱跳');
      }
    },
  };
  
  let view = {
    xongDiv : document.getElementById('xongPic'),

    displayStatus: function () {
      setInterval(function () {
        let xongStatus = document.getElementById("status");
        xongStatus.innerHTML = xong.tellStatus();
      }, 100);
    },
  
    displayYell: function (str) {
      let xongYell = document.getElementById('yell');
      xongYell.innerHTML = str;
    }
  };

  let btnall = {
    btn1 : this.document.getElementById('runbtn'),
    btn2 : this.document.getElementById('resbtn'),
    btn3 : this.document.getElementById('feedbtn'),
    btn4 : this.document.getElementById('hidbtn'),
    btn5 : this.document.getElementById('vis'),
    btn6 : this.document.getElementById('relbtn'),
  }

  xong.live();
  view.displayStatus();
  view.displayYell('我是一只快乐的小熊');
  btnall.btn1.onclick = function(){
      xong.run()
    };

  btnall.btn2.onclick = function(){
      xong.resurrect()
    };

  btnall.btn3.onclick = function(){
      xong.feed()
    };

  btnall.btn4.onclick = function(){
      flo2 = Math.floor(Math.random()*window.innerHeight) ;
      flo = Math.floor(Math.random()*window.innerWidth);
      btnall.btn5.style.left = flo + "px" ;
      btnall.btn5.style.top = flo2 + "px" ;
      document.getElementById('yell').style.left = flo + "px";
      document.getElementById('yell').style.top = flo2 + "px" ;
      view.xongDiv.style.visibility = 'hidden' ;
      view.xongDiv.style.left = flo + "px" ;
      view.xongDiv.style.top = flo2 + "px" ;
      view.displayYell("你可以找到我吗") ;
      xong.food -- ;
      xong.water --;
    };

  btnall.btn5.onclick = function(){
      view.xongDiv.style.visibility = 'visible' ; 
      view.displayYell("被你找到了");
    };

  btnall.btn6.onclick = function(){
      view.displayYell("回家休整了") ;
      setTimeout(function(){
        window.location.reload();
      },500)
    }
}