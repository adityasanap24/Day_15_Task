function addData(el) {
  var table = document.getElementById("list");
  var tr = table.insertRow();
  el.form.querySelectorAll("input").forEach(function (el) {
    if (el.type === "radio") {
      if (el.checked) {
        var cell = tr.appendChild(document.createElement("td"));
        cell.textContent = el.value;
        el.checked = false;
      }
    } else {
      var cell = tr.appendChild(document.createElement("td"));
      cell.textContent = el.value;
      el.value = "";
    }
  });
}
