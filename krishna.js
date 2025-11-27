// L1 - Simulating a Loading Screen with setInterval

// Start logging "Loading..." every 1 second
const intervalId = setInterval(() => {
    console.log("Loading...");
}, 1000);

// After 5 seconds, stop the interval and log success
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
}, 5000);