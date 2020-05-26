let maxtime = 0; 
let c = 0; 
    function CountDow() {
        if (maxtime >= 0 && c <= 99 * 6.55 * 60) {
           ++c;
            minutes = Math.floor(maxtime / 99);
            seconds = Math.floor(maxtime % 99);
            msg = "时间已用" + minutes  + "." + seconds + "秒"  ;
            document.all["timer"].innerHTML = msg;
            console.log(c)
               if (maxtime == 99 * 60){
                  alert("已用1分钟");}
            ++maxtime;}else{
              clearInterval("CountDow()");
              alert("时间太长了，别玩了！！！！！！回家玩泥巴去吧！！！！！！")
            }
            }
            timer = setInterval("CountDow()", 10);
           
