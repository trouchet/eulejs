const eule = require("eulejs");

const diagram = eule.euler({
  a: [1, 2, 3],
  b: [2, 3, 4],
  c: [3, 4, 5],
  d: [3, 5, 6],
});

/* Euler dictionary:
 *	 {
 *		'a,b': [2],
 * 		'b,c': [4],
 * 		'a,b,c,d': [3],
 *		'c,d': [5],
 *		'd': [6],
 *		'a': [1]
 *	 }
 */
console.log(diagram);
 