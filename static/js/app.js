// from data.js
var tableData = data;

// YOUR CODE HERE!
d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });

function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("datetime");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}