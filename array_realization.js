const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs =(students)=>{
    return [students[0],students[2],students[1],students[3],students[4],students[5]];
    }
    const couples=getPairs(students);
    console.log(couples);
    
    let result=[];
 const result = pairsAdd(couples,themes);
    function pairsAdd (couples,themes) {
      
        for(let i=0;i<couples.length; i++)
        {
            result.push([couples[i].join(' and '), themes[i]]);
        }
return result;
    } 
    console.log( pairsAdd(couples,themes));


//function 3

function joinStudentsMarks (studentsName, marks)  {
    const couplesMark = [];
    for(let i=0; i<studentsName.length; i++){
        couplesMark.push([studentsName[i],marks[i]]);
    }
    return couplesMark;
}
console.log(joinStudentsMarks(students, marks));

//function 4

function randomMarker(pairsAndProject){
   const min=1;
   const max=5;
   let randomResultMark=[];
   for(let i=0; i<pairsAndProject.length; i++){

    const Mark = Math.floor(Math.random()*(max - min +1) + min);
    
    randomResultMark.push ([...pairsAndProject[i], Mark]);
    }

    return randomResultMark;
   
}
console.log(randomMarker(pairsAndProject));
