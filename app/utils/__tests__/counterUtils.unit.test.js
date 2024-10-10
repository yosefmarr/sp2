import { increment } from '../counterUtils';

describe('increment', () => {
  test('should increment a positive number', () => {
    expect(increment(1)).toBe(2);
  });

  test('should increment zero', () => {
    expect(increment(0)).toBe(1);
  });

  test('should increment a negative number', () => {
    expect(increment(-1)).toBe(0);
  });

  test('should increment large numbers correctly', () => {
    expect(increment(999999)).toBe(1000000);
  });
});
