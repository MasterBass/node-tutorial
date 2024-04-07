function doSomething(name) {
    const greeting = 'Hello, ' + name;
    console.log(greeting);
    return greeting.length;
}

function loggingDecorator(wrapped) {
    return function() {
        console.log('Starting');
        const result = wrapped.apply(null, arguments);
        console.log('Finished');
        return result;
    }
}

const wrapped = loggingDecorator(doSomething);

const result = wrapped('Peter Neo Pen!');
console.log(result);