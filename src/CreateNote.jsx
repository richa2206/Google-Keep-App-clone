import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';


const CreateNote = (props) => {
    const [note, setNote] = useState ({
        title: "",
        content: "", 

    });

    const addEvent = () => {
           props.passNote(note);

           setNote ({
            title: "",
            content: "", 
    
        });
          // console.log(props.passNote(note));
    };



    const InputEvent = (event) => {

       const {name, value} = event.target;

        setNote((prevData) => {
            return{
            ...prevData, 
            [name]: value,
        };
        });
    };
    return (
             <>
             <div className="main_note">
                 <form>
                     <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="title" Autocomplete="off"></input>
                     <textarea rows="" name ="content" value={note.content} onChange={InputEvent} columns="" placeholder="Write note, I will make you sure to remember"></textarea>
                     <Button onClick={addEvent}>
                         <AddIcon className ="plus_sign" />
                     </Button>
                 </form>
             </div>

             </>
    );
};

export default CreateNote;