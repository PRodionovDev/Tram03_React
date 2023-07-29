import React from "react"

class Info extends React.Component {
    render() {
        return (
            <div className="baseColor block">
                <h2>Информация о маршрутах</h2>
                <br/>
                <p>Направления движения трамваев нашего города вы можете узнать на интерактивной карте 2ГИС</p>
                <div className="tram_number">
                    <h3>Трамваи:</h3>
                    <p><a className="btn" href="https://2gis.ru/ulanude/route/5207892659535917" target="_blank">№ 1</a></p>
                    <p><a className="btn" href="https://2gis.ru/ulanude/route/5207892659535916" target="_blank">№ 2</a></p>
                    <p><a className="btn" href="https://2gis.ru/ulanude/route/5207892659535918" target="_blank">№ 4</a></p>
                    <p><a className="btn" href="https://2gis.ru/ulanude/route/5207892659535919" target="_blank">№ 5</a></p>
                    <p><a className="btn" href="https://2gis.ru/ulanude/route/5207892914730739" target="_blank">№ 7</a></p>
                    <p><a className="btn" href="https://2gis.ru/ulanude/route/5207892914736053" target="_blank">№ 8</a></p>
                </div>
            </div>
        )
    }
}

export default Info