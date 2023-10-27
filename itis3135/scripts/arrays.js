const p1 = {name: "Mohammed Salah", salary: 22000000}
const p2 = {name: "Walter White", salary: 70000000}
const p3 = {name: "Kermit Da Frog", salary: 0}
const p4 = {name: "Dwight Schrute", salary: 35000}
const p5 = {name: "Donald Keyton", salary: 90000}
const p6 = {name: "Kevin Felonius", salary: 80}
const p7 = {name: "Stuart Felonius", salary: 80}
const p8 = {name: "Bob Felonius", salary: 100}

const person = [p1, p2, p3, p4, p5, p6, p7, p8];

const salaries = [];

for (let i = 0; i < person.length; i++) {
    salaries[i] = person[i].salary;
}

function addSalary(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const newPerson = {name: name, salary: salary};
    person.push(newPerson);
    salaries.push(salary);
    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";
}

function displayResults() {
    const resultsContainer = document.getElementById("results");
    let sum = 0;
    let max = 0;
    for(let i = 0; i < salaries.length; i++) {
        sum += salaries[i];
        if (salaries[i] > max) {
            max = salaries[i];
        }
    }

    let average = sum / salaries.length;
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    p.textContent = `Average: $${average.toLocaleString()}`;
    p1.textContent = `Highest: $${max.toLocaleString()}`;
    resultsContainer.innerHTML = "";
    resultsContainer.append(p);
    resultsContainer.append(p1);
}

function displaySalary() {
    const resultsContainer = document.getElementById("table");
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    headerRow.classList.add("table-header");
    const nameHeader = document.createElement("th");
    const salaryHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    salaryHeader.textContent = "Salary";
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(salaryHeader);
    table.appendChild(headerRow);
    for (let i = 0; i < person.length; i++) {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const salaryCell = document.createElement("td");
        nameCell.textContent = person[i].name;
        salaryCell.textContent = "$" + parseFloat(person[i].salary).toLocaleString();
        row.appendChild(nameCell);
        row.appendChild(salaryCell);
        table.appendChild(row);
    }
    resultsContainer.innerHTML = "";
    resultsContainer.appendChild(table);
}

document.getElementById("displayResultsButton").addEventListener("click", function() {
    displayResults();
});

document.getElementById("displaySalaryButton").addEventListener("click", function() {
    displaySalary();
});
