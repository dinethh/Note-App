import {Link } from "react-router-dom";
function Navigation(){
    return(
       <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Notes Maker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
         <li class="nav-item">
          <Link class="nav-link"to="/AddNotes" >Add Notes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ViewNotes" >View Notes</Link>
        </li>
         </ul>
    </div>
  </div>
</nav>
       </div>
    );
}
export default Navigation;