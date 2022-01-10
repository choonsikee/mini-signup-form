import { useState, useRef } from 'react'
import './App.css'

import Footer from './components/Footer'
import Form from './components/Form'
import FontControlBox from './components/FormControlBox'
import Modal from './components/Modal'

function App() {
    const [formState, setFormState] = useState({
        id: '',
        pw: '',
        confirmPw: '',
    })
    // Ref: html dialog 태그의 native method를 사용하기 위한 방법
    const modalRef = useRef(null)

    return (
        <>
            <div className="form-wrapper">
                <Form
                    formState={formState}
                    setFormState={setFormState}
                    modalRef={modalRef}
                />
                <Footer />
            </div>
            <FontControlBox />
            <Modal formState={formState} ref={modalRef} />
        </>
    )
}

export default App
