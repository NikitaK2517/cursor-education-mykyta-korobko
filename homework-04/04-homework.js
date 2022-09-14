const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  
const getPairs = (students) => {
      const pairs = []
      const men = []
      const women = []
      const studentMarks = []
      
  
      students.forEach((student, index) => {
          student[student.length - 1] === 'а' ? women.push(student) : men.push(student)
          studentMarks.push([student, marks[index]])
      })
      for (let i = 0; i < Math.floor(students.length / 2); i++) {
          pairs.push([`${men[i]} i ${women[i]}`, themes[i], getRandomNumber(1, 5)])
      }
      return { pairs, studentMarks }
  }
  
const { pairs, studentMarks} = getPairs(students);
  console.log(pairs);
  console.log(studentMarks);

  document.writeln(`<p>${pairs}</p><br>
                    <p>${studentMarks}</p>`);