document.addEventListener('DOMContentLoaded', function (){ 
    do_everything();
})
function setData(list) { //학점 Array를 받아서 Chart에 들어갈 dataset을 반환 
        let data_set=[];
        for (let i=0; i<list.length; i++){
            data_set.push({x:i, y:list[i]})
        }
        return data_set
    }
function do_everything () { //todo: do_everything으로 묶어놓은 것 수정하기
    let ctx = document.getElementById('mybarChart');
    let ctx2 =document.getElementById('myscatterChart');
    let barChart=new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['합격자 평균', '불합격자 평균'],
            datasets:[{
                label: '학점',
                data:[3.43, 2.64],
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

    let lineChart = new Chart(ctx2, { //선 그래프
        type:'line',
    data: {
        datasets: [{
            label: '합격자 학점',
            data: setData([3.25, 3.26, 3.31, 3.39, 3.6, 3.64, 3.66]), //합격자의 점수대를 집어넣음
            borderColor:'rgba(55, 62, 251, 1)', //파랑
            pointBorderWidth:6, //포인트지점의 크기: 픽셀임
            pointStyle:'circle',
            backgroundColor:'rgba(0, 0, 0, 0)', //투명으로 설정
        },
        {
            label:'불합격자 학점',
            data: setData([1.59, 2.39, 2.64, 3.11, 3.45]), //불합격자의 점수를 집어넣음
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
                position: 'bottom'
            }]
        }
    }
});
}

// 여기까지가 그래프 파트
// 아래부터 텍스트 파트

function main() {
    let gpa=document.getElementById('gpa')
    let bul=[1.59, 2.39, 2.64, 3.11, 3.45]
    let hap=[3.25, 3.26, 3.31, 3.39, 3.6, 3.64, 3.66]
    document.getElementById('result').innerHTML=`합격자 중에서 ${find_rank(gpa, hap)}등, 불합격자 중에서 ${find_rank(gpa, bul)}등<br>
    합격자 평균인 ${avg(hap)} ${say_last(gpa,avg(hap))}.<br> 불합격자 평균인 ${avg(bul)} ${say_last(gpa,avg(bul))}.`
}

// 보환융 
//불합격
// 지원시기, 학점
// 2016_1, 1.59
// 2015_2, 2.39
// 2019_2, 2.64
// 2018_2, 3.11
// 2019_1, 3.45

// 합격
// 2016_1, 3.25
// 2017_2, 3.26
// 2018_2, 3.31
// 2015_2, 3.39
// 2016_2, 3.6
// 2019_2, 3.64
// 2019_1, 3.66
// 5년 평균: 불 2.64, 합 3.43, 경쟁률 1.16 불합인원평균:0.89, 합인원평균:5.33

//바시의
//불합격: 2.43 2.54 2.9, 2.93,3.19, 3.81
//합격: 3.33, 3.51, 3.52, 3.57, 3.64, 3.72, 3.73
// 5년 평균: 불 2.95, 합 3.6, 경쟁률 1.27 불합인원평균:1.33, 합인원평균:6.56
//[2.43 2.54 2.9, 2.93,3.19, 3.81], [3.33, 3.51, 3.52, 3.57, 3.64, 3.72, 3.73]

//바의공
//불합격: 2.88,2.93, 3.09, 3.16
//합격: 3.36, 3.72, 3.75, 3.8, 4.16
// 5년 평균: 불 3.01, 합 3.76  , 경쟁률 2.42, 불합인원평균:2.2, 합인원평균:2
//[2.88,2.93, 3.09, 3.16], [3.36, 3.72, 3.75, 3.8, 4.16]

//보정관
//불합격: 2.63, 2.68, 2.84, 2.88, 2.9, 2.95, 3.07, 3.1, 3.24
//합격: 3.48, 3.5, 3.61, 3.77, 3.9
// 5년 평균: 불 2.92, 합 3.65, 경쟁률 2.05 불합인원평균:11, 합인원평균:13.78
//[2.63, 2.68, 2.84, 2.88, 2.9, 2.95, 3.07, 3.1, 3.24], [3.48, 3.5, 3.61, 3.77, 3.9]

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
    let result= sum/list.length //합/변량개수
    return result
}

function say_last (score, average) {//평균과 지원자의 학점을 비교해서 마지막 말을 완성해주는 함수
    if (score>average) {
        return '보다 높음'
    }
    else if (score===average) {
        return '보다 낮음'
    }
    else {return '와 같음'}
}
