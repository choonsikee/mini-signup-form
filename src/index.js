// 1.  autofocus 구현
// 대상: ID 입력 input
// 이벤트: 페이지(window)가 로드 되었을 때
// 핸들러: Focus()
const $id = document.getElementById('id')
window.addEventListener('load', () => $id.focus())

// 2. 유효성 검사 로직 구현
// ID, 비밀번호, 비밀번호 확인 필드에 대한 유효성 검사를 수행해야 합니다.
// 대상: ID, PW, Check PW 입력 input
// 이벤트: (1) input focus out - 해당 input (2) 가입하기 버튼 클릭 시 - 모든 input
// 핸들러: 유효성 검사 함수
const $pw = document.getElementById('pw')
const $pwCheck = document.getElementById('pw-check')

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

//1. 필수 값 (값이 있는지) 2. 5~20자. 영문 소문자, 숫자. 특수기호(_),(-)만 사용 가능
const checkIdValidation = (value) => {
    const isValidId = ID_REGEX.test(value)
    console.log('ID', isValidId)
}

$id.addEventListener('focusout', (e) => checkIdValidation(e.target.value))

const checkPwValidation = (value) => {
    const isValidPw = PW_REGEX.test(value)
    console.log('PW', isValidPw)
}

$pw.addEventListener('focusout', (e) => checkPwValidation(e.target.value))

const checkPwCheckValidation = (value) => {
    const isValidPwCheck = value === $pw.value
    console.log('PWCHECK', isValidPwCheck)
}

$pwCheck.addEventListener('focusout', (e) =>
    checkPwCheckValidation(e.target.value)
)

const $submit = document.getElementById('submit')
$submit.addEventListener('click', (e) => {
    e.preventDefault()
    checkIdValidation($id.value)
    checkPwValidation($pw.value)
    checkPwCheckValidation($pwCheck.value)
})
