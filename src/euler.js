import _ from "lodash";

import { objectReduce, unique } from "./utils.js";

/**
 *   @abstract returns each tuple [key, elems] of the Euler diagram
 *   systematic in a generator-wise fashion
 *   Rationale:
 *      1. Begin with the available sets and their exclusive elements;
 *      2. Compute complementary elements to current key-set;
 *      3. In case complementary set-keys AND current set content are not empty, continue;
 *      Otherwise, go to next key-set;
 *      4. Find the euler diagram on complementary sets;
 *      5. Compute exclusive combination elements;
 *      6. In case there are exclusive elements to combination:
 *      6.a Yield exclusive combination elements;
 *      6.b Remove exclusive combination elements from current key-set;
 *   @param {Array} sets
 *   @return {Array} keys_elems
 */

export function* eulerGenerator(sets) {
  // There are no sets
  if (
    sets.constructor !== {}.constructor &&
    sets.constructor !== [].constructor
  ) {
    throw new TypeError(
      "Ill-conditioned input. It must be either a json-like or array of arrays object!",
    );
  }

  let is_unique_set_arr = true;

  for (const value of Object.values(sets)) {
    is_unique_set_arr &= unique(value).length === value.length;
  }

  if (!is_unique_set_arr) {
    console.warn("Each array MUST NOT have duplicates");
    sets = objectReduce(
      sets,
      (result, __, key) => {
        result[key] = unique(sets[key]);
        return result;
      },
      {},
    );
  }

  if (Object.values(sets).length === 0)
    throw new TypeError("There must at least ONE set!");

  if (Object.values(sets).length === 1) yield Object.entries(sets)[0];

  const sets_keys_fun = (sets_) =>
    Object.keys(sets_).filter((key) => sets_[key].length !== 0);

  let compl_sets_keys = [];
  let comb_str = "";
  let celements = [];
  let comb_intersec_key = "";
  let comb_intersec = [];
  let comb_excl = [];
  let compl_sets = {};

  let sets_keys = sets_keys_fun(sets);

  // Traverse the combination lattice
  for (const set_key of sets_keys) {
    compl_sets_keys = _.difference(sets_keys, [set_key])
      .filter((compl_set_key) => sets[compl_set_key].length !== 0)
      .map((compl_set_key) => String(compl_set_key));

    if (compl_sets_keys.length !== 0 && sets[set_key].length !== 0) {
      compl_sets = objectReduce(
        compl_sets_keys,
        (result, __, compl_set_key) => {
          result[compl_set_key] = sets[compl_set_key];
          return result;
        },
        {},
      );

      for (const comb_elements of eulerGenerator(compl_sets)) {
        comb_str = comb_elements[0];
        celements = comb_elements[1];

        comb_excl = _.difference(celements, sets[set_key]);
        if (comb_excl.length !== 0) {
          // 1. Exclusive elements of group except current analysis set
          yield [comb_str, comb_excl];

          comb_str.split(",").forEach((ckey) => {
            sets[ckey] = _.difference(sets[ckey], comb_excl);
          });

          sets[set_key] = _.difference(sets[set_key], comb_excl);
        }

        comb_intersec = _.intersection(celements, sets[set_key]);
        if (comb_intersec.length !== 0) {
          // 2. Intersection of analysis element and exclusive group
          comb_intersec_key = [set_key].concat(comb_str.split(",")).join(",");

          yield [comb_intersec_key, comb_intersec];

          comb_str.split(",").forEach((ckey) => {
            sets[ckey] = _.difference(sets[ckey], comb_intersec);
          });

          sets[set_key] = _.difference(sets[set_key], comb_intersec);
        }

        sets_keys = sets_keys_fun(sets);
      }

      // 3. Set-key exclusive elements
      if (sets[set_key].length !== 0) {
        yield [String(set_key), sets[set_key]];
        sets[set_key] = [];
      }
    }
  }
}

export const euler_ = (sets) => {
  return Object.fromEntries([...eulerGenerator(sets)]);
};
