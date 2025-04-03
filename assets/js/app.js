// Function to trigger native method call for device data
document.getElementById('requestButton').addEventListener('click', function() {
    if (window.android && typeof window.android.requestNativeBraintreeDeviceData === 'function') {
        // Call the native method to request device data
        window.android.requestNativeBraintreeDeviceData();
    } else {
        showAlert('Native interface "requestNativeBraintreeDeviceData" not available.');
    }
});

// Function to trigger native method call for app version
document.getElementById('requestAppVersion').addEventListener('click', function() {
    if (window.android && typeof window.android.appVersion === 'function') {
        // Call the native method to request app version
        const appVersion = window.android.appVersion();
        document.getElementById('appVersion').innerText = 'App Version: ' + appVersion;
    } else {
        showAlert('Native interface "appVersion" not available.');
    }
});

// Function to receive data from the native app and update the textarea
function setNativeBraintreeDeviceData(deviceData) {
    // Update the textarea with the received device data
    document.getElementById('deviceData').value = deviceData;
    showAlert('Device data received successfully.');
}

// Function to set token from native app
function setToken(token) {
    // Display the token in the text field
    document.getElementById('tokenField').value = token;
    showAlert('Token received successfully: ' + token);
}

// Function to show the custom alert
function showAlert(message) {
    var alertBox = document.getElementById('customAlert');
    alertBox.textContent = message;  // Set the message
    alertBox.style.display = 'block';  // Show the alert box

    // Hide the alert after 3 seconds
    setTimeout(function() {
        alertBox.style.display = 'none';
    }, 1000);
}

// Create the android object on window to handle native-to-web communication
window.app = {
    setNativeBraintreeDeviceData: setNativeBraintreeDeviceData
};

// Create the app object to handle native-to-web communication from native app
window.app = {
    setToken: setToken  // Adding the setToken method to the app object for native-to-web communication
};