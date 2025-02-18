function GetDeviceId() {
    let storedDeviceId = localStorage.getItem("deviceId");

    if (!storedDeviceId) {
        storedDeviceId = self.crypto.randomUUID(); // Generate new UUID if not found
        localStorage.setItem("deviceId", storedDeviceId);
    }

    console.log("WebGL Device ID:", storedDeviceId);
    return storedDeviceId;
}
