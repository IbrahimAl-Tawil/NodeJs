// JavaScript for handling Local Storage operations

// Function to upload data to Local Storage
function uploadDataToLocalStorage() {
    const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        burialOptions: document.querySelector('input[name="burialOptions"]:checked')?.value,
        siteMarker: document.querySelector('input[name="siteMarker"]:checked')?.value,
        additionalInformation: document.getElementById("additionalInformation").value
    };
    localStorage.setItem("bookingFormData", JSON.stringify(formData));
    alert("Data uploaded to Local Storage successfully!");
}

// Function to download data from Local Storage and populate the form
function downloadDataFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem("bookingFormData"));
    if (storedData) {
        document.getElementById("fullName").value = storedData.fullName;
        document.getElementById("email").value = storedData.email;
        document.getElementById("phoneNumber").value = storedData.phoneNumber;
        event.preventDefault();
        if(storedData.burialOptions) {
            document.querySelector(`input[name="burialOptions"][value="${storedData.burialOptions}"]`).checked = true;
            event.preventDefault();
        }
        if(storedData.siteMarker) {
            document.querySelector(`input[name="siteMarker"][value="${storedData.siteMarker}"]`).checked = true;
            event.preventDefault();
        }
        document.getElementById("additionalInformation").value = storedData.additionalInformation;
        event.preventDefault();
    } else {
	document.getElementById("fullName").value = 'John Doe';
        document.getElementById("email").value = 'noemail@gmail.com';
        document.getElementById("phoneNumber").value = '9029999999';
        event.preventDefault();
        document.querySelector(`input[name="burialOptions"][value="tree"]`).checked = true;
        document.querySelector(`input[name="siteMarker"][value='none']`).checked = true;
        document.getElementById("additionalInformation").value = "info here";
        event.preventDefault();

    }
}

document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('uploadButton');
    const downloadButton = document.getElementById('downloadButton');

    if(uploadButton) {
        uploadButton.addEventListener('click', uploadDataToLocalStorage);
    } else {
        console.log('Upload button not found');
    }

    if(downloadButton) {
        event.preventDefault();
        downloadButton.addEventListener('click', downloadDataFromLocalStorage);
        
    } else {
        console.log('Download button not found');
    }
});


// Function to play or pause image audio description
var isPlaying = false;
function toggleSound() {
    if (isPlaying) {
        document.getElementById("audio").pause();
    } else {
        document.getElementById("audio").play();
    }
    isPlaying = !isPlaying;
    console.log(isPlaying);
}
