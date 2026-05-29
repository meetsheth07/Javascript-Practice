const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
        <div class="key">
            <table>
                <tr>
                    <td>event.key</td>  
                    <td>${event.key === ' ' ? 'Space' : event.key}</td>
                </tr>
                <tr>    
                <tr>
                    <td>event.keyCode</td>
                    <td>${event.keyCode}</td>
                </tr>
                <tr>
                    <td>event.code</td>
                    <td>${event.code}</td>
                </tr>
                <tr>
                 <td>event.which</td>
                 <td>${event.which}</td>
                </tr>
                <tr>
                    <td>event.location</td>
                    <td>${event.location}</td>
                </tr>
            </table>
        </div>
    `;
});
