import { updateWithLimits  } from './index';


test('updateWithLimits should work with 3 between (20, 0)', () => {
    const actual = updateWithLimits(3, 20, 0);
    const expected = 3;
    expect(actual).toBe(expected);
});

test('updateWithLimits should return 20 with this params (25, 20, 0)', () => {
    const actual = updateWithLimits(25, 20, 0);
    const expected = 20;
    expect(actual).toBe(expected);
});

test('updateWithLimits should return 0 with this params (-20, 20, 0)', () => {
    const actual = updateWithLimits(-2, 20, 0);
    const expected = 0;
    expect(actual).toBe(expected);
});