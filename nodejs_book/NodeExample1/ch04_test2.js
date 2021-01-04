//노드에서는 이벤트를 보내고 받을 수 있도록 EventEmitter라는 것이 있다.
// on(event, listener) -> 지정한 이벤트의 리스너를 추가한다.
// once(event, listener) -> 일회성의 리스너
// removeListener(event, listener) -> 지정한 이벤트에 대한 리스너를 제거한다.

process.on('exit', function() {
    console.log('exit 이벤트 발생함.');
});

setTimeout(function() {
    console.log('2초 후에 시스템 종료 시도함.'); 
    process.exit(); 
}, 2000)