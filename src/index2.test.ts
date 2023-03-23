import { expect, test, vi } from 'vitest';
import * as index from './index';

vi.spyOn(index, 'getRandomInt').mockReturnValue(666)

test('getNumberAndDoSomething should not fail', () => {
  expect(index.getNumberAndDoSomething()).toEqual(666);
});

