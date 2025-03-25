document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("working-hours-form");
    const tableBody = document.getElementById("work-log-body");

    // Load saved data from localStorage
    loadWorkLog();

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const workDate = document.getElementById("work-date").value;
        const hoursWorked = document.getElementById("hours-worked").value;
        const workDescription = document.getElementById("work-description").value;

        if (!workDate || !hoursWorked) {
            alert("Please enter the date and hours worked.");
            return;
        }

        // Add entry to table
        addEntryToTable(workDate, hoursWorked, workDescription);

        // Save to localStorage
        saveWorkLog();

        // Reset form
        form.reset();
    });

    function addEntryToTable(date, hours, description) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${date}</td>
            <td>${hours}</td>
            <td>${description || "No description"}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteEntry(this)">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    }

    function saveWorkLog() {
        const rows = document.querySelectorAll("#work-log-body tr");
        let workLog = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            workLog.push({
                date: cells[0].textContent,
                hours: cells[1].textContent,
                description: cells[2].textContent,
            });
        });

        localStorage.setItem("workLog", JSON.stringify(workLog));
    }

    function loadWorkLog() {
        const savedLog = JSON.parse(localStorage.getItem("workLog")) || [];
        savedLog.forEach(entry => addEntryToTable(entry.date, entry.hours, entry.description));
    }

    window.deleteEntry = function (button) {
        button.parentElement.parentElement.remove();
        saveWorkLog();
    };
});
