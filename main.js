//I have used information from the following website https://stackoverflow.com/questions/71303029/trying-to-pass-input-value-as-new-object-into-an-array
//I have also used code from a lecture https://www.dropbox.com/scl/fo/ez5w5oblcrkpjzuyauds6/h/Group%202?dl=0&preview=T38+-+Event+Handling+(Redo).mp4&subfolder_nav_tracking=1
//I have also used information from https://stackoverflow.com/questions/52153424/how-to-use-event-listener-to-toggle-class-to-individual-list-item
// also usedinformation from https://stackoverflow.com/questions/39714041/how-to-remove-an-item-in-an-array-using-an-onclick-function
/*This example shows how we use the built-in methods getElementbyId, createElement and appendChild for manipulating

our HTML page. */

/*See the querySelector method below. 
    The querySelector method finds the first Element within the document that matches the specified selector, or group of selectors.
    For more info about this methos see here:https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    The code below, therefore, finds an ordered list <ol> element.
    We store a reference to the <ol> element that is found in a variable called htmList. */
    //access the HTML page
    //access ul
    let htmlList = document.querySelector('#itemList')
    //access the add button
    let addBtn = document.getElementById("addBtn")
    //access the user input
    let input = document.getElementById("input")
    //access the array of spans child of an li
    let close = document.getElementsByClassName("close");
        /* We want to add listItems <li> to the ordered list element that we found above. To do this,
        we first have to create a list item. Notice how an element can be created below using the createElement method. 
        Here we create 4 <li> elements. */ 
        //create a variable to hold array (database)    
        let shoppingList = []
        //create a variable for an li item
        let listItem = ''
        
        //create a function that will display the array element
        function display() {
                //create a new li
                listItem = document.createElement('li')
                listItem.innerHTML = shoppingList.slice(-1)
                //append the li
                htmlList.appendChild(listItem)
                //call the span function
                addSpan()
                // console.log(counter + 'counter passed')
            for (let i = 0; i < shoppingList.length; i++) {
                //handle removal of the array 
                  close[i].onclick = handleRemove
                }    
        }

        //create a function that will create the 'x' node with id \u00D7
         function addSpan(){
            let span = document.createElement("span")
            let characterX = document.createTextNode("\u00D7")
            span.appendChild(characterX)
            span.className = "close"
            listItem.appendChild(span)
         }


        addBtn.onclick = function() {
        if(input.value.length == 0){
            alert("You should insert an item!")
        //push user input into the shopping list array
        } else if (input.value.length > 0){
            shoppingList.push(input.value)
            display()
            console.log(shoppingList)
            document.querySelector('#input').value = ''
            }
        }
//create an event hat will react to an enter key
document.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        document.getElementById('addBtn').click()
    }
})

//toggle checked
let selectedElement = document.getElementById('itemList')
selectedElement.addEventListener("click", function(e){
        if (e.target.tagName.localeCompare("li")){
        e.target.classList.toggle("checked")
      }
})

//create function to remove both the visual li and the array element
function handleRemove(e) {
    if (e.target.classList.contains("close")) {
                let closeNewArray = Array.from(close)
        e.target.parentNode.style.display = "none"
        closeIndex = closeNewArray.indexOf(e.target.closest('span'))
        console.log(closeIndex + ' index of span ')
        shoppingList.splice(closeIndex, 1)
    }
     e.target.closest('li').remove()
     console.log(shoppingList)
  }