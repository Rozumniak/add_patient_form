import './App.css';
import React, {useState} from 'react';
import {Formik} from "formik";
import cn from "classnames";
import * as yup from 'yup'
import close from "./img/close.png"
import arrowDown from "./img/arrow_down.png"
import arrowUp from "./img/arrow_up.png"


function App() {
    const [isSubmited, setSubmited] = useState(false)
    let submitSuccess = (values) => {
        setSubmited(true)
        localStorage.setItem('values', JSON.stringify(values));
        console.log(JSON.parse(localStorage.getItem('values')))

    }

    return (<div>
        <Form submitSuccess={submitSuccess}/>
        <Modal isSubmited={isSubmited} setSubmited={setSubmited}>
            <button className={"modal__button"} onClick={() => setSubmited(false)}>
                <img className={"modal__button img"} src={close}/>
            </button>
            <p>
                Пользователь успешно создан
            </p>
        </Modal>
    </div>)


}

function Form(props) {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        secondName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        birthDate: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        sex: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        telephoneNumber: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        sms: yup.boolean().typeError('Должно быть boolean').required('Обязательно'),
        zip: yup.string().typeError('Должно быть строкой'),
        typeOfPatient: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        doctor: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        document: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    })

    const [selectedGroup, setSelectedGroup] = useState('')
    const [patientSelectorOpen, setPatientSelectorOpen] = useState(false)
    const [selectedDoctorGroup, setSelectedDoctorGroup] = useState('')
    const [doctorSelectorOpen, setDoctorSelectorOpen] = useState(false)
    const [selectedDocumentGroup, setSelectedDocumentGroup] = useState('')
    const [documentSelectorOpen, setDocumentSelectorOpen] = useState(false)
    const setSelectorValue = (e, value, setFieldValue, fieldValue, selectorType) => {
        e.preventDefault();
        if (selectorType === 'patient'){
            setSelectedGroup(value);
            setPatientSelectorOpen(false)
        }
        else if(selectorType === 'doctor'){
            setSelectedDoctorGroup(value);
            setDoctorSelectorOpen(false)
        }
        else if (selectorType === 'document'){
            setSelectedDocumentGroup(value);
            setDocumentSelectorOpen(false)
        }
        setFieldValue(fieldValue, value);
    }
    let arr = ['VIP', 'ОМС', 'Проблемные'];

    return (
        <div className={"wrapper"}>
            <div className={"content"}>
                <Formik
                    initialValues={{
                        name: '',
                        secondName: '',
                        patronymic: '',
                        birthDate: '',
                        sex: '',
                        telephoneNumber: '',
                        sms: false,
                        country: '',
                        region: '',
                        city: '',
                        street: '',
                        streetNumber: '',
                        zip: '',
                        serial: '',
                        number: '',
                        subdivision: '',
                        issueDate: '',
                        typeOfPatient: '',
                        doctor: '',
                        document: '',
                    }}
                    validateOnBlur
                    onSubmit={(values) => {
                        props.submitSuccess(values)
                    }

                    }
                    validationSchema={validationsSchema}>
                    {({
                          values, errors, touched,
                          handleChange, handleBlur,
                          isValid, handleSubmit, dirty, setFieldValue
                      }) => (
                        <form className={"form"}>
                            <div className={cn("form__block", "generalInfo")}>
                                <label className={"label"}>
                                    ЗАПОЛНИТЕ ФОРМУ<br/>
                                    * поля обязательное для заполнения
                                </label>

                                <input className={"generalInfo__input"} type={"text"} name={"secondName"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.secondName}
                                       placeholder={" *Фамилия"}/>
                                {touched.secondName && errors.secondName &&
                                <p className={'error'}>{errors.secondName}</p>}
                                <input className={"generalInfo__input"} type={"text"} name={"name"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.name}
                                       placeholder={" *Имя"}/>
                                {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
                                <input className={"generalInfo__input"} type={"text"} name={"patronymic"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.patronymic}
                                       placeholder={" Отчество"}/>
                                <div className={cn("generalInfo__flexRow", "row")}>
                                    <input className={"row__item left calendar"} type={"date"}
                                           name={"birthDate"}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.birthDate}
                                           placeholder={" *Дата рождения"}/>

                                    <input className={"row__item"} type={"text"}
                                           name={"sex"}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.sex}
                                           placeholder={" *Пол"}/>

                                </div>
                                {touched.birthDate && errors.birthDate &&
                                <p className={'error'}>{errors.birthDate}</p>}
                                {touched.sex && errors.sex && <p className={'error'}>{errors.sex}</p>}
                                <input className={"generalInfo__input"} type={"text"}
                                       name={"telephoneNumber"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.telephoneNumber}
                                       placeholder={" *Номер телефона"}/>
                                {touched.telephoneNumber && errors.telephoneNumber &&
                                <p className={'error'}>{errors.telephoneNumber}</p>}
                                <CustomSelector selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}
                                                setFieldValue={setFieldValue} selectorOpen={patientSelectorOpen}
                                                setSelectorOpen={setPatientSelectorOpen}
                                                setSelectorValue={setSelectorValue}
                                                arr={arr} selectorName={"*Группа клиентов"}>

                                    <label className={selectedGroup === arr[0] ? "clientGroup__label active" : "none"}
                                           onClick={(e) => setSelectorValue(e, arr[0], setFieldValue, 'typeOfPatient', 'patient')}>
                                        {arr[0]}
                                    </label>
                                    <label className={selectedGroup === arr[1] ? "clientGroup__label active" : "none"}
                                           onClick={(e) => setSelectorValue(e, arr[1], setFieldValue, 'typeOfPatient', 'patient')}>
                                        {arr[1]}
                                    </label>
                                    <label
                                        className={selectedGroup === arr[2] ? "clientGroup__label active" : "none"}
                                        onClick={(e) => setSelectorValue(e, arr[2], setFieldValue, 'typeOfPatient', 'patient')}>
                                        {arr[2]}
                                    </label>
                                </CustomSelector>
                                {errors.typeOfPatient &&
                                <p className={'error'}>{errors.typeOfPatient}</p>}
                                <CustomSelector selectedGroup={selectedDoctorGroup}
                                                setSelectedGroup={setSelectedDoctorGroup}
                                                setFieldValue={setFieldValue} selectorOpen={doctorSelectorOpen}
                                                setSelectorOpen={setDoctorSelectorOpen}
                                                setSelectorValue={setSelectorValue}
                                                arr={arr} selectorName={"*Лечащий врач"}>

                                    <label className={selectedGroup === "Иванов П. С." ? "clientGroup__label active" : "none"}
                                           onClick={(e) => setSelectorValue(e, "Иванов П. С.", setFieldValue, 'doctor', 'doctor')}>
                                        {"Иванов П. С."}
                                    </label>
                                    <label className={selectedGroup === "Сергеева М. Ф." ? "clientGroup__label active" : "none"}
                                           onClick={(e) => setSelectorValue(e, "Сергеева М. Ф.", setFieldValue, 'doctor', 'doctor')}>
                                        {"Сергеева М. Ф."}
                                    </label>
                                    <label
                                        className={selectedGroup === "Криворученко С. Н." ? "clientGroup__label active" : "none"}
                                        onClick={(e) => setSelectorValue(e, 'Криворученко С. Н.', setFieldValue, 'doctor', 'doctor')}>
                                        {"Криворученко С. Н."}
                                    </label>
                                </CustomSelector>
                                {errors.doctor &&
                                <p className={'error'}>{errors.doctor}</p>}
                                <div className={cn("generalInfo__flexRow", "sms")}>
                                    <input
                                        className={"row__item_sms left"}
                                        type={"checkbox"}
                                        name={"sms"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sms}/>
                                    {touched.sms && errors.sms && <p className={'error'}>{errors.sms}</p>}
                                    <div className={"row__item_sms"}>
                                        Не отправлять СМС
                                    </div>
                                </div>
                            </div>
                            <div className={cn("form__block", "adressInfo")}>
                                <label className={"adressInfo__label small__label"}>
                                    Адрес:
                                </label>
                                <input className={"adressInfo__input"}
                                       name={"country"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.country}
                                       placeholder={"Страна"}/>
                                <input className={"adressInfo__input"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.region}
                                       name={"region"}
                                       placeholder={"Область"}/>
                                <input className={"adressInfo__input"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.city}
                                       name={"city"}
                                       placeholder={"Город"}/>
                                <div className={cn("adressInfo__flexRow", "row")}>
                                    <input className={"row__item left"}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.street}
                                           name={"street"}
                                           placeholder={"Улица"}/>
                                    <input className={"row__item"}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.streetNumber}
                                           name={"streetNumber"}
                                           placeholder={"Дом"}/>
                                </div>
                                <input className={"adressInfo__input"} name={"zip"} onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.zip}
                                       placeholder={"Индекс"}/>
                            </div>
                            <label className={"adressInfo__label small__label"}>
                                Данные:
                            </label>
                            <CustomSelector selectedGroup={selectedDocumentGroup} setSelectedGroup={setSelectedDocumentGroup}
                                            setFieldValue={setFieldValue} selectorOpen={documentSelectorOpen}
                                            setSelectorOpen={setDocumentSelectorOpen}
                                            setSelectorValue={setSelectorValue}
                                            arr={arr} selectorName={"*Тип документа"}>

                                <label className={selectedGroup === "Паспорт" ? "clientGroup__label active" : "none"}
                                       onClick={(e) => setSelectorValue(e, "Паспорт", setFieldValue, 'document', 'document')}>
                                    {'Паспорт'}
                                </label>
                                <label className={selectedGroup === "Свидетельство о рождении" ? "clientGroup__label active" : "none"}
                                       onClick={(e) => setSelectorValue(e, "Свидетельство о рождении", setFieldValue, 'document', 'document')}>
                                    {"Свидетельство о рождении"}
                                </label>
                                <label
                                    className={selectedGroup === "Водительское удостоверение" ? "clientGroup__label active" : "none"}
                                    onClick={(e) => setSelectorValue(e, "Водительское удостоверение", setFieldValue, 'document', 'document')}>
                                    {"Водительское удостоверение"}
                                </label>
                            </CustomSelector>
                            {errors.document &&
                            <p className={'error'}>{errors.document}</p>}

                            <div className={cn("adressInfo__flexRow", "row")}>
                                <input className={"row__item left"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.serial}
                                       name={"serial"}
                                       placeholder={"Серия"}/>
                                <input className={"row__item"}
                                       placeholder={"Номер"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.number}
                                       name={"number"}/>
                            </div>
                            <input className={"adressInfo__input"}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.subdivision}
                                   name={"subdivision"}
                                   placeholder={"Кем выдан"}/>
                            <input className={"adressInfo__input"}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.issueDate}
                                   name={"issueDate"}
                                   placeholder={" *Дата выдачи"}/>

                            <button
                                className={"form__button"}
                                type={"submit"} disabled={!isValid || !dirty} onClick={handleSubmit}>Отправить
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

const Modal = ({isSubmited, setSubmited, children}) => {
    return (
        <div className={isSubmited ? "modal active" : "modal"} onClick={() => setSubmited(false)}>
            <div className={isSubmited ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
/*const CustomSelector1 = ({selectGroup,setSelectGroup, clientGroup, setClientType, setFieldValue}) => {
    return<div>
    {!selectGroup ?
        <div className={"form__select clientGroup"} onClick={() => setSelectGroup(true)}>
            <label className={"clientGroup__label"}>
                {clientGroup === '' ? "*Группа клиентов" : clientGroup}
            </label>
            <img className={"clientGroup__img"} src={arrowDown}/>
        </div>
        : <div className={"form__select clientGroup"} onClick={() => setSelectGroup(false)}>
            <label className={"clientGroup__label"}>
                {clientGroup === '' ? "*Группа клиентов" : clientGroup}
            </label>
            <img className={"clientGroup__img"} src={arrowUp}/>
        </div>}

    {selectGroup ?
        <div className={"clientGroup__list"}>
            <label className={clientGroup === "VIP" ? "clientGroup__label active" : "none"}
                   onClick={(e) => setClientType(e, "VIP", setFieldValue)}>
                VIP
            </label>
            <label className={clientGroup === "ОМС" ? "clientGroup__label active" : "none"}
                   onClick={(e) => setClientType(e, "ОМС", setFieldValue)}>
                ОМС
            </label>
            <label
                className={clientGroup === "Проблемные" ? "clientGroup__label active" : "none"}
                onClick={(e) => setClientType(e, "Проблемные", setFieldValue)}>
                Проблемные
            </label>
        </div> : null}</div>
}*/

const CustomSelector = ({selectedGroup, setSelectorValue, setFieldValue, arr, selectorName, selectorOpen, setSelectorOpen, children}) => {

    return <div>
        {!selectorOpen ?
            <div className={"form__select clientGroup"} onClick={() => setSelectorOpen(true)}>
                <label className={"clientGroup__label"}>
                    {selectedGroup === '' ? selectorName : selectedGroup}
                </label>
                <img className={"clientGroup__img"} src={arrowDown}/>
            </div>
            : <div className={"form__select clientGroup"} onClick={() => setSelectorOpen(false)}>
                <label className={"clientGroup__label"}>
                    {selectedGroup === '' ? selectorName : selectedGroup}
                </label>
                <img className={"clientGroup__img"} src={arrowUp}/>
            </div>}

        {selectorOpen ?
            <div className={"clientGroup__list"}>
                {children}
            </div> : null}</div>
}

export default App;

