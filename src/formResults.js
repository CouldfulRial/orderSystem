function showFormResults() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const resultsContainer = document.querySelector('.container');

    const checkedItems = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    resultsContainer.innerHTML = `
    <h2>Selected Items:</h2>
    <ul>
      ${checkedItems.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
    showFormResults();
});
