# document grid

Once grid is fully rendered the number of pin spaces should be stored in 
application state and a fetch call to the backend for x number of pins will be made
based on an average size. 

Interaction with application state;

* document grid gets a function called contentSpacesCall which then dispatches an action
* to the backend which says I need x number of pieces of content.
