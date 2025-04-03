// Function to trigger native method call for device data
document.getElementById('requestButton').addEventListener('click', function() {
    // Check if the Android interface and method are available
    if (window.android && typeof window.android.requestNativeBraintreeDeviceData === 'function') {
        // Call the native method to request device data
        window.android.requestNativeBraintreeDeviceData();
    } else {
        showAlert('Native interface "requestNativeBraintreeDeviceData" not available.');
    }
});

// Function to receive data from the native app and update the textarea
function setNativeBraintreeDeviceData(deviceData) {
    // Update the textarea with the received device data
    document.getElementById('deviceData').value = deviceData;
    showAlert('Device data received successfully.');
}

// Create the android object on window to handle native-to-web communication
window.android = {
    setNativeBraintreeDeviceData: setNativeBraintreeDeviceData
};

// Function to trigger native method call for app version
document.getElementById('requestAppVersion').addEventListener('click', function() {
    // Check if the Android interface and method are available
    if (window.android && typeof window.android.appVersion === 'function') {
        // Call the native method to request the app version
        const version = window.android.appVersion();
        document.getElementById('appVersion').textContent = 'App Version: ' + version;
    } else {
        showAlert('Native interface "appVersion" not available.');
    }
});

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