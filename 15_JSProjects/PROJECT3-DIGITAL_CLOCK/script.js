const clock = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  clock.innerHTML = `
    <span class="time">${timeString}</span>
    <span class="date">${dateString}</span>
  `;
}

updateClock();
setInterval(updateClock, 1000);