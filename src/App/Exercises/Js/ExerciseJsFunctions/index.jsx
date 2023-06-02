import './styles.css';

export function ExerciseJsFunctions() {
  //   const tablicaPierwotna = [
  // { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
  // { id: 2, name: 'Eve2', grades: [6, 6, 6, 6, 6, 5, 6] },
  //   ];

  //   function calcAvr(arr) {
  //     let sum = 0;
  //     let totalGrades = 0;

  //     arr.forEach((student) => {
  //       student.grades.forEach((grade) => {
  //         sum += grade;
  //         totalGrades++;
  //       });
  //     });

  //     return sum / totalGrades;
  //   }
  //   function calcAverageGrades(student) {
  //     const sum = student.grades.reduce((a, b) => a + b, 0);
  //     const average = sum / student.grades.length;
  //     return average;
  //   }

  //   tablicaPierwotna.forEach((student) => {
  //     student.averageGrade = calcAverageGrades(student);
  //   });

  // const srednia = calcAvr(tablicaPierwotna);
  // let srednia1 = reduce(tablicaPierwotna[0].grades);
  // console.log(tablicaPierwotna[1].grades);

  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1] },
    { id: 1, name: 'Eve 1', grades: [3, 2, 4, 2, 1] },
  ];
  const calcAvr = (peopleArr) => {
    const returnArr = [];
    peopleArr.forEach((person) => {
      let sum = 0;
      let avr = 0;
      person.grades.forEach((num) => (sum += num));
      avr = sum / person.grades.length;
      returnArr.push({ id: person.id, name: person.name, avr });
    });
    return returnArr;
  };
  const tablicaWynikowa = calcAvr(tablicaPierwotna);
  console.log(tablicaPierwotna, tablicaWynikowa);

  return (
    <div>
      <div>
        <tablicaPierwotna />
        <tablicaWynikowa />
      </div>
    </div>
  );
}
