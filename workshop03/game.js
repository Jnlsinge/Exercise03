let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".Score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");
const check_div = document.getElementById("C");
let c=0;
let h=0;
let a = ["Rock", "Paper", "Scissors"];
let b = ["Rock", "Paper", "Scissors"];
let x = [""];

function checkall(c, d) {
	switch (c + d){
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
		return "Win";
		break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
		return "Tie";
		break;
		case "ScissorsRock":
		case "RockPaper":
		case "PaperScissors":
		return "Lose";
		break;
	}
}




function checkmessege(x){

    for(c=0;c<3;c++) {
    for(h=0;h<3;h++) {
 
   
        
       console.log(" Human=" + a[h] + " Computer=" + b[c] + " Result=" + checkall(a[h], b[c]) + "\n");
       alert(" Human=" + a[h] + " Computer=" + b[c] + " Result=" + checkall(a[h], b[c]) + "\n");
  
   }
}
}



function check(letter){
    checkmessege()
	result_p.innerHTML = "Done Checking"

}




function convert(letter){
	switch (letter){
		case "R":
		return "Rock"
		break;
		case "P":
		return "Paper"
		break;
		case "S":
		return "Scissors"
		break;
	}
}




function wins(user, comp){
	userscore++;
	console.log("win");
	userscore_span.innerHTML = userscore;
	result_p.innerHTML = " Human=" + convert(user) + "; Computer=" + convert(comp) + "; Result= You Win. "
}

function draw(user, comp){
    console.log("tie");
	result_p.innerHTML = " Human=" + convert(user) + "; Computer=" + convert(comp) + "; Result= Tie. "
}

function lose(user, comp){
    compscore++;
    console.log("lose");
	compscore_span.innerHTML = compscore;
	result_p.innerHTML = " Human=" + convert(user) + "; Computer=" + convert(comp) + "; Result= You Lose. "
}





function comp(){
	const choices = [ 'R' , 'P' , 'S' ];
	const randomnumber = (Math.floor(Math.random() * 3));
	return choices[randomnumber];
}







function game(userchoice) {
	const computerchoice = comp();
	switch (userchoice + computerchoice){

		case "RS":
		case "PR":
		case "SP":
		wins(userchoice, computerchoice);
		break;
		case "RR":
		case "PP":
		case "SS":
		draw(userchoice, computerchoice);
		break;
		case "SR":
		case "RP":
		case "PS":
		lose(userchoice, computerchoice);
		break;


	}
}








function main(){

rock_div.addEventListener('click', function() {
	game("R");
})

paper_div.addEventListener('click', function() {
	game("P");
})

scissors_div.addEventListener('click', function() {
    game("S");
})

check_div.addEventListener('click', function(){
	check("C");
})

}




main();
