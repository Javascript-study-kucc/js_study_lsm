function main() {
const target=document.getElementById('major_select'); 
let major_text=target.options[target.selectedIndex].text;
let major_value=target.options[target.selectedIndex].value;
document.getElementById('major_name').textContent=major_text
document.getElementById('link_').innerHTML=`과에 대한 더 자세한 정보를 원한다면..<br>
-><a href=${get_link(major_value)}, target="_blank"> ${major_text} 홈페이지</a>`
document.getElementById('jeon_table').innerHTML=`<table border="1">
<caption><b>이중전공 요구 학점</b></caption>
<tr>
  <td>전공선택</td>
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
  document.getElementById('seonsu_gwamoks').innerHTML='d'
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

function get_gwamok(mv){ //학과별 선수과목 리턴
  let gwamoks=[];
  if (mv==='bme'){
    gwamoks=['stewart', 'haliday', 'zumdahl']
  } else if (mv==='bsms'){
    gwamoks=['zumdahl','campbell']
    } else if (mv==='hes'){
      gwamoks=['zumdahl','campbell']
    } else { //hpm
      gwamoks=[]
    }
    return gwamoks
  }

// 물리학 -> 바의공, 보환융
// 화학 -> 바의공, 보환융, 바시의
// 생명과학 -> 바의공, 보환융, 바시의
// 지구환경과학 -> 보환융
// 정보학 -> 보정관
// 역학 -> 보환융, 보정관