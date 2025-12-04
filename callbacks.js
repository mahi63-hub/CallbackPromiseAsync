function getDetails(id, getSubjects){
    console.log(id);
    getSubjects({rollNum: "63"});
}

function getSubjects(rollNum, getMarks){
    console.log(rollNum);
    getMarks({subId: "M-1"});
}

function getMarks(subId){
    console.log(subId)
}

getDetails("05",function(rollNum){
    getSubjects(rollNum, function(subId){
        getMarks(subId);
    })
    }
)