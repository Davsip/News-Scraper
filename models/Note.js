const mongoose = require("mongoose");
// go to library. 

let Schema = mongoose.Schema;
// Schema is the book. 



let NoteSchema = new Schema ({
// new blueprint, based of the Schema instructions. 

    title: String,
    body: String,
    articleID: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});


let Note = mongoose.model("Note", NoteSchema); 
// here you are actually creating the note. 

module.exports = Note;
// send it away. 
// runs. 