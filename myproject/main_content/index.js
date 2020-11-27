function main() {
const target=document.getElementById('major_select'); 
let major_text=target.options[target.selectedIndex].text; //text를 얻고
let major_value=target.options[target.selectedIndex].value; //value를 얻고
document.getElementById('major_name').textContent=major_text //보건환경융합과학부와 같은 과의 한글 이름 표시
document.getElementById('link_').innerHTML=`과에 대한 더 자세한 정보를 원한다면..<br>
-><a href=${get_link(major_value)}, target="_blank"> ${major_text} 홈페이지</a>`
document.getElementById('jeon_table').innerHTML=`<table border="1" class='jeon'>
<caption><b>이중전공 요구 학점</b></caption>
<tr>
  <td >전공선택</td>
  <td>${get_hakjum(major_value)[0]}</td>
</tr>
<tr>
  <td>전공필수</td>
  <td>${get_hakjum(major_value)[1]}</td>
</tr>
<tr>
<td>계</td>
<td>${get_hakjum(major_value)[2]}</td>
</tr>
  </table>
  `
  document.getElementById('book_explain').innerHTML=to_study_text(to_study(major_value)); //선수과목에 대한 설명과 추천 텍스트
  document.getElementById('book_units').innerHTML=books_image(to_study(major_value)[1]); //책 이미지 테이블 받고
}


function get_link(mv){ //학과별 홍페이지 링크 지정
  let major_link='';
  if (mv==='bme'){
    major_link="http://bmeng.korea.ac.kr/bmeng/index.do#none";
  } else if (mv==='bsms'){
      major_link='http://bsm.korea.ac.kr/bsm/index.do#none';
    } else if (mv==='hes'){
      major_link='https://hes.korea.ac.kr/hes/index.do#none';
    } else { //hpm
      major_link='https://hpm.korea.ac.kr/hpm/index.do#none';
    }
    return major_link;
  }

function get_hakjum (mv){ //mv(major_value) 받아서 전선, 전필, 전합이 순서대로 들어있는 Array return
  let jeon_list=[]; let jeonsun=0; let jeonpil=0; let jeonhap=0;
  if (mv==='bme'){
    jeonsun=17; jeonpil=31
  } else if (mv==='bsms'){
    jeonsun=42; jeonpil=0
    } else if (mv==='hes'){
      jeonsun=42; jeonpil=0
    } else { //hpm
      jeonsun=39; jeonpil=3
    };
    jeonhap=jeonsun+jeonpil;
    jeon_list=[jeonsun, jeonpil, jeonhap]
    return jeon_list
}

function to_study(mv){ //학과별 선수과목 리턴
  let subjects=[]
  let books=[]
  if (mv==='bme'){
    subjects=["미적분학", "일반물리학", "일반화학"];
    books=['stewart', 'haliday', 'zumdahl']
  } else if (mv==='bsms'){
    subjects=['일반화학', '일반생물학']
    books=['zumdahl', 'campbell']
    } else if (mv==='hes'){
      subjects=['일반화학', '일반생물학']
    books=['zumdahl', 'campbell']
    } else { //hpm
      subjects=[]
      books=[]
    }
    return [subjects, books]
  }

  function to_study_text(subject_book) { //아래와 같이 선수과목과 추천교재에 대한 텍스트 반환
    let text='';
    if (subject_book[0][0]===undefined){ //books 어레이의 0번째 요소가 undefined라면. 즉, 아예 어레이가 비워져 있다면.
      text='선수과목은 없습니다.'
    }else{
    text=`<h4>이중 진입 전 학습이 필요한 내용</h4> 선수과목은 ${String(subject_book[0])}이며, 각 과목에 대한 추천교재는 ${String(subject_book[1])}입니다.`
    }
    return text
  }

  function books_image(books) { //책 이미지가 들어있는 테이블 리턴
    let text=''
    if (books.includes('stewart')){
      text+=`<table border='1' class='book_unit'>
      <tr><td>스튜어트 미적분학</td></tr>
      <tr><td><img src='stewart.jpg' class='book_img'></td></tr>
    </table>`}
    if (books.includes('haliday')){
      text+=`<table border='1' class='book_unit'>
      <tr><td>할리데이 일반물리학</td></tr>
      <tr><td><img src='haliday.jpg' class='book_img'></td></tr>
    </table>`}
      if (books.includes('zumdahl')){
        text+=`<table border='1' class='book_unit'>
    <tr><td>줌달의 일반화학</td></tr>
    <tr><td><img src='zumdahl.jpg' class='book_img'></td></tr>
  </table>`}
  if (books.includes('campbell')){
    text+=`<table border='1' class='book_unit'>
    <tr><td>캠벨 생명과학</td></tr>
    <tr><td><img src='campbell.jpg' class='book_img'></td></tr>
  </table>`}
return text
}

// 물리학 -> 바의공, 보환융
// 화학 -> 바의공, 보환융, 바시의
// 생명과학 -> 바의공, 보환융, 바시의
// 지구환경과학 -> 보환융
// 정보학 -> 보정관
// 역학 -> 보환융, 보정관


