let toprow = document.querySelector(".top-row")
let leftcol = document.querySelector(".left-col");
let grid = document.querySelector(".grid");
for (let i = 1; i <= 100; i++){
    let newcol = document.createElement("div");
    newcol.setAttribute("class", "cell");
    newcol.textContent = i;
    leftcol.appendChild(newcol);
}

for (let i = 1; i <= 26; i++){ 
    let newrowcell = document.createElement("div");
    newrowcell.setAttribute("class", "cell");
    newrowcell.textContent = String.fromCharCode(64 + i);
    toprow.appendChild(newrowcell)
}
for (let row = 1; row <= 100; row++) { 
    let newrow = document.createElement("div")
    newrow.setAttribute("class","grid-row")
    for (let col = 1; col <= 26; col++) { 
        let newcell = document.createElement("div")
        newcell.setAttribute("class", "cell")
        newcell.textContent = `${String.fromCharCode(64 + col)}-${row}`;
        newrow.appendChild(newcell)
        
    }
    grid.append(newrow)
}
