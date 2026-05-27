// <!-- create some HTML elements for DOM practice should include  a list (<ul>) from which there would be three buttons one for toggling class of listitems and one for adding items to list and third for removing items from list selected by user,next thing to include is a form for adding new items to the list,next thing we need is to change the background color of the selected item -->
//now we have to do some DOM manipulation using JavaScript to achieve the above mentioned functionalities

const ParentHeading = document.querySelector('#Heading');

if (ParentHeading) {
    ParentHeading.addEventListener('click', function() {
        ParentHeading.style.backgroundColor = 'red';
        ParentHeading.style.color = 'white';
        ParentHeading.style.padding = '10px';
        ParentHeading.style.borderRadius = '15px';
    });
}

// Add Item Button Handler
const addBtn = document.querySelector('#addItemBtn');
if (addBtn) {
    addBtn.addEventListener('click', function() {
        const newItemText = document.querySelector('#itemToAdd').value;
        if (newItemText.trim() !== '') {
            const newItem = document.createElement('li');
            newItem.className = 'item'; // Add item class for styling
            newItem.textContent = newItemText;
            document.getElementById('itemList').appendChild(newItem);
            document.querySelector('#itemToAdd').value = '';
            console.log('Item added:', newItemText);
        } else {
            alert('Please enter an item');
        }
    });
}

// Toggle Class Button Handler
const toggleClassBtn = document.querySelector('#toggleClassBtn');
if (toggleClassBtn) {
    toggleClassBtn.addEventListener('click', function() {
        const items = document.querySelectorAll('#itemList .item');
        items.forEach(function(item) {
            item.classList.toggle('item-next');
        });
        console.log('Class toggled');
    });
}

// Remove Item Button Handler
const removeItemBtn = document.querySelector('#removeItemBtn');
if (removeItemBtn) {
    removeItemBtn.addEventListener('click', function() {
        const items = document.querySelectorAll('#itemList .item');
        if (items.length > 0) {
            items[items.length - 1].remove();
            console.log('Item removed');
        } else {
            alert('No items to remove');
        }
    });
}

// Form Submission Handler for Second List
const addItemForm = document.querySelector('#addItemForm');
if (addItemForm) {
    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const newItemText = document.querySelector('#newItemInput').value;
        if (newItemText.trim() !== '') {
            const newItem = document.createElement('li');
            newItem.className = 'item';
            newItem.textContent = newItemText;
            document.getElementById('itemList_2').appendChild(newItem);
            document.querySelector('#newItemInput').value = '';
            console.log('Item added via form:', newItemText);
        } else {
            alert('Please enter an item');
        }
    });
}




