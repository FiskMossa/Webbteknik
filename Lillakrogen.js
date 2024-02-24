  
$(document).ready(function() {
        $("#searchIcon").hover(
            function() {
                $(this).animate({
                    width: "2.2%",  // Desired width when hovered over
                    height: "22%"  // Desired height when hovered over
                }, 200);  // Animation duration in milliseconds
            },
            function() {
                $(this).animate({
                    width: "2%",  // Original width
                    height: "20%"  // Original height
                }, 200);  // Animation duration in milliseconds
            }
        );
});

$(document).ready(function() {
        $("#menuIcon").hover(
            function() {
                $(this).animate({
                    width: "2.2%",  // Desired width when hovered over
                    height: "22%"  // Desired height when hovered over
                }, 200);  // Animation duration in milliseconds
            },
            function() {
                $(this).animate({
                    width: "2%",  // Original width
                    height: "20%"  // Original height
                }, 200);  // Animation duration in milliseconds
            }
        );
});

// Get references to the search icon and search bar
const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');

// Function to toggle the visibility of the search bar
function toggleSearch() {
        searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
}

// Function to close the search bar
function closeSearch() {
        searchBar.style.display = 'none';
}

// Add click event listener to the search icon
searchIcon.addEventListener('click', toggleSearch);

document.addEventListener("DOMContentLoaded", function() {
        // Event listener for the menu icon
        document.getElementById("menuIcon").addEventListener("click", function() {
                var popupMenu = document.getElementById("popupMenu");
                if (popupMenu.style.left === "-15%") {
                        popupMenu.style.left = "0";
                } else {
                        popupMenu.style.left = "-15%";
                }
        });
        // Event listener for the close button
        document.getElementById("closeButton").addEventListener("click", function() {
                document.getElementById("popupMenu").style.left = "-15%";
        });
        
        // Event listener for the open calendar button
        document.getElementById("openCalendarButton").addEventListener("click", function() {

                var popupCalendar = document.createElement("div");
                popupCalendar.classList.add("popupCalendar");
                popupCalendar.innerHTML = `
                        <h2>Select a Date</h2>
                        <input type="date" id="datePicker">
                        <button id="nextButton">Next</button>
                `;
                var popupOverlay = document.getElementById("popupOverlay");
                var popupCalendar = document.getElementById("popupCalendar");
                popupOverlay.style.display = "block";
                popupCalendar.classList.add("active");

                document.body.appendChild(popupCalendar);

                document.getElementById("nextButton").addEventListener("click", function() {
                        var popupCalendar = document.getElementById("popupCalendar");
                        popupCalendar.style.display = "none";
                    
                        // Show the next popup window
                        var popupPersons = document.getElementById("popupPersons");
                        popupPersons.style.display = "block";                        
                });

                document.getElementById("xButton").addEventListener("click", function() {
                    var popupOverlay = document.getElementById("popupOverlay");
                    var popupCalendar = document.getElementById("popupCalendar");
                    popupOverlay.style.display = "none";
                    popupCalendar.classList.remove("active");
                });

                const calendar = document.getElementById("calendar");

                function generateCalendar(year, month) {
                        const daysInMonth = new Date(year, month + 1, 0).getDate();
                        const firstDayOfMonth = new Date(year, month, 1).getDay();

                        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

                        const monthName = months[month];

                        calendar.innerHTML = ""; // Clear the calendar before generating

                        const monthHeader = document.createElement("div");
                        monthHeader.classList.add("month");
                        monthHeader.textContent = monthName;
                        calendar.appendChild(monthHeader);

                        const weekdaysRow = document.createElement("div");
                        weekdaysRow.classList.add("weekdays");
                        weekdays.forEach(day => {
                                const weekday = document.createElement("div");
                                weekday.classList.add("weekday");
                                weekday.textContent = day;
                                weekdaysRow.appendChild(weekday);
                        });
                        calendar.appendChild(weekdaysRow);

                        const daysContainer = document.createElement("div");
                        daysContainer.classList.add("days");

                        // Add empty cells for the days before the first day of the month
                        for (let i = 0; i < firstDayOfMonth; i++) {
                                const emptyCell = document.createElement("div");
                                emptyCell.classList.add("day", "empty");
                                daysContainer.appendChild(emptyCell);
                        }

                        // Add days of the month
                        for (let day = 1; day <= daysInMonth; day++) {
                                const dayCell = document.createElement("div");
                                dayCell.classList.add("day");
                                dayCell.textContent = day;
                                daysContainer.appendChild(dayCell);
                        }

                        calendar.appendChild(daysContainer);
                }

                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth = currentDate.getMonth();

                generateCalendar(currentYear, currentMonth);
        });
});

function changeAppearance(element, hover) {
    if (hover) {
        // Change the appearance of the element when the mouse hovers over it
        element.style.color = "#774f17"; // Change text color to blue
    } else {
        // Revert the appearance when the mouse moves away
        element.style.color = ""; // Reset text color
    }
}

function changeImageAppearance(element, hover) {
    if (hover) {
        // Change the appearance of the image when the mouse hovers over it
        element.style.opacity = "0.7"; // Reduce opacity
    } else {
        // Revert the appearance when the mouse moves away
        element.style.opacity = "1"; // Restore original opacity
    }
}

function changeBokaBord(element, hover) {
        if (hover) {
            // Change the appearance of the element when the mouse hovers over it
            element.style.color = "#AD9279"; // Change text color to blue
        } else {
            // Revert the appearance when the mouse moves away
            element.style.color = ""; // Reset text color
        }
}