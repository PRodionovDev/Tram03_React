import React from "react"

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="logo"></div>
                <div>
                <ul>
                    <li><a href="#anchor-index">Главная</a></li>
                    <li><a href="#anchor-info">Пассажирам</a></li>
                    <li><a href="#anchor-scheme">Схема</a></li>
                    <li><a href="#anchor-bus03">Умный транспорт</a></li>
                    <li><a href="#anchor-proezd03">Проездной</a></li>
                    <li><a href="#anchor-faq">Информация</a></li>
                </ul>
                </div>
          </nav>
        )
    }
}

export default Header