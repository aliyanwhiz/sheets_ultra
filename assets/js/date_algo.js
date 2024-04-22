let str_date = new Date("2024/2/3");
    let end_date = new Date("2024/3/3");

    while (str_date <= end_date) {
        // Format the date as you prefer and log the day with the date
        console.log(`${str_date.toLocaleString('default', { weekday: 'short' , day: 'numeric' })}`); // Logs the date in YYYY-MM-DD format and the day

        // Move to the next day
        str_date.setDate(str_date.getDate() + 1);
    }