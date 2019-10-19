
var players = [{name:"John Samples", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Film Production", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"Jacob Hepner", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"GeoScience", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel L. Jackson", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Art", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Frost", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

/*


	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle -
					0 - hide the html tag
					1 - make the html tag visible

			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
function viewStudentStats(id, toggle) {
  if (toggle == 0) {
    var x = document.getElementById(id);
    x.style.visibility = "hidden";
    x.style.height = "0px";
  } else {
    var x = document.getElementById(id);
    x.style.visibility = "visible";
    x.style.height = "auto";
  }
}




/*
Write a javascript function that meets the following specifications:

changeColor(color)
	parameter:
		color- A css color

	purpose: This method will set the html body's background color to the
			 provided parameter.
*/

function changeColor(color) {
  document.body.style.background = color;
}



/*
Write a javascript function that meets the following specifications:

loadStatsPage() method:
	parameters: none

	purpose: This method will iterate through the stats table and
			 do the following:
				1. Read through each row of the table & determine which team won
				   the game.

				2. Update the winner column to the name of the winning team.

				3. Keep track of the number of wins/losses for the Buffs.

				4. Update the second table to show the total number of wins/losses for the Buffs.
*/

function loadStatsPage(){
	var wins=0
	var losses=0
	var table = document.getElementById("stats_table");//Retrieve our table element
	var row_counter;//Keeps track of our row index
	for(row_counter = 2; row_counter < table.rows.length; row_counter++)
	{//Outer for loop iterates over each row
		if(parseInt(table.rows[row_counter].cells[2].innerHTML)>table.rows[row_counter].cells[3].innerHTML){
			table.rows[row_counter].cells[4].innerHTML = "CU"
			wins= wins+1			}
		else {
			table.rows[row_counter].cells[4].innerHTML = table.rows[row_counter].cells[1].innerHTML
			losses = losses+1
		}
	}
	document.getElementById("wins").innerHTML = wins

	document.getElementById("losses").innerHTML = losses
}




function loadPlayersPage(playerNum){
	var dropdowns = document.getElementById("player_selector");
    var i;
    var but = "";
    for (i = 0; i < players.length; i++) {
      but = but+"<a id = " + i +" onclick = switchPlayers("+i+")>"+players[i].name+"</a>"+"<br></br>";
      console.log(but);
      dropdowns.innerHTML = but;
   	}
}



function switchPlayers(playerNum) {
	var j = playerNum;
	document.getElementById("selectPlayerButton").innerHTML = players[j].name
	var year = document.getElementById("p_year");
	var major = document.getElementById("p_major");
	var played = document.getElementById("g_played");
	var yards = document.getElementById("p_yards");
	var avg_p_yards = document.getElementById("avg_p_yards");
	var r_yards = document.getElementById("r_yards");
	var avg_r_yards = document.getElementById("avg_r_yards");
	var rec_yards = document.getElementById("rec_yards");
	var avg_rec_yards = document.getElementById("avg_rec_yards");
	year.innerHTML = players[j].year;
	major.innerHTML = players[j].major;
	played.innerHTML = players[j].games_played;
	yards.innerHTML = players[j].pass_yards;
	avg_p_yards.innerHTML = (players[j].pass_yards/players[j].games_played);
	r_yards.innerHTML = players[j].rushing_yards;
	avg_r_yards.innerHTML = (players[j].rushing_yards/players[j].games_played);
	rec_yards.innerHTML = players[j].receiving_yards;
	avg_rec_yards.innerHTML =(players[j].pass_yards/players[j].games_played);
	document.getElementById("player_img").src = players[j].img;
}
