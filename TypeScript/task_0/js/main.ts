interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Patate',
  lastName: 'Fritas',
  age: 23,
  location: 'Bordeaux',
};

const student2: Student = {
  firstName: 'Pastek',
  lastName: 'Summer',
  age: 25,
  location: 'Bordeaux',
};

const studentsList: Student[] = [student1, student2];

// Création du tableau
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = '1px solid black';
  firstNameCell.style.padding = '5px';

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '5px';

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
