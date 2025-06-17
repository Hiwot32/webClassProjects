
  function setReminder(name, timeStr) {
  const [hour, minute] = timeStr.split(':').map(Number);
  const now = new Date();
  const target = new Date();
  
  target.setHours(hour);
  target.setMinutes(minute);
  target.setSeconds(0);

  const timeDiff = target.getTime() - now.getTime();

  if (timeDiff < 0) {
    alert( `Too late! ${name} time has already passed.`);
    return;
  }

  if (timeDiff === 0) {
    alert( `It's time for ${name} prayer.`);
    return;
  }

  setTimeout(() => {
    alert(`It's time for ${name} prayer.`);
  }, timeDiff);

  alert(`Reminder set for ${name} at ${timeStr}`);
}
