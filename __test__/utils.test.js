import _ from "lodash";

import { objectInit, objectReduce, unique } from "../utils";

describe("objects", () => {
  it("should return reduced object by certain function", () => {
    const object_ = objectInit(["a", "b"], 1);

    const newObject = objectReduce(
      object_,
      (result, key, value) => {
        result[key] = 2 * value;
        return result;
      },
      {},
    );

    expect(JSON.stringify(newObject)).toBe(JSON.stringify({ a: 2, b: 2 }));
  });

  it("should return an initialized object", () => {
    const object_ = objectInit(["a", "b"], 1);

    expect(Object.keys(object_)).toEqual(["a", "b"]);
    expect(Object.values(object_)).toEqual([1, 1]);
  });

  it("should return unique array elements", () => {
    const object_ = unique(["a", 1, { a: 1 }, "a"]);

    expect(object_).toEqual(["a", 1, { a: 1 }]);
  });

  it("should return unique array elements", () => {
    const object_ = unique(["a", 1, { a: 1 }, "a"]);

    expect(object_).toEqual(["a", 1, { a: 1 }]);
  });
});
