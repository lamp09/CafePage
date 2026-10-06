/* =========================================================
   Cafe Ondo 오픈 안내 페이지 — JavaScript 과제

   아래 6개 기능을 순서대로 완성하세요.
   각 블록 위 주석에 적힌 선택자(class, id) 이름을 그대로 사용해야
   HTML·CSS와 연결됩니다. 이름이 다르면 동작하지 않습니다.
   ========================================================= */


/* =========================================================
   1. 헤더 메뉴 토글
   - 버튼: .btn-menu
   - 메뉴: .main-nav
   - 버튼을 클릭하면 .main-nav에 'open-menu' 클래스를 토글한다.
   - 버튼 글자를 'Menu' ↔ 'Close'로 바꾼다.
   ========================================================= */
const btn = document.querySelector('.btn-menu');
//.main-nav 요소 가져와서 nav 변수에 저장
const nav = document.querySelector('.main-nav');

// 버튼을 클릭하면
btn.addEventListener('click', () => {
    // nav 요소의 클래스에 'open-menu' 를 토글한다.
    nav.classList.toggle('open-menu');
    // 만약 btn 요소의 innerHTML이  'Menu' 인 경우
    if (btn.innerHTML === 'Menu') {
        // btn 요소의 innerHTML을 'Close'로 변경
        btn.innerHTML = 'Close';
    }
    else {
        btn.innerHTML = 'Menu';
    }

});



/* =========================================================
   2. 다크 모드
   - 버튼: .mode-switch
   - 버튼을 클릭하면 body에 'dark' 클래스를 토글한다.
   - body에 'dark' 클래스가 있으면 버튼 글자를 '☀️', 없으면 '🌙'로 바꾼다.
   ========================================================= */
const themeBtn = document.querySelector('.mode-switch');

themeBtn.addEventListener('click', () => {
    // body에 'dark' 클래스를 붙였다 뗀다.
    document.body.classList.toggle('dark');
    // body에 'dark' 클래스가 있으면 해 아이콘, 없으면 초승달 아이콘으로 변경
    if (document.body.classList.contains('dark')) {
        themeBtn.innerHTML = '☀️';
    }
    else {
        themeBtn.innerHTML = '🌙';
    }
})



/* =========================================================
   3. Menu 카테고리 탭
   - 버튼: .cat-btn (여러 개, 각 버튼에는 data-category 속성이 있다)
   - 패널: .cat-panel (여러 개, 버튼의 data-category 값과 같은 id를 가진다)
   - 버튼을 클릭하면:
     ① 모든 버튼과 패널에서 'active' 클래스를 제거한다.
     ② 클릭한 버튼에 'active'를 추가한다.
     ③ 클릭한 버튼의 data-category 값과 같은 id를 가진 패널에 'active'를 추가한다.
   ========================================================= */

const tabBtns = document.querySelectorAll('.cat-btn');
const tabPanels = document.querySelectorAll('.cat-panel');

tabBtns.forEach((tab) =>{
    tab.addEventListener('click', () => {
        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanels.forEach((p) => p.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tab.dataset.category).classList.add('active');
    });
});


/* =========================================================
   4. 사진 갤러리
   - 큰 이미지: .photo-main
   - 작은 이미지(썸네일): .photo-list 안의 img (여러 개)
   - 썸네일을 클릭하면:
     ① 큰 이미지의 src, alt를 클릭한 썸네일의 src, alt로 바꾼다.
     ② 모든 썸네일에서 'active' 클래스를 제거한다.
     ③ 클릭한 썸네일에 'active'를 추가한다.
   ========================================================= */
const galleryThumbs = document.querySelectorAll('.photo-list img');
const galleryMain = document.querySelector('.photo-main');

galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        galleryThumbs.forEach((t) => t.classList.remove('active'));

        thumb.classList.add('active');
        galleryMain.src = thumb.src;
        galleryMain.alt = thumb.alt;
    });
});



/* =========================================================
   5. 예약 요청사항 글자 수 세기
   - 입력 칸: .form-message (textarea, maxlength="200")
   - 표시 문단: .msg-count
   - 글자를 입력할 때마다('input' 이벤트):
     ① 입력된 글자 수를 '숫자 / 200자' 형식으로 .msg-count에 표시한다.
     ② 글자 수가 180자 이상이면 .msg-count에 'warn' 클래스를 추가하고,
        180자 미만이면 'warn' 클래스를 제거한다.
   ========================================================= */
const textarea = document.querySelector('.form-message');
const charCount = document.querySelector('.msg-count');

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = length + ' / 200자';

    if (length >= 180 ) {
        charCount.classList.add('warn');
    }
    else {
        charCount.classList.remove('warn');
    }
})



/* =========================================================
   6. 실시간 시계 (날짜 + 시각)
   - 날짜 표시: .now-date
   - 시각 표시: .now-time
   - 현재 날짜(년, 월, 일, 요일)를 '2026년 11월 7일 (토)' 형식으로 .now-date에 표시한다.
   - 현재 시각(시:분:초)을 '09:05:03' 형식(두 자리, 0으로 채움)으로 .now-time에 표시한다.
   - 1초마다 자동으로 갱신되어야 한다.
   ========================================================= */

const nowDate = document.querySelector('.now-date');
const nowTime = document.querySelector('.now-time');
const days = ['일','월','화','수','목','금','토'];

function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = days[now.getDay()];
    nowDate.textContent = year + '년 ' + month + '월 ' + date + '일 (' + day + ')';

    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    nowTime.textContent = h + ':' + m + ':' + s;
}

updateClock(); // 페이지 열람시 한 번 실행

// 정해진 시간(밀리초)마다 함수를 계속 실행
setInterval(updateClock, 1000); // 이후 1초마다 반복 실행
