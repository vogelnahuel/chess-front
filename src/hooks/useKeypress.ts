import { useEffect, useCallback } from "react";

export const useKeypress = (key: string, callback: () => void) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) callback();
    },
    [callback],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => handleKeyPress(event);

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleKeyPress]);
};
