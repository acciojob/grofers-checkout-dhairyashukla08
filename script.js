const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	  const priceCells = document.querySelectorAll('.price');
      let total = 0;
	 priceCells.forEach(cell => {
        total += Number(cell.textContent);
      });

	const table = document.getElementById('groceryTable');
      const totalRow = table.insertRow();
      const totalCell = totalRow.insertCell(0);
      totalCell.colSpan = 2;
      totalCell.style.fontWeight = 'bold';
      totalCell.textContent = `Total: Rs ${total}`;
	getSumBtn.disabled = true;
    };
  
};

getSumBtn.addEventListener("click", getSum);

