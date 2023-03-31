const day = document.getElementById('day')
const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

const eventDate = new Date()
eventDate.setDate(eventDate.getDate() + 3)
eventDate.setHours(eventDate.getHours() + 1)
eventDate.setMinutes(eventDate.getMinutes() + 1)
eventDate.setSeconds(eventDate.getSeconds() + 1)

function countDown() {
   const today = new Date()

   const segTotal = (eventDate - today)/1000;

   const days = Math.floor(segTotal / 60 / 60 / 24);
   const hours = Math.floor(segTotal / 60 / 60) % 24;
   const mins = Math.floor(segTotal / 60) % 60;
   const secs = Math.floor(segTotal) % 60;

   day.innerHTML = days < 10 ? `0${days}` : days;
   hour.innerHTML = time(hours)
   min.innerHTML = time(mins)
   sec.innerHTML = time(secs)
}

function time (time) {
    return time < 10? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);

