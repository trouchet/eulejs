import _ from "lodash";

import euler from "../eulejs";

describe("euler", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
    console.warn.mockRestore();
  });

  afterEach(() => {
    console.error.mockClear();
    console.warn.mockClear();
  });

  it("should throw Typerror for ill-conditioned input", () => {
    function illConditionedInput() {
      return euler("");
    }

    expect(illConditionedInput).toThrow(
      "Ill-conditioned input. It must be either a json-like or array of arrays object!",
    );
  });

  it("should throw Typerror for ill-conditioned input", () => {
    function illConditionedInput() {
      return euler([]);
    }

    expect(illConditionedInput).toThrow("There must at least ONE set!");
  });

  it("should warn once for duplicated set entries", () => {
    euler({ a: [1, 1, 2] });
    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it("should raise error once for duplicated set entries", () => {
    euler({ a: [1, 1, 2] });
    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it("should return a multiple set interactions - Sample 1", () => {
    const list_1 = [1, 2, 3];
    const list_2 = [2, 4, 5];
    const list_3 = [2, 6, 7];

    const result = {
      0: [1, 3],
      1: [4, 5],
      2: [6, 7],
      "0,1,2": [2],
    };

    expect(euler([list_1, list_2, list_3])).toEqual(result);
    expect(euler([list_1, list_2, list_3])).toEqual(result);
  });

  it("should return a multiple set interactions - Sample 1", () => {
    const list_1 = [1, 2, 3];
    const list_2 = [2, 4, 5];
    const list_3 = [2, 6, 7];

    const result = {
      0: [1, 3],
      1: [4, 5],
      2: [6, 7],
      "0,1,2": [2],
    };

    expect(euler([list_1, list_2, list_3])).toEqual(result);
    expect(euler([list_1, list_2, list_3])).toEqual(result);
  });

  it("should return a multiple set interactions - Sample 2", () => {
    const list_1 = [1, 2, 3];
    const list_2 = [2, 4, 5];
    const list_3 = [2, 6, 7];

    const result = {
      0: [1, 3],
      1: [4, 5],
      2: [6, 7],
      "0,1,2": [2],
    };

    expect(euler([list_1, list_2, list_3])).toEqual(result);
    expect(euler([list_1, list_2, list_3])).toEqual(result);
  });

  it("should validate empty exclusivity from Euler Diagram", () => {
    const list_1 = [1, 2, 3, 4, 5, 6];
    const list_2 = [4, 5, 6];

    const result = {
      0: [1, 2, 3],
      "0,1": [4, 5, 6],
    };

    expect(euler([list_1, list_2])).toEqual(result);
  });
});
