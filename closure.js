
/*const arr = [5, 8, 13, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}*/




(function start() {
    const arr = [5, 8, 13, 21];
    for (let i = 0; i < arr.length; i++) {
        setTimeout(function(x) {
            return function() {
                console.log('Index: ' + x + ', element: ' + arr[x]);
            };
        }(i), 3000);
    }
}());
