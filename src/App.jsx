import React from 'react'; 
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {

  const [addItem, setAddItem] =  useState([]);

 
  const addNote = (note) => {
    
    //alert('I am clicked');
    setAddItem((prevData) => {
      return [...prevData, note];
    });

  }



    const onDelete = (id) => {
      setAddItem ((oldData) => 
        oldData.filter ((currdata, indx) => {
            return indx !== id;
         } )
        
        );
      
      };

    
      
    


    

    // console.log(note);
          
  
  return ( <>
            <Header />
            <CreateNote passNote={addNote}/>
            
           {addItem.map((val, index) => {
              return(
                <Note  
                key={index}
                id={index}
                title = {val.title}
                content = {val.content}
                deleteItem = {onDelete}
                />
           );

            })}
            <Footer/>
            
        </>
  );
          
          };

export default App;