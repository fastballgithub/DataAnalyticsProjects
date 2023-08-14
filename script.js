const toggleBtn = document.getElementById("toggle-btn");
const AMPM = document.getElementById("AMPM");
let use24HourFormat = true;


function updateTime() {
    //
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    AMPM.style.display = "none"

    if (!use24HourFormat) {
      hours = hours % 12 || 12;
      AMPM.style.display = "block"
    }
        
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    
    const date = { year: "numeric", month: "long", day: "numeric" };
    const day = { weekday: "long"};
    
    // Start
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, date);
    document.getElementById('day').textContent = now.toLocaleDateString(undefined, day);
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('session').textContent = ampm;
    
}

toggleBtn.addEventListener("click", () => {
  use24HourFormat = !use24HourFormat;
  updateTime();
  
});

updateTime();
setInterval(updateTime, 1000);