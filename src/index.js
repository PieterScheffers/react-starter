import React from 'react';
import ReactDOMServer from 'react-dom/server';

// ES6 classes + spread operator

class Person {
    constructor(...names) {
        this.names = names;
    }

}

let bob = new Person('Bob', "Mindy");
console.log(bob.names);


// React

class NewElement extends React.Component {
    render() {
        return <div>newElement</div>;
    }
}

console.log(ReactDOMServer.renderToString(<NewElement/>));
console.log(ReactDOMServer.renderToStaticMarkup(<NewElement/>));