let args=process.argv;
console.log(args);
console.log('A');
console.log('B');
if (false) {
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D')

//출력 결과:
// PS D:\KUCC\Js_study_lsm\main_content\sk_node.js> node conditional.js egoing
// [
//   'C:\\Program Files\\nodejs\\node.exe', -> node js 런타임이 어디 위치하는지
//   'D:\\KUCC\\Js_study_lsm\\main_content\\sk_node.js\\conditional.js', -> 파일 디렉토리
//   'egoing' -> 입력값
// 추후 계속 입력값 추가 가능
// ]
// A
// B
// C2
// D