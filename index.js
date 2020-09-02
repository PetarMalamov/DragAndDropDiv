//Make the DIV element draggagle:
const innerDiv = document.getElementById("mydiv");
const externalDiv = document.getElementById("container");
dragElement(innerDiv,externalDiv);

function dragElement(elmnt,cont) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        if(elmnt.offsetTop <= 5 || elmnt.offsetTop + elmnt.clientHeight >= cont.clientHeight - 5){
            elmnt.style.backgroundColor = "blue"
        }else if(elmnt.offsetLeft <= 5 || elmnt.offsetLeft + elmnt.clientWidth >= cont.clientWidth - 5){
            elmnt.style.backgroundColor = "blue"
        }
        else{
            elmnt.style.backgroundColor = "red"
        }
    }
    
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}