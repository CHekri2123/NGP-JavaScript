const arr = [];
for (let i = 0; i < 5; i++) {
    let customer = prompt("Name of patient: "+(i+1));
    arr.push(customer);
};
//console.log(arr);

function timeTook(patient) {
    for (let i = 0; i < patient.length; i++) {
        let randomTime = Math.floor((Math.random()*10000));
        let wait = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(console.log(patient[i] + " took "+randomTime+ " ms."));
            },randomTime)
        } 
        )
        
    }
    
}
timeTook(arr)
