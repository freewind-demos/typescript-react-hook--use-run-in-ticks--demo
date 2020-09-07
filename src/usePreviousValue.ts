import {useEffect, useRef} from "react";

export default function usePreviousValue<T>(value: T) {
  const previousValueRef = useRef<T>(value);
  useEffect(() => {
    if (value !== previousValueRef.current) {
      previousValueRef.current = value;
    }
  }, [value])
  return previousValueRef.current;
};
