let thisH1 = document.getElementsByTagName('h1')[0];
thisH1.addEventListener('click', showAlert);

let clockCtl = new Object;
let randCtl = new Object;

function showAlert(){
    console.log('World在第'+this.textContent.indexOf('World')+'個位置')
    console.log(this.textContent.split(' ')[0]);
    console.log(this.textContent.split(' ')[1]);
    clearInterval(clockCtl)
    clearInterval(randCtl);
    thisH1.style.color = "black";
    thisH1.style.backgroundColor = "white";
    this.textContent = 'Yo！';
};

let btn1 = document.getElementsByTagName('input')[0];
thisBtn = btn1.addEventListener('click', clock);

function showTime(){
    let time = new Date();
    thisH1.textContent = "西元 "+time.getFullYear()+" 年 "+
    (time.getMonth()+1)+" 月 "+time.getDate()+
    " 日 星期"+time.getDay()+
    "   現在時間 "+time.getHours()+":"+time.getMinutes()+
    ":"+time.getSeconds();

    let colorList = ["black","gray","blueviolet","slategray"]
    thisH1.style.color = "yellow";
    thisH1.style.backgroundColor = colorList[Math.floor(Math.random()*colorList.length)];
}

function clock(){
    clockCtl = setInterval(showTime, 500)
}

let counter = 0;

let randbtn = document.getElementById("randbtn");
let randomint = document.getElementById("randomint");
let countlist = [0,0,0,0,0,0,0,0,0,0];
let thisH2 = document.getElementsByTagName("h3")[0];

function showRandom(){
    result = Math.floor((Math.random() * 10) + 1);
    randomint.textContent = result
    countlist[result-1]+=1;
    counter += 1;
    thisH2.textContent = "1 : "+Math.round(countlist[0]/counter*100)+"%"+
", 2 : "+Math.round(countlist[1]/counter*100)+"%"+
", 3 : "+Math.round(countlist[2]/counter*100)+"%"+
", 4 : "+Math.round(countlist[3]/counter*100)+"%"+
", 5 : "+Math.round(countlist[4]/counter*100)+"%"+
", 6 : "+Math.round(countlist[5]/counter*100)+"%"+
", 7 : "+Math.round(countlist[6]/counter*100)+"%"+
", 8 : "+Math.round(countlist[7]/counter*100)+"%"+
", 9 : "+Math.round(countlist[8]/counter*100)+"%"+
", 10 : "+Math.round(countlist[9]/counter*100)+"%";
}

randbtn.addEventListener("click", ()=>{randCtl = setInterval(showRandom, 500)});

