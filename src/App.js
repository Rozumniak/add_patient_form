import './App.css';
import React, {useState} from 'react';
import {Formik} from "formik";
import cn from "classnames";
import * as yup from 'yup'
import close from "./img/close.png"


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
    })
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
                          isValid, handleSubmit, dirty
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
                                <select className={cn("generalInfo__select")}>
                                    <option>
                                        *Группа клиентов
                                    </option>
                                    <option>
                                        VIP
                                    </option>
                                    <option>
                                        ОМС
                                    </option>
                                    <option>
                                        Проблемные
                                    </option>
                                </select>
                                <select className={cn("generalInfo__select")}>
                                    <option>
                                        *Лечащий врач
                                    </option>
                                    <option>
                                        Петров А. А.
                                    </option>
                                    <option>
                                        Сидоров В. В.
                                    </option>
                                    <option>
                                        Сыркина В. В.
                                    </option>
                                </select>
                                <div className={cn("generalInfo__flexRow")}>
                                    <input
                                        className={"row__item"}
                                        type={"checkbox"}
                                        name={"sms"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sms}/>
                                    {touched.sms && errors.sms && <p className={'error'}>{errors.sms}</p>}
                                    <div className={"row__item"}>
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
                            <select className={"adressInfo__select"}>
                                <option>
                                    *Тип документа
                                </option>
                                <option>
                                    Паспорт
                                </option>
                                <option>
                                    видетельство о рождении
                                </option>
                                <option>
                                    Водительское удостоверение
                                </option>
                            </select>
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

export default App;

