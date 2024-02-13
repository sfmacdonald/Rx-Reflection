document.addEventListener('DOMContentLoaded', function () {
    const addMedicationBtn = document.querySelector('.add-medication-btn');
    const saveMedicationBtn = document.getElementById('saveMedication');
    const medicationItems = document.querySelector('.medication-items');
    const printMedicationListBtn = document.querySelector('.print-medication-list-btn');

    function showModal() {
        var myModal = new bootstrap.Modal(document.getElementById('medicationAddModal'));
        myModal.show();
    }

    addMedicationBtn.addEventListener('click', showModal);

    saveMedicationBtn.addEventListener('click', async function () {
        const medicationName = document.getElementById('medicationName').value;
        const strength = document.getElementById('strength').value;
        const dosage = document.getElementById('dosage').value;
        const frequency = document.getElementById('frequency').value;
        const route = document.getElementById('route').value;
        const duration = document.getElementById('duration').value;

        // Create an object with medication data
        const medicationData = {
            medicationName,
            strength,
            dosage,
            frequency,
            route,
            duration
        };

        try {
            const response = await fetch('/api/medications/add-medication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(medicationData)
            });

            if (!response.ok) {
                throw new Error('Failed to add medication');
            }



            // Medication added successfully, now add it to the table
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
            <td>${medicationName}</td>
            <td>${strength}</td>
            <td>${dosage}</td>
            <td>${frequency}</td>
            <td>${route}</td>
            <td>${duration}</td>
            <td><button class="remove-btn btn btn-danger btn-sm">Remove</button></td>
            `;
            medicationItems.appendChild(newRow);

            attachRemoveListener(newRow);

            // Reset the form fields and hide the modal
            document.getElementById('medicationForm').reset();
            var myModalEl = document.getElementById('medicationAddModal');
            var modal = bootstrap.Modal.getInstance(myModalEl);
            modal.hide();
        } catch (error) {
            console.error('Error adding medication:', error);
            // Handle errors as needed (e.g., display error message to the user)
        }
    });


    // Add event listener for the print button
    printMedicationListBtn.addEventListener('click', function () {
        window.print(); // Use the browser's print functionality
    });

    function attachRemoveListener(row) {
        row.querySelector('.remove-btn').addEventListener('click', function () {
            var removeModal = new bootstrap.Modal(document.getElementById('removeMedicationModal'));
            var confirmRemoveBtn = document.getElementById('confirmRemove');

            // Remove any existing event listeners to avoid multiple removals
            var newConfirmRemoveBtn = confirmRemoveBtn.cloneNode(true);
            confirmRemoveBtn.parentNode.replaceChild(newConfirmRemoveBtn, confirmRemoveBtn);

            // Add event listener to the new confirm button
            newConfirmRemoveBtn.addEventListener('click', function () {
                row.remove();
                removeModal.hide();
            });

            removeModal.show();
        });
    }
});