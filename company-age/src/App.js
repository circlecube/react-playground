import React, { Component } from 'react';

// Create new context
const MyContext = React.createContext();

// Create the Provider that will pass down state and methods to the rest of the application.
class MyProvider extends Component {
    state = {
            name: '10up',
            age: 8,
    };
    render() {
            return (
                    <MyContext.Provider value={{
                            state: this.state,
                            addYear: () => this.setState({
                                    age: this.state.age + 1
                            })
                    }}>
                        {this.props.children}
                    </MyContext.Provider>
            )
    }
}

// Create the consumer that will consume the data provided by the Provider.
class Company extends Component {
    render() {
            return(
                    <div className="company">
                        <MyContext.Consumer>
                                {(context) => (
                                    //Fragment added here since you can only return one child
                                    <>
                                            <p>Welcome to {context.state.name}</p>
                                            <p>We are {context.state.age} years old!</p>
                                            <button onClick={context.addYear}>Add Year</button>
                                    </>
                                )}
                            </MyContext.Consumer>
                    </div>
            )
    }
}

// We'll nest our Consumer inside another component just to show that we don't need to pass props to each component.
const Companies = () => (
    <div>
        <Company />
    </div>
)

class App extends Component {
    render() {
        return (
             // Ensure the provider wraps all the components you want to share data between.
            <MyProvider>
                <div className="App">
                    <Companies />
                </div>
            </MyProvider>
        );
    }
}

export default App;