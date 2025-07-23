

const notesList = document.getElementById("notes-list");


function createNote() {

    // let notesItem = document.createElement("div")
    // notesItem.classList.add("notes__item");
    // let paragraph = document.createElement("p");
    // let image = document.createElement("img");
    // paragraph.setAttribute("contenteditable", "true");
    // paragraph.classList.add("notes__control");
    // image.src = "images/delete.png";
    // image.setAttribute("id", "delete-button");
    // image.setAttribute("width", "16px");
    // image.setAttribute("height", "16px");
    // image.classList.add("notes__delete-icon");
    
    // notesList.appendChild(notesItem);
    // notesItem.appendChild(paragraph);
    // notesItem.appendChild(image);

    
    notesList.innerHTML += `
    <div class="notes__item">
        <p 
        contenteditable="true"  
        class="notes__control">
        </p>
        <img 
        id="delete-button"
        src="images/delete.png" alt="" 
        class="notes__delete-icon"
        width="16px"
        height="16px">
    </div>
    `;
    saveNotes();
}

function deleteNote(element) {
    element.parentNode.style.display = "none";
    saveNotes();
}

function saveNotes() {
    localStorage.setItem("data", notesList.innerHTML);
}

function showNotes() {
    notesList.innerHTML = localStorage.getItem("data");
}



notesList.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") {
        deleteNote(e.target);
    }
    else if(e.target.tagName === "P") {
        const noteMessages = document.querySelectorAll(".notes__control");
        noteMessages.forEach(noteMessage => {
            noteMessage.onkeyup = function() {
                saveNotes();
            }
        })
    }
});


showNotes();

