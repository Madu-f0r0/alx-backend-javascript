export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((obj) => obj.location === city)
    .map((obj) => {
      obj.grade = 'N/A';
      for (const grade of newGrades) {
        if (grade.studentId === obj.id) {
            obj.grade = grade.grade;
        }
      }
      return obj;
    });
}
