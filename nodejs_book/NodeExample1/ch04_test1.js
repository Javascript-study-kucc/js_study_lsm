let url = require('url');

//주소 문자열을 URL 객체로 만들기
let curURL = url.parse('http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

//URL 객체를 주소 문자열로 만들기
let curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL); //URL 객체

//요청 파라미터 구분하기
let querystring = require('querystring');
let param = querystring.parse(curURL.query); //parse 메소드는 요청 파라미터 문자열을 파싱하여 객체로 만들어 줌.

console.log(param) //요청 파라미터
console.log('요청 파라미터 중 query의 값: %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param)); //stringify 메소드는 객체 안에 들어 있는 요청 파라미터를 다시 하나의 문자열로 바꿀 때 사용