import {renderHook} from '@testing-library/react-hooks';
import {useRunInTicks} from './useRunInTicks';

describe('usePreviousValue', () => {
  it('uses initial value as previous value if no new value updated', () => {
    let count = 1;

    const {result, rerender, waitForNextUpdate} = renderHook(useRunInTicks, {
      initialProps: [
        () => {
          count += 1
        },
        () => {
          count += 1
        },
      ]
    })
    expect(count).toMatchInlineSnapshot(`1`);
    result.current();
    rerender();
    waitForNextUpdate()
    expect(count).toMatchInlineSnapshot(`2`);
    rerender();
    waitForNextUpdate()
    expect(count).toMatchInlineSnapshot(`2`);
  })


})
