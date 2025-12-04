function getDetails(id, getSubjects){
    return new Promise((resolve, reject)=>{
            console.log("getting details");
        resolve({rollNum: "63"});
    })
}

function getSubjects(rollNum, getMarks){
    return new Promise((resolve, reject)=>{
            console.log("fun2 called");
        resolve({subId : "M-1"})
    })
}

function getMarks(subId){
    return new Promise((resolve, reject)=>{
            console.log("fun3 called");
        resolve("getting user marks",subId);
    })
}

getDetails("05").then((result)=>{
    return getSubjects(result.rollNum)
}).then((result)=>{
    return getMarks(result.subId)
}).then((result)=> console.log(result))
  .catch((error)=>console.log(error))