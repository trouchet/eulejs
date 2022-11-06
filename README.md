![a night owl](https://raw.githubusercontent.com/web-needle/eulejs/main/images/eule_small.png)

Euler\'s diagrams are non-empty Venn\'s diagrams. For further information, read following [wikipedia article](https://en.wikipedia.org/wiki/Euler_diagram). Have fun!

<img src="https://github.com/web-needle/eulejs/blob/main/images/euler_venn.png?raw=true" width="400" height="364"/>

How to install
========

We run the command on bash terminal:

``` {.bash}
npm i --save eulejs
```

Features
========

We create a NodeJS project with src `index.js` and following content:

``` {.javascript}
import spread_euler from 'eulejs'

const diagram = spread_euler(
    {
        'a': [1, 2, 3],
        'b': [2, 3, 4],
        'c': [3, 4, 5],
        'd': [3, 5, 6]
    })

# Euler dictionary: {'a,b': [2], 'b,c': [4], 'a,b,c,d': [3], 'c,d': [5], 'd': [6], 'a': [1]}
console.log(diagram)
```

License
=======

-   Free software: MIT license
