// GET AVERAGE
const grades = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];

const grades2 = [56, 23, 89, 42, 75, 11, 68, 34, 91, 19];

function getAverage(elements) {
  let sum = 0;
  elements.forEach((element) => {
    sum += element;
  });
  return sum / elements.length;
}
const result = getAverage(grades);

// GET GRADE
const score = 60;

function getGrade(element) {
  if (element === 100) {
    return 'A++';
  } else if (element >= 90 && element < 100) {
    return 'A';
  } else if (element >= 80 && element < 90) {
    return 'B';
  } else if (element >= 70 && element < 80) {
    return 'C';
  } else if (element >= 60 && element < 70) {
    return 'D';
  } else if (element >= 0 && element < 60) {
    return 'F';
  } else {
    return 'Ваша оценка не соответсвует системе баллов ';
  }
}

getGrade(score);
///

// PASSINGGRADE

function hasPassingGrade(item) {
  const getGrades = getGrade(item);

  switch (getGrades) {
    case 'A++':
      return true;
      break;
    case 'A':
      return true;
      break;
    case 'B':
      return true;
      break;
    case 'C':
      return true;
      break;
    case 'D':
      return true;
      break;
    case 'F':
      return false;
      break;
  }
}

hasPassingGrade(100);

// STUDENTMSG

function studentMsg(totalScores, studentScore) {
  const getAverage2 = getAverage(totalScores);
  const getGrades2 = getGrade(studentScore);
  const isPass = hasPassingGrade(studentScore);

  if (isPass) {
    return `Class average: ${getAverage2}. Your grade: ${getGrades2}. You passed the course.`;
  } else {
    return `Class average: ${getAverage2}. Your grade: ${getGrades2}. You failed the course.`;
  }
}
studentMsg(grades, 37);
studentMsg(grades2, 100);
