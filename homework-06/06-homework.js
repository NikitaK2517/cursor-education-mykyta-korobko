const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// get list of subjects
const getSubjects = (obj) => {
  const upperCasedSubjects = Object.keys(obj.subjects).map(item => {
    const normalizedSubject = item.slice(1).replace('_', ' ');
    return item.slice(0, 1).toUpperCase() + normalizedSubject; 
  });
  return upperCasedSubjects;
}

// get average mark
const getAverageMark = (obj) => {
  const marks = Object.values(obj.subjects).flat();
  const total = marks.reduce((total, current) => total + current);
  return +(total / marks.length).toFixed(2);
}

// get student info
const getStudentInfo = (obj) => {
  const {course, name} = obj;
  return {course, name, averageMark: getAverageMark(obj)};
}
console.log(getStudentInfo(students[1]));

// get student names
const getStudentNames = (arrOfObj) => arrOfObj.map(obj => obj.name).sort();

// get best student
const getBestStudent = (arrOfObj) => {
  const modifiedArrOfObj = arrOfObj.map(obj => getStudentInfo(obj));
  const bestStudent = modifiedArrOfObj.reduce((prev, curr) => {
    if (prev.averageMark > curr.averageMark) {
      return prev.name;
    } else {
      return curr.name;
    }
  });
  return bestStudent;
}

// get letter counter
const letterCounter = (str) => {
  const strArr = str.toLowerCase().split('');
  const result = strArr.reduce((count, current) => {
    if (!count[current]) {
      count[current] = 1;
    } else {
      count[current] += 1;
    }
    return count;
  }, {});
  return result;
}

document.writeln(`<p>Функція №1: ${getSubjects(students[0])}</p><br>
                  <p>Функція №2: ${getAverageMark(students[0])}</p><br>
                  <p>Функція №3: ${JSON.stringify(getStudentInfo(students[1]))}</p><br>
                  <p>Функція №4: ${getStudentNames(students)}</p><br>
                  <p>Функція №5: ${getBestStudent(students)}</p><br>
                  <p>Функція №6: ${JSON.stringify(letterCounter('test'))}</p>`);