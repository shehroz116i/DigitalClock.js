function updateclock() {

   const now = new Date();
    let hours = now.getHours();
   const minutes = now.getMinutes().toString().padStart(2, 0);
   const meridium = hours >= 12 ? "pm" : "am";
   hours = hours% 12 || 12;
   hours = hours.toString().padStart(2, 0);
   const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}:${meridium}`;
   document.getElementById("clock").textContent = timeString;  

}

updateclock();
setInterval(updateclock, 1000);
