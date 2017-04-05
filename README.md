# iReactivity example
This is example of iReactivity usage. 
This is small app/example that defines id for user in both ways sync and async (promises).

It should work in this way.
```jsx harmony
// ....

const store = {
    user: new UserState(new User('slava'))
};

const App = connect(AppView, {
    user: (store) => store.user.user,
    onClickSync: (store) => () => store.user.generateId(),
    onClickAsync: (store) => (id) => store.user.asyncSetId(id)
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
```

```jsx harmony

// AppView looks like:
import React from 'react';
import './App.css';

let uid = () => Math.random().toString(35).slice(2, 30);

export default ({user, onClickSync, onClickAsync}) =>
    <div className="App">
        <div className="header">
            <h2>{user.name} {user.id}</h2>
        </div>
        <p className="actions">
            <button onClick={onClickSync}>Sync</button>
            <button onClick={() => onClickAsync(uid()) }>Async</button>
        </p>
    </div>
```

```jsx harmony
/// and classes looks like


class User {
    constructor(name) {
        this.id = null;
        this.name = name;
    }
}

class UserState {
    constructor(user) {
        this.user = user;
    }

    setId(id) {
        // this.user.id = id;
        this.user = {...this.user, ...{id}};
    }

    generateId() {
        this.setId(uid())
    }

    asyncSetId(id) {
        this.setId(null);

        return Promise.resolve()
            .then(() => wait(500)) // just for example
            .then(() => this.setId(id));
    }
}
```

all details placed in: [./src/index.js](./src/index.js)

## How to start
- `npm install`
- `npm start`

## iReactivity
[https://www.npmjs.com/package/ireactivity](https://www.npmjs.com/package/ireactivity) - Simple React binding 