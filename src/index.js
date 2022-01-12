// 1.  autofocus 구현
// 대상: ID 입력 input
// 시점: 페이지(window)가 로드 되었을 때
// 이벤트: Focus()
const $id = document.getElementById('id')
window.addEventListener('load', () => $id.focus())
