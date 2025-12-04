function getDetails(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({rollNum: "63"});
        },2000);
    })
}

function getSubjects(rollNum){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({subId : "M-1"})
        },3000);
    })
}

function getMarks(subId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("getting user marks",subId);
        },2000);
    })
}

const fun = async() =>{
    console.log("123");
    const result = await getDetails("432");
    console.log(result);
    const result2 = await getSubjects(result.rollNum);
    console.log(result2);
    const result3 = await getMarks(result2.subId);
    console.log(result3);
    console.log('xyz')
}

fun();
