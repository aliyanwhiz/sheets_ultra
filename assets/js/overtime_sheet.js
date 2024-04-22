let suffix = ["pre.","off day","Gaz. day","O.D. Pre.","G.D. Pre.","Paid lv.", "Abs.","Un-paid","Paid Days","Tot. Days"  ]
    
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
    document.getElementById("strtdate2").innerHTML = `${firstDateOfMonth.getDate()}-${firstDateOfMonth.toLocaleString('default', { month: 'short' })}-${firstDateOfMonth.getFullYear()}`;
    document.getElementById("enddate").innerHTML = `${lastDateOfMonth.getDate()}-${lastDateOfMonth.toLocaleString('default', { month: 'short' })}-${lastDateOfMonth.getFullYear()}`;
    document.getElementById("enddate2").innerHTML = `${lastDateOfMonth.getDate()}-${lastDateOfMonth.toLocaleString('default', { month: 'short' })}-${lastDateOfMonth.getFullYear()}`;
    document.getElementById("enddate3").innerHTML = `${lastDateOfMonth.getDate()}-${lastDateOfMonth.toLocaleString('default', { month: 'short' })}-${lastDateOfMonth.getFullYear()}`;
    for (let i = 1; i <= lastDateOfMonth.getDate(); i++) {
        makeDateHeaders(new Date(year, month, i)
                                .toLocaleString('default', 
                                                { day: "numeric", weekday: 'short' }))
    }
    // for (let j = 0; j < suffix.length; j++) {
        makeDateHeaders("total")
        
    // }
}

function makeDateHeaders(DayDate) {
    var x = document.createElement("TH");
    var t = document.createTextNode(DayDate);
    x.appendChild(t);
    document.getElementById("tr").appendChild(x);
}
