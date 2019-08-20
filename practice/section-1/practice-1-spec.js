'use strict';

describe('practice-1-1', () => {

  const collection = [1, 3, 5, 7, 9, 2];

  it('从数组中选一个数返回', () => {

    const result = find(collection, 3);

    expect(result).toEqual(3);
  });
});
