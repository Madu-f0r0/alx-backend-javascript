interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Chinua',
  lastName: 'Achebe',
  age: 25,
  location: 'Ogidi',
}

const studentTwo: Student = {
    firstName: 'Chimamanda',
    lastName: 'Adichie',
    age: 23,
    location: 'Nsukka',
  }

const studentsArray: Student[] = [studentOne, studentTwo];

const renderTable = (students: Student[]) => {
  const table = document.createElement('table');

  students.forEach(student => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const locationCell = row.insertCell();
  });

  document.body.appendChild(table);
};

renderTable(studentsArray);
