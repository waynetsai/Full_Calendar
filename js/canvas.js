
        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext('2d');
        var ww = window.innerWidth;
        var wh = window.innerHeight;

        //背景底色
        ctx.fillStyle="#001D2E";
        ctx.fillRect(0,0,ww,wh);
        
        ctx.strokeStyle="rgba(255,255,255,0.1)";
        let gutter = 20;

        for(var i=0;i*10<ww;i++){
            ctx.moveTo(i*gutter,0);
            ctx.lineTo(i*gutter,wh);
        }
        for(var i=0;i*10<wh;i++){
            ctx.moveTo(0,i*gutter);
            ctx.lineTo(ww,i*gutter);
        }
        ctx.stroke();

        console.log('end_s');
        console.log(canvas.toDataURL());
        
        
// var canvas =  document.getElementById("mycanvas")
// var ctx = canvas.getContext("2d") 
// var ww = window.innerWidth,
//     wh = window.innerHeight
// var time = 0
// var ship = {
//   deg: 0
// } 

// function init(){
//   canvas.width = ww
//   canvas.height = wh
// }
// function update(){
//   ctx.fillStyle="black"
//   ctx.fillRect(0,0,ww,wh)
//   time++
// }
// function draw(){
//   ctx.fillStyle="#001D2E"
//   ctx.fillRect(0,0,ww,wh)
  
//   ctx.save()
//     ctx.strokeStyle="rgba(255,255,255,0.1)"
//     let gutter = 50
//     for(var i=0;i*10<ww;i++){
//       ctx.moveTo(i*gutter,0)
//       ctx.lineTo(i*gutter,wh)
//     }
//     for(var i=0;i*10<wh;i++){
//       ctx.moveTo(0,i*gutter)
//       ctx.lineTo(ww,i*gutter)
//     }
//     ctx.stroke()
  
//   ctx.restore()
  
//   ctx.save()
//     ctx.shadowBlur=50
//     ctx.shadowColor="white"
  
//     ctx.translate(ww/2,wh/2)
//     ctx.beginPath()
//     ctx.arc(0,0,80,0,Math.PI*2)
//     ctx.strokeStyle="white"
//     // ctx.fillStyle="white"
//     ctx.lineWidth=15
//     ctx.stroke()
//     for(var i=0;i<3;i++){
//       ctx.rotate(Math.PI*2/3)
//       ctx.moveTo(0,0)
//       ctx.lineTo(80,0)
//     }
    
//     ctx.lineWidth=5
//     ctx.stroke()
  
//     ctx.beginPath()
//     if (time%50==0){
//       TweenMax.to(ship,0.5,{deg: time/20})
//       // ship.deg = time/20
//     }
//     ctx.arc(0,0,150,-Math.PI/4+ ship.deg ,Math.PI/4+ship.deg )
//     ctx.stroke()
  
//     ctx.save()
//       ctx.rotate(ship.deg + Math.PI)
//       ctx.beginPath()
//       ctx.fillStyle="white"
//       ctx.fillRect(100,-25,50,50)
    
//       ctx.stroke()
//     ctx.restore()
  
//   ctx.restore()
  
//   let r = 300
//   let deg = time/60
//   ctx.save()
//     ctx.translate(ww/2,wh/2)
//     ctx.beginPath()
//     ctx.arc(Math.cos(deg)*r,Math.sin(deg)*r,40,0,Math.PI*2)
//     ctx.fillStyle="white"
//     ctx.fill()
//   ctx.restore()
  
  
//   requestAnimationFrame(draw)
// } 
// init()
// setInterval(update,30)
// requestAnimationFrame(draw)

// class GameObject{
//   constructor(args){
//     let def ={
//     }
//   }
//   draw(){
    
//   }
//   update(){
    
//   }
// }