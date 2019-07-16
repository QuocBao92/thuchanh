let b = document.getElementById("dauvao");
let board = [];
var data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array(".", ".", ".", ".", ".");
}
data += "<table style='margin:0px auto' border='1' width='300' cellspacing='0' cellpadding='3'>"
for (let i = 0; i < 5; i++) {
    data += "<tr>";
    for (let j = 0; j < 5; j++) {
        data += "<td>"+board[i][j]+ "</td>" ;
    }
    data += "</tr>"
}
data += "</table>" 
b.innerHTML = data + "<br/><br/>";

function changeValue(){
    let diemX = +prompt('X: ');
    let diemY = +prompt('Y: ');
    data = '';
    data += "<table style='margin:0px auto' border='1' width='300' cellspacing='0' cellpadding='3'>"
    for (let i = 0; i < 5; i++) {
        data += "<tr>";
        for (let j = 0; j < 5; j++) {
            if((i +1) === diemX && (j +1)  === diemY){
                board[i][j] = 'x';     
            }
            data +="<td>"+ board[i][j]+ "</td>";
        }
        data += "</tr>"
    } 
    data += "</table>" 
    b.innerHTML = data +"<br/><br/>";
}

