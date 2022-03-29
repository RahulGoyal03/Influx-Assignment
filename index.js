// Instructions How to run :-
// 1. Open Terminal in VS Code.
// 2. Write the command on terminal "node index.js" & hit Enter key on keyboard

// If you face any difficulty to run it and review it feel free to reach me out at rahulgl0303@gmail.com



// ------Group Create Function-------//

function createTripGroup(name) {
  this.GroupName = name;
}
// **********ADD GROUP NAME HERE************//
let GroupOne = new createTripGroup("GroupA");
console.log("GroupName :- " + GroupOne.GroupName);

// ----------------------------------------//







// ------ Add Members Function -------//

let Member = [];
var Members = {};
function addNewMember(name) {
  Member.push(name);
  for (let i = 0; i < Member.length; i++) {
    var char = Member[i];
    if (Members[char] == undefined) {
      Members[char] = 0;
    } else {
      console.log(char + " Name is already present");
    }
  }
  Member = []
}

// ******** ADD NAMES OF MEMBERS HERE ***********//
addNewMember("Rahul");
addNewMember("Goyal");
addNewMember("Kamal");
addNewMember("Goyal");

// console.log(Members);


// --------------------------------------------------------------//







// ----------Add Expenses Function -------//
function addExpenses(name,money) {
  for(key in Members){
      if(key == name){
          Members[key] += money
      }
  }
}


// ********* ADD EXPENSES HERE FOR THE MEMBERS *********//
addExpenses("Rahul", 70)
addExpenses("Goyal", 30)
// addExpenses("Goyal", 100)
addExpenses("Kamal", 30)


console.log(Members)

// ---------------------------------//




// --------------- Split Expenses Function ----------//
function splitExpense(){
   let sum = 0 
    var numberOfMembers = 0
    for(key in Members){
        numberOfMembers++
        sum+= Members[key]
    }
    var splitMoney = sum/numberOfMembers

    // ---------Equal Amount Split-------//
    console.log("Rs", sum/numberOfMembers, " Split Expenses amomg all the Members")


    // --------who owes to whom---------//
    var moneyfrom = []
    for(key in Members){
        if(splitMoney > Members[key]){
           
             moneyfrom.push(key)
        }
    }
    
    for(key in Members){
        
       if(splitMoney > splitMoney - Members[key] ){
        if(moneyfrom){
            
            console.log(key, (Members[key] - splitMoney)/moneyfrom.length,  "owes money from each", moneyfrom)
            break;
        }else{
            console.log(key, Members[key] - splitMoney,  "owes money from nobody"  )
        }
     }
    }
}
splitExpense()

// --------------------------------------------------------------------//