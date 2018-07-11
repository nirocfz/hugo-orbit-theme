'use strict';

window.onload = function () {
    var bars = document.querySelectorAll('.level-bar-inner');

    var _loop = function _loop(i) {
        var ele = bars[i];
        ele.style.width = 0;
        var width = ele.getAttribute('data-level');
        ele.style.transition = 'width 0.8s';
        setTimeout(function () {
            ele.style.width = width;
        }, 0);
    };

    for (var i = 0; i < bars.length; i++) {
        _loop(i);
    }
};