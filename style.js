var froyo = prompt("enter a list of comma seperated froyo flavors");
var array = froyo.split();
console.log(froyo)

const flavors = {};
for(let i=0;i<array.length;i++){
    const flav = array[i];
    if (flav in flavors){
        flavors[flav] +=1
    } else 
        flavors [flav]
    
}

console.table(flavors)

const flavor = {
    chocolate : function (){
        for(i=0;i<array.length;i++){
            if(array==="chocolate"){
             return this.chocolate+=1;
            } else {
                return null
            }
        }
    }
 
 
}




console.log(Object(flavor))
const count ={};

for (let i=0 ; i<array.length ; i++){
    let ele = array[i];
    if (count[ele]) {
    count[ele] += 1 
    } else {
        count[ele] = 1
    }
    }
    console.log(count)