import {useHistory} from "react-router-dom"

export const NotFoundPage = (): JSX.Element => {

    const history = useHistory();

    return (
        <div>
            404. Так тоже бывает.
            <div>
                <button onClick={() => history.push('/')}>
                    Вернуться домой
                </button>
            </div>
        </div>
    )
}