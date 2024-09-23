function satelliteLink() {
        window.location.href = "satellite.html"; // Replace with your desired page
}

function companyLink() {
        window.location.href = "company.html"; // Replace with your desired page
}

let simulationInterval; // Declare the interval variable globally to control it in both functions

function startSimulation() {
    // Retrieve input values
    const mass = parseFloat(document.getElementById('mass').value);
    const thrust = parseFloat(document.getElementById('thrust').value);
    const totalDistance = parseFloat(document.getElementById('distance').value) * 1000; // Convert km to meters

    // Calculate acceleration (force / mass)
    const acceleration = thrust / mass;
    document.getElementById('acceleration').innerText = acceleration.toFixed(2);

    // Initialize simulation variables
    let timeInSeconds = 0;
    let currentSpeed = 0;
    let currentDistance = 0;

    // Clear any previous simulation
    clearInterval(simulationInterval);

    // Simulation loop
    simulationInterval = setInterval(() => {
        timeInSeconds++;

        // Calculate time in minutes and hours
        const minutes = (timeInSeconds / 60).toFixed(2);
        const hours = (timeInSeconds / 3600).toFixed(2);

        // Update speed and distance
        currentSpeed += acceleration; // speed = acceleration * time
        currentDistance += currentSpeed; // distance = speed * time

        // Update displayed values
        document.getElementById('seconds').innerText = timeInSeconds;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('hours').innerText = hours;
        document.getElementById('metersPerSecond').innerText = currentSpeed.toFixed(2);
        document.getElementById('kilometersPerHour').innerText = (currentSpeed * 3.6).toFixed(2);
        document.getElementById('totalDistance').innerText = (currentDistance / 1000).toFixed(2);

        // Check if the halfway point is reached
        if (currentDistance >= totalDistance / 2) {
            clearInterval(simulationInterval);
            alert("Congratulations! The satellite has reached the halfway point.");
        }
    }, 1000); // Update every second
}

function stopSimulation() {
        // Stop the simulation by clearing the interval
        clearInterval(simulationInterval);
        
        // Reset the displayed values to 0
        document.getElementById('seconds').innerText = 0;
        document.getElementById('minutes').innerText = 0;
        document.getElementById('hours').innerText = 0;
        document.getElementById('metersPerSecond').innerText = 0;
        document.getElementById('kilometersPerHour').innerText = 0;
        document.getElementById('totalDistance').innerText = 0;
        document.getElementById('acceleration').innerText = 0;
    
        alert("The simulation has been stopped and reset.");
    }
