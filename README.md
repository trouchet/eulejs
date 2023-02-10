![a night owl](https://raw.githubusercontent.com/web-needle/eulejs/main/images/eule_small.png)

[![Version](https://img.shields.io/npm/v/eulejs.svg)](https://www.npmjs.com/package/eulejs)
[![codecov](https://codecov.io/gh/trouchet/eulejs/branch/main/graph/badge.svg?token=NG8LI6FZCQ)](https://codecov.io/gh/trouchet/eulejs)
[![downloads](https://img.shields.io/npm/dm/eulejs)](https://www.npmjs.com/package/eulejs)

Euler\'s diagrams are non-empty Venn\'s diagrams. For further information, read following [wikipedia article](https://en.wikipedia.org/wiki/Euler_diagram). Have fun!

Motivation
========

<img src="https://github.com/web-needle/eulejs/blob/main/images/euler_venn.png?raw=true" width="400" height="364"/>

How to install
========

We run the command on bash terminal:

``` {.bash}
npm i --save eulejs
```

Example
========

We do: 

1. Navigate to folder `example/`
2. Run the command `npm i --save-dev eulejs`
3. Run the command `npm start`. 

The following output log appears in console:

```
{    
  d: [ 6 ],
  'c,d': [ 5 ],
  'a,b,c,d': [ 3 ],
  'b,c': [ 4 ],
  'a,b': [ 2 ],
  a: [ 1 ]
}

```

License
=======

-   Free software: MIT license
