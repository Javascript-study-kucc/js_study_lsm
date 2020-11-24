function main() {
const target=document.getElementById('major_select'); 
let major_text=target.options[target.selectedIndex].text;
let major_value=target.options[target.selectedIndex].value;
document.getElementById('major_name').textContent=major_text
document.getElementById('link_').innerHTML=`<a href=${get_link(major_value)}, target="_blank"> ${major_text} 홈페이지</a>`
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