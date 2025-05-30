const listingForm = document.getElementById('submissionForm') as HTMLFormElement | null;


if (listingForm) {
    listingForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const listingTitleElement: string = (<HTMLInputElement>document.getElementById('listingTitle')).value;
        const description: string = (<HTMLInputElement>document.getElementById('description')).value;
        const rent: number = (<HTMLInputElement>document.getElementById('rent')).valueAsNumber;
        const address: string = (<HTMLInputElement>document.getElementById('address')).value;
        const numRooms: number = (<HTMLInputElement>document.getElementById('numRooms')).valueAsNumber;
        const contactInfo: string = (<HTMLInputElement>document.getElementById('contactInfo')).value;

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
                console.log('Submission successful:', result);
                listingForm.reset();
            }

        } catch (error) {
            console.error("Error during submission: ", error);
        }
    })
}

const listingsButton = document.getElementById('listingsButton') as HTMLButtonElement | null;

if (listingsButton) {
    listingsButton.addEventListener('click', () => { 
        window.location.href = '/listings.html';
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const listingsContainer = document.getElementById('listingsContainer') as HTMLDivElement | null;

    if (listingsContainer) {
        try {
            const response = await fetch('/api/all');
            if (response.ok) {
                interface ClientListing {
                    _id: string; 
                    listingTitle: string;
                    description: string;
                    rent: number;
                    address: string;
                    numRooms: number;
                    contactInfo: string;
                }
                const data: ClientListing[] = await response.json();

                listingsContainer.innerHTML = ''; 

                if (data.length === 0) {
                    listingsContainer.innerHTML = '<p>No listings available at the moment.</p>';
                    return;
                }

                data.forEach((listing: ClientListing) => {
                    const listingElement = document.createElement('div');
                    listingElement.classList.add('listing-item'); 
                    listingElement.innerHTML = `
                        <h3>${listing.listingTitle}</h3>
                        <p><strong>Rent:</strong> $${listing.rent.toFixed(2)}</p>
                        <p><strong>Description:</strong> ${listing.description}</p>
                        <p><strong>Address:</strong> ${listing.address}</p>
                        <p><strong>Rooms:</strong> ${listing.numRooms}</p>
                        <p><strong>Contact:</strong> ${listing.contactInfo}</p> 
                        <hr>
                    `; 
                    listingsContainer.appendChild(listingElement);
                });
            } else {
                listingsContainer.innerHTML = `<p>Error fetching listings: ${response.statusText}</p>`;
                console.error('Error fetching listings:', response.statusText);
            }
        } catch (error) {
            listingsContainer.innerHTML = `<p>An error occurred while fetching listings. Please try again later.</p>`;
            console.error('Error fetching listings:', error);
        }
    }
});