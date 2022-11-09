import {useEffect, useState} from "react";

type Action = () => void

export function useRunInTicks(actions: Action[]) {
  const [actionIndex, setActionIndex] = useState<number | undefined>(undefined);

  useEffect(() => {
    console.log("### useEffect", actionIndex)
    if (actionIndex !== undefined) {
      if (actionIndex >= actions.length) {
        setActionIndex(undefined)
      } else {
        const action = actions[actionIndex];
        action();
        setActionIndex(actionIndex + 1)
      }
    }
  }, [actionIndex, actions])

  return () => setActionIndex(0);
}
