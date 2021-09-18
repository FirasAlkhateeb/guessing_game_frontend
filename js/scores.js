//actually calling the getScores() function,
//which fetch all names and scores from database

getScores().then((data)=>{
console.log(data)
for(let i=0 ;i<data.length; i++){
    display += ` <li class="score-element">
        <span>${data[i].name} </span>
        <span>${data[i].score} </span>
    </li> `
    }
})
