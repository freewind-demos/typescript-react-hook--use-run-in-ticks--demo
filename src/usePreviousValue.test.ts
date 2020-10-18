import {renderHook} from '@testing-library/react-hooks';
import usePreviousValue from "./usePreviousValue";

describe('usePreviousValue', () => {
  it('uses initial value as previous value if no new value updated', () => {
    const {result} = renderHook(usePreviousValue, {initialProps: 111})
    expect(result.current).toBe(111);
  })

  it('keeps previous value when new value updated', () => {
    const {result, rerender} = renderHook(usePreviousValue, {
      initialProps: 111
    })
    expect(result.current).toBe(111);

    rerender(222);
    expect(result.current).toBe(111);

    rerender(333);
    expect(result.current).toBe(222);
  })

})
