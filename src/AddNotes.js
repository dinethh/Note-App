import {db} from './Firebase-Config';
import {addDoc,collection,getDocs } from 'firebase/firestore';
import {useState ,useEffect } from 'react';

function AddNotes(){
      
    const [topic, setTopic] = useState('');
    const [note, setNote] = useState('');
    const [Mnotes, setMNotes] = useState([]);

    useEffect(() => {
        getMNotes();
    }, [])

    const addNote = async () => {
        const docRef = await addDoc(collection(db, "my_notes"), {
            topic: topic,
            note: note,
           
        })
    }

    const getMNotes = async () => {
        const querySnapshot = await getDocs(collection(db, "my_notes"));
        setMNotes(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
    }

    return(
       <div className="container mt-5">
           <h2></h2>

           <div className="row">
               <div className="col-6">
                   {/* Note Topic Text feeld */}
               <input class="form-control" type="text" placeholder="Note Topic" value={topic} onChange={(e) => {
                        setTopic(e.target.value)
                    }}></input>
               <div class="form-floating">
                   {/* Text aria */}
   <textarea class="form-control mt-5" value={note}onChange={(e) => {
                        setNote(e.target.value)
                    }} id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Type Note Here</label>
</div>        
       <button type="button" class="btn btn-primary mt-4" onClick={addNote}>Save</button>
       {/* <button type="button" class="btn btn-danger">Danger</button> */}
         
               </div>
                              {/* Testing Table */}

               <div className="col-12 mt-5">
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Topic</th>
                                <th scope="col">Note</th>
                               </tr>
                        </thead>
                        <tbody>
                            {Mnotes.map(setMNotes => {
                                return (
                                    <tr>
                                        <td>{note.topic}</td>
                                        <td>{note.note}</td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </div>
 </div>
    );
}
export default AddNotes;