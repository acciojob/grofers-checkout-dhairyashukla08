
function calculateAndDisplayTotal() {

    const priceElements = document.querySelectorAll('.price');

    const existingTotalRow = document.getElementById('totalRow');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
    let totalPrice = 0;
    priceElements.forEach(priceCell => {
        const priceString = priceCell.textContent;
        

        const priceValue = parseInt(priceString, 10);

        if (!isNaN(priceValue)) {
            totalPrice += priceValue;
        }
    });

    const totalRow = document.createElement('tr');
    totalRow.id = 'totalRow';
    totalRow.classList.add('total-row');

    const labelCell = document.createElement('td');
    labelCell.textContent = 'Total Price:';
    labelCell.colSpan = 1;
    labelCell.style.border = '1px solid black';
    labelCell.style.padding = '8px';
    const totalCell = document.createElement('td');
    totalCell.textContent = totalPrice;
    totalCell.style.border = '1px solid black';
    totalCell.style.padding = '8px';
    totalRow.appendChild(labelCell);
    totalRow.appendChild(totalCell);
    const table = document.getElementById('groceryTable');
    table.appendChild(totalRow);

    console.log(`The total price is: ${totalPrice}`);
}


const getSumBtn = document.getElementById('getSumBtn');

if (getSumBtn) {
    getSumBtn.addEventListener('click', calculateAndDisplayTotal);
}

