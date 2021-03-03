showNotes();

//geting the access of add-note button id=addBtn
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt  = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObject = [];

    } else {
        notesObject = JSON.parse(notes);

    }
    notesObject.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObject));
    addTxt.value = "";
    console.log(notesObject);
    showNotes();
})

// function to show the notes after user click add-note button
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObject = [];

    } else {
        notesObject = JSON.parse(notes);

    }
    let html = "";
    notesObject.forEach(function (element, index) {
        // handeling the notes display
        html += `<div class="card noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Notes ${index + 1}</h5>
            <p class=>${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`;
    });
    let notesElement = document.getElementById("notes");
    if (notesObject.length!=0){
        notesElement.innerHTML = html;
    }else{
        notesElement.innerHTML = `no notes`
    }
}
// function to delete the notes from display
function deleteNote(index){
    // fatching the content of localstorage
    let notes = localStorage.getItem("notes");
    if (notes==null){
        notesObject = []

    }else{
        notesObject = JSON.parse(notes);

    }
    //deleting note w.r.t 'id=index' of notes
    notesObject.splice(index,1);

    //after deleting update the localStorage
    localStorage.setItem("notes",JSON.stringify(notesObject));
    showNotes();

}

//code for search function
// search a particular note from the all notes
//accessing the search fild
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    //fatching the input from search fild 
    let inputVal=search.value.toLowerCase();
    // console.log(inputVal)
    //accessing the class -> "noteCard" from shownotes function 
    let noteCard=document.getElementsByClassName("noteCard");
    //looking through noteCard array
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

        // console.log(cardTxt)
    })

})