function adduser() {
player_1name= document.getElementById("player1_name").value;
player_2name= document.getElementById("player2_name").value;
localStorage.setItem("player1_name", player_1name);
localStorage.setItem("player2_name", player_2name);
window.location= "game_page.html";
}
