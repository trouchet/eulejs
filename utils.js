import _ from 'lodash';

/**
 * @abstract
 *
 * @param {Array} list
 * @return {Array} unique_list
 */
export const removeArrayDuplicates = (list) => {
  const unique = [];

  list.forEach((item) => {
    let has_item = false;

    unique.forEach((unique_item) => {
      has_item = has_item || _.isEqual(item, unique_item);
    });

    if (!has_item) {
      unique.push(item);
    }
  });

  return unique;
};

/**
 * @abstract returns a reduced object
 *
 * @param {Object} object
 * @param {function} reduceFn
 * @return {Object}
 */
export const objectReduce = (object, reduceFn, init_val) => Object.entries(_.cloneDeep(object)).reduce((
  result,
  [key, value],
) => reduceFn(result, key, value), init_val);
