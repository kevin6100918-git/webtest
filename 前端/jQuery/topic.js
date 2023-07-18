let topics = [
    "JavaScript",
    "BigData & Database",
    "Production meeting",
    "Fintech Product"
];

$("input").on("change", (e)=>{
    console.log(e.target.value);
    let startDate = new Date(e.target.value);
    console.log(startDate);
})

// let startDate = new Date();
// console.log(startDate);

let dates = [];
function setMonthandDay(startMonth, startDay){
    startDate.setHours(0,0,0);
    startDate.setDate(startDate.getDate()+7);
    // dates.push(startDate.getFullYear()+'/'+(startDate.getMonth()+1).toString().padStart(2,'0')+'/'+startDate.getDate().toString().padStart(2,'0'));
    dates.push((startDate.getMonth()+1).toString().padStart(2,'0')+'/'+startDate.getDate().toString().padStart(2,'0'));
}

for (let i=0; i<topics.length; i++){
    setMonthandDay();
}