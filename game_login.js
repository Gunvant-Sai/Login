function addUser()
{
player1 = document.getElementById("playernameinput1").value;
player2 = document.getElementById("playernameinput2").value;

localStorage.setItem("player1",player1);
localStorage.setItem("player2",player2)

window.location = "game_page.html";
}