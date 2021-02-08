import { Route, Switch, useRouteMatch } from "react-router-dom";
import { StartPage, BoardPage, FinishPage } from './Routes';

const GamePage = (): JSX.Element => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
    );
}

export default GamePage;