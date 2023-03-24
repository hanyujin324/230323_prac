let studentList=["김혜윤","박지성","김도영","이동혁","abc"]


// .filter()메서드
const kimStudents = studentList.filter(function(student){
  return student.startsWith("김"); //startsWith: 어떤 문자열이 특정 문자로 시작하는지 확인하고 결과를 true, false로 반환
});
console.log(kimStudents);

// .filter()메서드+ 나머지 값을 가져오는 % 연산
const oddStudents = studentList.filter(function(student,index){
  return index % 2 === 0;
});
console.log(oddStudents);

// .filter()메서드 + 문자열 길이 비교
const threeLetterSudents = studentList.filter(function(student){
  return student.length === 3;
});
console.log(threeLetterSudents);

// .map()메서드 : 매핑한다고하여 상당히 자주 사용하는 메서드
const StudentWithSuffix = studentList.map(function(student){
  return student + "님";
});
console.log(StudentWithSuffix);

// .map()메서드 대문자로 변환
const upperCaseStudents = studentList.map(function(student){
  return student.toUpperCase(); //toUpperCase: 문자열을 대문자로 변환하여 반환
});
console.log(upperCaseStudents);