(function(window, document){
    'use strict';

    // 토글을 찾음, NodeList라는 유사배열
    const $toggles = document.querySelectorAll('.toggle');
    // 토글 버튼을 찾음, 토글버튼은 ID로 만들어놨기 때문에 #이나 .붙이면 X 
    const $toggleBtn = document.getElementById('toggle-btn');

    // 사용자가 발생시킨 이벤트를 감지
    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    // 브라우저 크기가 조절되면 발동
    window.addEventListener('resize', function() {
        if(window.innerWidth > 1024) {
            // off toggle element
            offElements();
        }
    });

    function toggleElements() {
        // 유사배열을 반복시키기 위해서 연결~
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)