document.addEventListener("DOMContentLoaded", function(){

    // 変数
    const openTriggers = document.querySelectorAll('.js-modal-open'),
        closeTrigger = document.querySelector('#js-modal-close'),
        pagetopBtn = document.querySelector('#js-backToTop');

    /**
     * ページのトップに戻る
     * 補足：() => {}は、function(){}のシンタックスシュガー（別の記法）のようなもの。詳細は後期講義にて
     */
    pagetopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /**
     * トップに戻るボタンの表示非表示
     */
    document.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            pagetopBtn.classList.add('is-show');
        } else {
            pagetopBtn.classList.remove('is-show');
        }
    });



    // モーダル表示イベント
    // 基本
    for (var i = 0; i < openTriggers.length; i++) {
        openTriggers[i].addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }
    /**
     * 基本の繰り返しを今っぽく書くと
     */
    // openTriggers.forEach(trigger => {
    //     trigger.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         openModal();
    //     });
    // });

    // モーダルを閉じるイベント
    closeTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal();
    });



    /**
     * モーダルウィンドウを開く処理
     */
    function openModal() {
        const modal = document.querySelector('#js-modal');
        let elem = document.createElement("div");
        elem.classList.add("overlay");
        modal.before(elem);
        modal.dataset.state = 'visible';
    }

    /**
     * モーダルウィンドウを閉じる処理
     */
    function closeModal() {
        const modal = document.querySelector('#js-modal');
        const overlay = document.querySelector('.overlay');
        modal.dataset.state = 'hidden';
        overlay.remove();
    }



});


