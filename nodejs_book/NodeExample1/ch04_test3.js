process.on('tick', function(count){ //process.on 메소드를 호출해서 이벤트를 등록하면 이 메소드를 호출하면서 파라미터로 전달된 tick 이벤트가 발생했을 때 콜백 함수 실행
    console.log('tick 이벤트 발생함 : %s', count);
});

setTimeout(function() {
    console.log('2초 후에 tick 이벤트 전달 시도함.');

    process.emit('tick', '2'); //tick 이벤트를 process 객체로 전달
}, 2000);