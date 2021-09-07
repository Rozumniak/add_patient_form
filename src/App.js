import './App.css';
import React from 'react';
import {Formik} from "formik";
import cn from "classnames";
import * as yup from 'yup'



function App() {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        secondName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        patronymic: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        birthDate: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        sex: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        telephoneNumber: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        sms: yup.boolean().typeError('Должно быть boolean').required('Обязательно'),
        zip: yup.string().typeError('Должно быть строкой'),
        })
  return (
    <div className={"wrapper"}>
      <div className={"content"}>
        <div>
            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    patronymic: '',
                    birthDate: '',
                    sex: '',
                    telephoneNumber: '',
                    sms: false,
                    country:'',
                    region:'',
                    city:'',
                    street:'',
                    streetNumder:'',
                    zip:'',
                    serial:'',
                    number:'',
                    subdivision:'',
                    issueDate:'',
                }}
                validateOnBlur
                onSubmit={(values) => { console.log(values) }}
                validationSchema={validationsSchema}>
                {({ values, errors, touched,
                      handleChange, handleBlur,
                      isValid, handleSubmit, dirty }) => (
                          <form className={"form"}>
                <label className={"form__label"}>
                    ЗАПОЛНИТЕ ФОРМУ<br/>
                    * поля обязательное для заполнения
                </label>

                <input className={"form__item"} type={"text"} name={"secondName"}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.secondName}
                       placeholder={" *Фамилия"}/>
                              {touched.secondName && errors.secondName && <p className={'error'}>{errors.secondName}</p>}
                <input className={"form__item"} type={"text"} name={"name"}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.name}
                       placeholder={" *Имя"}/>
                              {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
                <input className={"form__item"} type={"text"} name={"patronymic"}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.patronymic}
                       placeholder={" Отчество"}/>
                              {touched.patronymic && errors.patronymic && <p className={'error'}>{errors.patronymic}</p>}
                <div className={cn("form__flexRow", "item")}>
                <input  className={cn("item__row")} type={"date"}
                        name={"birthDate"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.birthDate}
                        placeholder={" *Дата рождения"}/>
                    {touched.birthDate && errors.birthDate && <p className={'error'}>{errors.birthDate}</p>}
                <input  className={cn("item__row")} type={"text"}
                        name={"sex"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sex}
                        placeholder={" *Пол"}/>
                    {touched.sex && errors.sex && <p className={'error'}>{errors.sex}</p>}
                </div>
                <input className={"form__item"} type={"text"}
                       name={"telephoneNumber"}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.telephoneNumber}
                       placeholder={" *Номер телефона"}/>
                              {touched.telephoneNumber && errors.telephoneNumber && <p className={'error'}>{errors.telephoneNumber}</p>}
                <select className={cn("form__select", "form__item")}>
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
                <select className={cn("form__select", "form__item")}>
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
                <div className={cn("form__flexRow")}>
                <input type={"checkbox"}
                       name={"sms"}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.sms}/>
                    {touched.sms && errors.sms && <p className={'error'}>{errors.sms}</p>}
                    <div>
                           Не отправлять СМС
                    </div>
                </div>


                <label>
                    Адрес:
                </label>
                <input className={"form__item"} placeholder={"Страна"}/>
                <input className={"form__item"} placeholder={"Область"}/>
                <input className={"form__item"} placeholder={"Город"}/>
                <div className={cn("form__flexRow", "item")}>
                     <input className={cn("item__row")} placeholder={"Улица"}/>
                     <input className={cn("item__row")} placeholder={"Дом"}/>
                </div>
                <input className={"form__item"} name={"zip"} onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.zip}
                       placeholder={"Индекс"}/>

                <label>
                    Данные:
                </label>
                <select className={cn("form__select", "form__item")}>
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
                <div className={cn("form__flexRow", "item")}>
                <input className={cn("form__item", "item__row")} placeholder={"Серия"}/>
                <input className={cn("form__item", "item__row")} placeholder={"Номер"}/>
                </div>
                <input className={"form__item"} placeholder={"Кем выдан"}/>
                <input className={"form__item"} placeholder={" *Дата выдачи"}/>

                <button type={"submit"}  onClick={handleSubmit}>Отправить</button>
                          </form>
                    )}
            </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
