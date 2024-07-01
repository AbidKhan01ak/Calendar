const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function showCalendar() {
    const year = document.getElementById('year-input').value;
    const container = document.querySelector('.container');
    container.innerHTML = '';

    if (isNaN(year) || year === '') {
        alert('Please enter a valid year');
        return;
    }

    // Force reflow to re-trigger the animation
    container.style.animation = 'none';
    container.offsetHeight; // Trigger a reflow, flushing the CSS changes
    container.style.animation = null;

    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
        const monthContainer = document.createElement('div');
        monthContainer.className = 'month';

        const monthName = document.createElement('h3');
        monthName.textContent = months[monthIndex];
        monthContainer.appendChild(monthName);

        const yearElement = document.createElement('h3');
        yearElement.textContent = year;
        monthContainer.appendChild(yearElement);

        const weekdays = document.createElement('ul');
        weekdays.className = 'weekdays';
        ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].forEach(day => {
            const li = document.createElement('li');
            li.textContent = day;
            weekdays.appendChild(li);
        });
        monthContainer.appendChild(weekdays);

        const days = document.createElement('ul');
        days.className = 'days';
        const firstDay = new Date(year, monthIndex, 1).getDay();
        const numOfDays = new Date(year, monthIndex + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('li');
            days.appendChild(emptyCell);
        }

        for (let day = 1; day <= numOfDays; day++) {
            const dayCell = document.createElement('li');
            dayCell.textContent = day;
            days.appendChild(dayCell);
        }

        monthContainer.appendChild(days);
        container.appendChild(monthContainer);
    }
}
