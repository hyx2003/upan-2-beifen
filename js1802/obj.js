// 写一个对象，创建一只可爱的猫
window.onload = function(){
let dog = {
  // 演示的是定义属性
  name: 'xixi',
  age: 13,
  breed: '中华田园犬',
  weight: 25,
  isMale: true,
  isLive: true,
  
  health: 100,
  food: 100,
  water: 100,

  liveInterval: null,

  // 演示的是定义方法
  bark: function () {
    if (this.isLiving()) {
      view.displayDogeSay('wang!wang!wang!');
      this.water--;
    }
  },
 
  // 狗狗愿意讲，你才能知道狗狗的名字，体现"封装性的编程思想"
  sayName: function () {
    // view.displayDogeSay('my name is ' + this.name);
    // 注意this关键字
    if (this.isLiving()) {
      this.food--;
      this.water--;
      return this.name;
    }
  },

  run: function() {
    // 狗不可能永远跑下去，也有累的时候
    if (this.isLiving()) {
      if ( !this.isTired() ) {
        view.displayDogeSay('狗狗在小区草地上撒欢儿跑！');
        this.food -= 10;
        this.water = this.water - 10;
      } else {
        view.displayDogeSay('跑不动了');
      }
    }
  },

  showStatus: function() {
    return 'health: ' + this.health + '; food: ' + this.food + '; water: ' + this.water;
  },

  // 用行为限制行为，属性和方法之间的数据互访
  isTired: function() {
    if (this.food >= 20 && this.water >= 20) {
      return false;
    }
    return true;
  },

  live: function() {
    // 这一行是典型的在对象的方法内部，引用对象的属性
    // 所以this指代的毋庸置疑是dog这个对象
    // view.displayDogeSay(this.water);
    // 这段解释你们目前看不懂是完全没有问题的，以后慢慢体会
    let self = this;
    // setInterval(    以函数的形式描述要执行的代码  , 每次执行代码后间隔得时间   );
    this.liveInterval = setInterval(function(){
      // 这一行是在 setInterval 的匿名函数里的this
      // 谁说this指向的就是dog呢？显然这里的this指代的是别的东西，而不是隔了好几层的dog
      self.water = self.water - 6;
      self.food = self.food - 3;
      self.checkStatus();
    }, 500);
  },

  resurrect: function () {
    if (!this.isLive) {
      this.isLive = true;
      this.health = 100;
      this.water = 100;
      this.food = 100;
      this.live();
      view.displayDogeSay('为你而战，我的主人');
    } else {
      view.displayDogeSay('说啥呢，老子活蹦乱跳');
    }
  },

  checkStatus: function () {
      // 保证饱食度和饮水值不会低于0
      this.water = this.water <= 0 ? 0 : this.water;
      this.food = this.food <= 0 ? 0 : this.food;

      if (this.water >= 50 && this.food >= 50) {
        this.health = this.health >= 100 ? 100 : this.health + 5;
      }

      if ( this.water <= 0 || this.food <= 0){
        // h = h -5
        this.health = this.health <= 0 ? 0 : this.health - 5;
        this.bark();
      };

      if (this.health === 0) {
        this.dead();
      }
  },

  dead: function () {
    clearInterval(this.liveInterval);
    this.isLive = false;
    view.displayDogeSay('aoWooooo....');
  },

  eat: function () {
    if (this.isLiving()) {
      this.water = 100;
      this.food = 100;
      view.displayDogeSay('狗狗吃饱了，摇头晃脑表示感谢');
    }
  },

  isLiving: function () {
    if (this.isLive) {
      return true;
    }

    view.displayDogeSay(this.name + '因为你的喂养不善，已经去了天堂，愿它安息');
    return false;
  }
};

let view = {
  displayDogeStatus: function () {
    let statusBoard = document.getElementById('dogeStatus');
    setInterval( function () {
      statusBoard.innerHTML = dog.showStatus();
     }, 100);
  },

  displayDogeSay: function (str) {
    let sayTxt = document.getElementById('dogeSay');
    sayTxt.innerHTML = str;
  }
};

view.displayDogeStatus();
dog.live();
dog.run();
view.displayDogeSay('这只狗的名字叫' + dog.sayName());
}
