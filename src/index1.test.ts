import { expect, test, vi } from 'vitest';
import { getNumberAndDoSomething } from './index';

vi.mock('./index', async () => {
  const actual = await vi.importActual<typeof import('./index')>('./index');

  return {
    getNumberAndDoSomething: actual.getNumberAndDoSomething,
    getRandomInt: vi.fn().mockReturnValue(666),
  }
})

test('getNumberAndDoSomething should not fail', () => {
  expect(getNumberAndDoSomething()).toEqual(666);
});

