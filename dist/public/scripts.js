"use strict";
const listingForm = document.getElementById('submissionForm');
if (listingForm) {
    listingForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const listingTitleElement = document.getElementById('listingTitle').value;
        const description = document.getElementById('description').value;
        const rent = document.getElementById('rent').valueAsNumber;
        const address = document.getElementById('address').value;
        const numRooms = document.getElementById('numRooms').valueAsNumber;
        const contactInfo = document.getElementById('contactInfo').value;
        const formData = {
            listingTitle: listingTitleElement,
            description: description,
            rent: rent,
            address: address,
            numRooms: numRooms,
            contactInfo: contactInfo
        };
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const result = await response.json();
                // console.log('Submission successful:', result);
                console.log('ok');
            }
        }
        catch (error) {
            console.error("Error during submission: ", error);
        }
    });
}
