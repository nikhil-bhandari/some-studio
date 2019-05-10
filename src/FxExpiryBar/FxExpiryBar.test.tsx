import { renderHook, act } from 'react-hooks-testing-library'
import FxExpiryBar from './FxExpiryBar'

test('should increment counter', () => {
  const { result } = renderHook(() => FxExpiryBar())

  act(() => result.current.increment())

  expect(result.current.count).toBe(1)
})

test('should decrement counter', () => {
  const { result } = renderHook(() => FxExpiryBar())

  act(() => result.current.decrement())

  expect(result.current.count).toBe(-1)
})