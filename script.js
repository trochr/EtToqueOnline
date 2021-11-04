fetch('ingredients.txt')
  .then(response => response.text())
  .then(text => pickIngredients (text,20))
  // outputs the content of the text file

function pickIngredients (ingredients,number){
    var table=ingredients.split("\n");
    
    shuffle(table);
    list=""
    for (var i=0; i<number; i++){
        list=list+table[i]+"\n"
    }
    document.querySelector("#list").innerText=list;
        
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
