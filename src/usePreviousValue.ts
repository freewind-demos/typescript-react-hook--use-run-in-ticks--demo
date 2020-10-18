import {useEffect, useRef} from "react";

export default function usePreviousValue<T>(value: T) {
  console.log("### > usePreviousValue", value)
  const previousValueRef = useRef<T>(value);
  useEffect(() => {
    if (value !== previousValueRef.current) {
      console.log("### previousValueRef.current = ", value)
      previousValueRef.current = value;
    }
  }, [value])
  return previousValueRef.current;
};
