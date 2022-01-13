// 1.  autofocus 구현
// 대상: ID 입력 input
// 이벤트: 페이지(window)가 로드 되었을 때
// 핸들러: Focus()
const $id = document.getElementById('id')
const $idMsg = document.getElementById('id-msg')
window.addEventListener('load', () => $id.focus())

// 2. 유효성 검사 로직 구현
// ID, 비밀번호, 비밀번호 확인 필드에 대한 유효성 검사를 수행해야 합니다.
// 대상: ID, PW, Check PW 입력 input
// 이벤트: (1) input focus out - 해당 input (2) 가입하기 버튼 클릭 시 - 모든 input
// 핸들러: 유효성 검사 함수
const $pw = document.getElementById('pw')
const $pwMsg = document.getElementById('pw-msg')

const $pwCheck = document.getElementById('pw-check')
const $pwCheckMsg = document.getElementById('pw-check-msg')

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

const ID_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
}

const PW_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
}

const PW_CHECK_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '비밀번호가 일치하지 않습니다.',
}

//1. 필수 값 (값이 있는지) 2. 5~20자. 영문 소문자, 숫자. 특수기호(_),(-)만 사용 가능
const checkIdValidation = (value) => {
    let isValidId
    if (value.length === 0) {
        isValidId = 'required'
    } else {
        isValidId = ID_REGEX.test(value) ? true : 'invalid'
    }
    // 3. 에러 메시지
    // (1) 비어 있을때 (2) 유효하지 않은 값일때
    // $id 태그에 class 추가 (border-red-600), $idMsg에 에러 메시지 추가
    if (isValidId !== true) {
        $id.classList.add('border-red-600')
        $idMsg.innerText = ID_ERROR_MSG[isValidId]
    } else {
        $id.classList.remove('border-red-600')
        $idMsg.innerText = ''
    }
}

$id.addEventListener('focusout', (e) => checkIdValidation(e.target.value))

const checkPwValidation = (value) => {
    let isValidPw
    if (value.length === 0) {
        isValidPw = 'required'
    } else {
        isValidPw = PW_REGEX.test(value) ? true : 'invalid'
    }
    if (isValidPw !== true) {
        $pw.classList.add('border-red-600')
        $pwMsg.innerText = PW_ERROR_MSG[isValidPw]
    } else {
        $pw.classList.remove('border-red-600')
        $pwMsg.innerText = ''
    }
}

$pw.addEventListener('focusout', (e) => checkPwValidation(e.target.value))

const checkPwCheckValidation = (value) => {
    let isValidPwCheck
    if (value.length === 0) {
        isValidPwCheck = 'required'
    } else {
        isValidPwCheck = value === $pw.value ? true : 'invalid'
    }
    if (isValidPwCheck !== true) {
        $pwCheck.classList.add('border-red-600')
        $pwCheckMsg.innerText = PW_CHECK_ERROR_MSG[isValidPwCheck]
    } else {
        $pwCheck.classList.remove('border-red-600')
        $pwCheckMsg.innerText = ''
    }
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
