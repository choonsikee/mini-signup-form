import { useState } from 'react'
import './App.css'

import Footer from './components/Footer'
import Form from './components/Form'
import FontControlBox from './components/FormControlBox'
import Modal from './components/Modal'
import ModalBackdrop from './components/ModalBackdrop'

function App() {
    const [isValidForm, setIsValidForm] = useState(false)
    const [formState, setFormState] = useState({
        id: '',
        pw: '',
        confirmPw: '',
    })
    return (
        <>
            <div className="wrapper">
                <Form
                    setIsValidForm={setIsValidForm}
                    formState={formState}
                    setFormState={setFormState}
                />
                <Footer />
            </div>
            <FontControlBox />
            {isValidForm && (
                <>
                    <Modal
                        setIsValidForm={setIsValidForm}
                        formState={formState}
                    />
                    <ModalBackdrop />
                </>
            )}
        </>
    )
}

export default App
