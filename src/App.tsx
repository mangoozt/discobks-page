import React from 'react';
import './App.css';
import Button from "./components/Button/Button";


class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {case: null, error: false}
        // This binding is necessary to make `this` work in the callback
        this.loadCase = this.loadCase.bind(this);
    }

    loadCase() {
        fetch("/api/random_case")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        case: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div className="App row">
                <div className="column">
                    <Button text="Load case" onClick={this.loadCase}></Button>
                    <div><code>{this.state.error?String(this.state.error):this.state.case}</code></div>
                </div>
                <div className="column">
                    <Button text="Solve case" disabled={!Boolean(this.state.case)}></Button>
                    <code>{this.state.result}</code></div>
            </div>
        );
    }
}

export default App;
