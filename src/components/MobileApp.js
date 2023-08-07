import React from "react"

class MobileApp extends React.Component {
    render() {
        return (
            <div id="anchor-bus03" className="baseColor block">
                <p>Следить за движением трамваев в режиме онлайн можно на странице проекта BUS03</p>
                <br/>
                <p>а также с помощью приложения "Умный Транспорт"</p>
                <br/>
                <a className="btn btn-default" href="http://bus03.ru/" target="_blank">Перейти</a>
            </div>
        )
    }
}

export default MobileApp