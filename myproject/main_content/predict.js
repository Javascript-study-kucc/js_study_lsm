document.addEventListener('DOMContentLoaded', function (){ 
    main();
})
function setData(list) { //학점 Array를 받아서 Chart에 들어갈 dataset을 반환 
        let data_set=[];
        for (let i=0; i<list.length; i++){
            data_set.push({x:i, y:list[i]})
        }
        return data_set
    }
function main () {
    graph_bar([3.25, 3.26, 3.31, 3.39, 3.6, 3.64, 3.66],[1.59, 2.39, 2.64, 3.11, 3.45]);
    graph_line([3.25, 3.26, 3.31, 3.39, 3.6, 3.64, 3.66],[1.59, 2.39, 2.64, 3.11, 3.45]);
    explain([3.25, 3.26, 3.31, 3.39, 3.6, 3.64, 3.66],[1.59, 2.39, 2.64, 3.11, 3.45]);
}

function graph_bar(hap, bul) {
    let ctx = document.getElementById('mybarChart');
let barChart=new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['합격자 평균', '불합격자 평균'],
        datasets:[{
            label: '학점',
            data:[avg(hap), avg(bul)],
            backgroundColor:[ //바의 배경색
            'rgba(55, 62, 251, 0.5)',
            'rgba(250, 30, 30, 0.5)'
            ],
            borderColor:[ //바의 테두리색
            'rgba(55, 62, 251, 1)',
            'rgba(250, 30, 30, 1)'
            ],
            borderWidth:1,
            barPercentage:0.9,
            barThickness:50
        }],
    },
    options: {responsive:false,
    title:{text:'합격자와 불합격자의 평균 학점',display:true},
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                min:0,
                max:4.5,
                stepSize:0.1
            }
        }]
    },
    
}
})
}

function graph_line (hap, bul) {
    let ctx2 =document.getElementById('mylineChart');
let lineChart = new Chart(ctx2, { //선 그래프
    type:'line',
data: {
    datasets: [{
        label: '합격자 학점',
        data: setData(hap), //합격자의 점수대를 집어넣음
        borderColor:'rgba(55, 62, 251, 1)', //파랑
        pointBorderWidth:6, //포인트지점의 크기: 픽셀임
        pointStyle:'circle',
        backgroundColor:'rgba(0, 0, 0, 0)', //투명으로 설정
    },
    {
        label:'불합격자 학점',
        data: setData(bul), //불합격자의 점수를 집어넣음
        borderColor:'rgba(250, 30, 30, 1)',
        pointRadius:6, //점의 크기
        pointStyle:'crossRot', //십자 모양
        backgroundColor:'rgba(0, 0, 0, 0)',
    }
]
},
options: {responsive:false,
    title:{text:'합격자와 불합격자의 학점 분포',
display:true},
    scales: {
        xAxes: [{
            type: 'linear',
            position:'bottom' //x축의 위치를 아래에 놓는다. top, right, left 있다.
        }]
    }
}
});}
// 여기까지가 그래프 파트
// 아래부터 텍스트 파트

function explain(hap, bul) {
    let gpa=3.3
    //document.getElementById('gpa')
    document.getElementById('result').innerHTML=`<h3>분석 결과</h3>당신의 학점은 <b>${gpa}</b><br> <b>합격자</b> ${hap.length}명 중에서 <b>${find_rank(gpa, hap)}</b>등, <b>불합격자</b> ${bul.length}명 중에서 <b>${find_rank(gpa, bul)}</b>등<br>
    합격자 평균인 <b>${avg(hap)}</b> ${say_last(gpa,avg(hap))}.<br> 불합격자 평균인 <b>${avg(bul)}</b> ${say_last(gpa,avg(bul))}.`
}

function find_rank (score, list) {
list.push(score); //학점 리스트에 지원자 점수 삽입
list.sort().reverse(); //내림차순으로 만들고
return (list.indexOf(score)+1) //지원자의 등수 출력
}

function avg (list) { //평균 구해주는 함수
    let sum=0;
    for (let i=0; i<list.length; i++){ //합
        sum=sum+list[i]
    }
    let result= (sum/list.length).toFixed(2) //합/변량개수 .toFixed로 소수점 둘째자리까지로 고정
    return result
}

function say_last (score, average) {//평균과 지원자의 학점을 비교해서 마지막 말을 완성해주는 함수
    if (score>average) {
        return '보다 <b>높음</b>'
    }
    else if (score===average) {
        return '와 <b>같음</b>'
    }
    else {return '보다 <b>낮음</b>'}
}

// 보환융 
// 불합격:[1.59, 2.39, 2.64, 3.11, 3.45]
// 합격: [3.25, 3.26, 3.31, 3.39, 3.6, 3.64, 3.66]
// 5년 평균: 불 2.64, 합 3.43, 경쟁률 1.16 불합인원평균:0.89, 합인원평균:5.33

//바시의
//불합격: [2.43 2.54 2.9, 2.93,3.19, 3.81]
//합격: [3.33, 3.51, 3.52, 3.57, 3.64, 3.72, 3.73]
// 5년 평균: 불 2.95, 합 3.6, 경쟁률 1.27 불합인원평균:1.33, 합인원평균:6.56


//바의공
//불합격: [2.88,2.93, 3.09, 3.16]
//합격: [3.36, 3.72, 3.75, 3.8, 4.16]
// 5년 평균: 불 3.01, 합 3.76  , 경쟁률 2.42, 불합인원평균:2.2, 합인원평균:2


//보정관
//불합격: [2.63, 2.68, 2.84, 2.88, 2.9, 2.95, 3.07, 3.1, 3.24]
//합격: [3.48, 3.5, 3.61, 3.77, 3.9]
// 5년 평균: 불 2.92, 합 3.65, 경쟁률 2.05 불합인원평균:11, 합인원평균:13.78