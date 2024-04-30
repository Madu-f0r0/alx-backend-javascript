const fs = require('fs');

function countStudents(filePath) {
  try {
    const csvFileData = fs.readFileSync(filePath, 'utf-8');
    let studentsCount = 0;
    const studentsField = {};

    const dataArray = csvFileData.split('\n').filter(
      (element) => element !== '',
    );

    for (const element of dataArray) {
      if (element !== dataArray[0] && element.length > 0) {
        const field = element.split(',')[3];
        const firstName = element.split(',')[0];

        if (!(field in studentsField)) {
          studentsField[field] = [];
        }
        studentsField[field].push(firstName);
        studentsCount += 1;
      }
    }

    console.log(`Number of students: ${studentsCount}`);

    for (const key in studentsField) {
      if (Object.hasOwnProperty.call(studentsField, key)) {
        console.log(`Number of students in ${key}: ${studentsField[key].length}. List: ${studentsField[key].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
