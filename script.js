
function calculateTotalPrice() {
    
    const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    priceElements.forEach(element => {

        const price = parseInt(element.textContent.trim(), 10);

        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

  
    const table = document.querySelector('table');
    const existingTotalRow = document.getElementById('total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    const totalRow = document.createElement('tr');
    totalRow.id = 'total-row'; 

    const totalCell = document.createElement('td');
  
    totalCell.colSpan = 2;
    totalCell.style.textAlign = 'right';
    totalCell.style.fontWeight = 'bold'; 
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;


    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
}

const getSumBtn = document.getElementById('getSumBtn');

if (getSumBtn) {
    getSumBtn.addEventListener('click', calculateTotalPrice);
}

