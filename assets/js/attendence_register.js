const pattern = [
    {
        month : "january",
        days : 31,
    },
    {
        month : "february",
        days : 28,
    },
    {
        month : "march",
        days : 31,
    },
    {
        month : "april",
        days : 30,
    },
    {
        month : "may",
        days : 31,
    },
    {
        month : "june",
        days : 30,
    },
    {
        month : "july",
        days : 31,
    },
    {
        month : "august",
        days : 31,
    },
    {
        month : "september",
        days : 30,
    },
    {
        month : "october",
        days : 31,
    },
    {
        month : "november",
        days : 30,
    },
    {
        month : "december",
        days : 31,
    },
]
let suffix = ["pre.","off day","Gaz. day","O.D. Pre.","G.D. Pre.","Paid lv.", "Abs.","Un-paid","Paid Days","Tot. Days"  ]


    const month = new Date().getMonth();

for (let i = 0; i < pattern.length; i++) {
    if(i === month)
    {
        console.log(pattern[i].month, pattern[i].days);
    }
    
}
    
let year = new Date().getFullYear()


dateHeaders();

function dateHeaders() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var monthName = today.toLocaleString('default', { month: 'short' });
    var firstDateOfMonth = new Date(year, month, 1);
    var lastDateOfMonth = new Date(year, month + 1, 0);
    console.log(firstDateOfMonth,lastDateOfMonth)
    document.getElementById("strtdate").innerHTML = `${firstDateOfMonth.getDate()}-${firstDateOfMonth.toLocaleString('default', { month: 'short' })}-${firstDateOfMonth.getFullYear()}`;
    document.getElementById("enddate").innerHTML = `${lastDateOfMonth.getDate()}-${lastDateOfMonth.toLocaleString('default', { month: 'short' })}-${lastDateOfMonth.getFullYear()}`;
    for (let i = 1; i <= lastDateOfMonth.getDate(); i++) {
        makeDateHeaders(new Date(year, month, i)
                                .toLocaleString('default', 
                                                { day: "numeric", weekday: 'short' }))
    }
    for (let j = 0; j < suffix.length; j++) {
        makeDateHeaders(suffix[j])
        
    }
}

function makeDateHeaders(DayDate) {
    var x = document.createElement("TH");
    var t = document.createTextNode(DayDate);
    x.appendChild(t);
    document.getElementById("tr").appendChild(x);
}
