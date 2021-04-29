# countdown-timer
Vanilla Javascript tutorial project #11 presented by John Smilga



## js
-select and save into variables: giveaway, deadline and deadline-format h4 items(querySelectorAll('.deadline-format h4'));

## dynamically set giveaway date
-new Date(year, month[zero based index 0-11], day, hours[24], mins, secs, milisecs);

year = futureDate.getFullYear();
hours = futureDate.getHours();
mins = futureDate.getMinutes();

month = futureDate.getMonth();
    month = months[month];  (months = array in initial setup)

date = futureDate.getDate();
weekday = futureDate.getDay() = returns a value[0-6],
    
