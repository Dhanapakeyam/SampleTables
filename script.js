var tab = document.createElement("table");
tab.setAttribute("class","table");
document.body.append(tab);

var theadElement = document.createElement("thead");
theadElement.setAttribute("class", "thead-dark");
tab.append(theadElement);

var trElement = document.createElement("tr");
theadElement.append(trElement);

var thElement = document.createElement("th");
thElement.setAttribute("scope", "col1");
thElement.innerHTML ="First";
trElement.append(thElement);

var thElement1 = document.createElement("th");
thElement1.setAttribute("scope", "col1");
thElement1.innerHTML ="Middle";
trElement.append(thElement1);

var thElement2 = document.createElement("th");
thElement2.setAttribute("scope", "col1");
thElement2.innerHTML ="Last";
trElement.append(thElement2);

var tbodyElement = document.createElement("tbody");
document.body.append(tbodyElement);

var trBodyElement = document.createElement("tr");
tbodyElement.append(trBodyElement);

var tdElement = document.createElement("td");
tdElement.innerHTML = "Mark";
tdElement.style.width="200px";
trBodyElement.append(tdElement);

var tdElement2 = document.createElement("td");
tdElement2.innerHTML = "Otto";
tdElement2.style.width="200px";
trBodyElement.append(tdElement2);

var tdElement3 = document.createElement("td");
tdElement3.innerHTML = "@mdo";
tdElement3.style.width="200px";
trBodyElement.append(tdElement3);