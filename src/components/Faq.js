import React from "react"

class Faq extends React.Component {
    render() {
        return (
            <div>
                <div className="block">
                    <h2 className="text-style-right"><b className="text-style-left">Информация </b>о проезде</h2>
                    <br />
                    <p>Стоимость проезда в трамвае составляет 25 рублей. Оплата производится кондуктору наличными средствами либо банковской картой</p>
                </div>
                <div className="block">
                    <h2 className="text-style-right">Хотите безлимит в трамвае? <b className="text-style-left">Покупайте проездной билет на месяц!</b></h2>
                    <br />
                    <p>Проездной на трамвай можно приобрести в киосках "Новости" ("Попутка"), расположенные по адресам: </p>
                    <ul>
                        <li>📍 ул. Балтахинова, 9, ост. «Центральный рынок», с 07:00 до 20:00</li>
                        <li>📍 пр-т 50-летия Октября, 27, ост. «Площадь Комсомольская», с 07:00 до 19:00</li>
                        <li>📍 ул. Гагарина, 23г, ост. «ТЦ «Сагаан Морин»», с 07:00 до 21:00</li>
                        <li>📍 ул. Гагарина, 25/2, ост. «Элеватор», с 07:00 до 19:00</li>
                        <li>📍 ул. Терешковой, 24б, ост. «Русский драматический театр» (в сторону центра), с 07:00 до 21:00</li>
                        <li>📍 ул. Терешковой, 7а/2, ост. «Русский драматический театр» (в сторону Республиканской больницы), с 07:00 до 19:00</li>
                        <li>📍 ул. Терешковой 40/1 ост. "Республиканская больница", с 07:00 до 21:00</li>
                        <li>📍 ул. Павлова 64а/1, между ост. "Химчистка" и "ТСК", с 07:00 до 19:00</li>
                        <li>📍 ул. Ключевская, 40/1, ост. «Юношеская библиотека», с 07:00 до 20:00</li>
                        <li>📍 ул. Ключевская, 64б/2, ост. «Товары Бурятии», с 07:00 до 20:00</li>
                        <li>📍 ул. Тулаева, 134б, ост. «Мелькомбинат» (конечная), с 07:00 до 20:00</li>
                        <li>📍 пр-т Строителей, 40, ост. «БСМП», с 07:00 до 20:00</li>
                        <li>📍 ул. Жердева, 58, ост. «44-й Квартал», с 07:00 до 19:00</li>
                    </ul>
                    <br />
                        <p>
                            Стоимость гражданского (не льготного) проездного на трамвай на один месяц – 1500 рублей.<br />
                            Стоимость льготного проездного на месяц – 625 рублей.
                        </p>
                        <br />
                        <p>❗Напоминаем, что для покупки проездного при себе необходимо обязательно иметь подтверждающие документы*:
                            <ul>
                                <li>📄 школьники - справку со школы;</li>
                                <li>📄 пенсионеры по старости - паспорт, пенсионное удостоверение, или свидетельство пенсионера, или справку от пенсионного фонда о назначении пенсии по старости;</li>
                                <li>📄 инвалиды I-II-III групп, дети-инвалиды - паспорт, справка, подтверждающая факт инвалидности;</li>
                                <li>📄 студенты - паспорт, действующий студенческий билет;</li>
                                <li>📄 ветераны боевых действий - паспорт, удостоверение ветерана боевых действий.</li>
                            </ul>
                        </p><br />
                        <p>Проездной даёт право на неограниченное количество поездок на трамвае в течение месяца.</p>
                        <p>
                            <ul>
                                <li>❗ При отсутствии документа, покупку не осуществить!<br /></li>
                                <li>❗ Контролеры и кондукторы будут просить подтверждающие документы, поэтому всегда носите их с собой (копии).<br /></li>
                                <li>❗ Также они имеют право изымать поддельные проездные билеты</li>
                            </ul>
                        </p>
                    </div>
            </div>
        )
    }
}

export default Faq