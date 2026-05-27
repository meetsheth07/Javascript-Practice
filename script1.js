const ParentHeading = document.querySelector('#Heading');
// const ChildHeading = document.querySelector('.container .item');

ParentHeading.addEventListener('click', function() {
    // console.log('Parent Heading Clicked');
    ParentHeading.style.backgroundColor = 'red';
    ParentHeading.style.color = 'white';
    ParentHeading.style.padding = '10px';
    ParentHeading.style.borderRadius = '15px';
});

const clickBtn = document.querySelector('#highlightBtn');
// const ChildHeading = document.querySelector('.container .item');

clickBtn.addEventListener('click', function() {
    // console.log('Click Button Clicked');
    document.getElementById('itemList').childNodes.forEach(function(item) {
        if (item.nodeType === Node.ELEMENT_NODE) {
            item.style.backgroundColor = 'yellow';
            item.style.color = 'black';
            item.style.padding = '15px';
            item.style.borderRadius = '10px';
        }    });
    
});
