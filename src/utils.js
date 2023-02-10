import _ from "lodash";

/**
 * @abstract returns a reduced object
 *
 * @param {Object} object
 * @param {function} reduceFn
 * @return {Object}
 */
export const objectReduce = (object, reduceFn, init_val) =>
  Object.entries(_.cloneDeep(object)).reduce(
    (result, [key, value]) => reduceFn(result, key, value),
    init_val,
  );

/**
 * @abstract returns list with unique elements
 *
 * @param {Object} object
 * @param {function} reduceFn
 * @return {Object}
 */
export const unique = (lst) => [...new Set(lst)];

/**
 * @abstract returns an object with given keys and initial value
 *
 * @param {Array} keys
 * @param {Object} initial_value
 * @return {Object}
 */
export const objectInit = (keys, init_value) => {
  const a = [];
  let total = keys.length;

  while (total--) a.push(_.cloneDeep(init_value));

  return Object.fromEntries(_.zip(keys, [...a]));
};
