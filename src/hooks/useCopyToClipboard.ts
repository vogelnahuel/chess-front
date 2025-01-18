/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { COPY_TO_CLIPBOARD, getEnqueueSnackbar } from "../utils";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

export function useCopyToClipboard(): {
  copiedText: CopiedValue;
  copy: CopyFn;
} {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      getEnqueueSnackbar(COPY_TO_CLIPBOARD, "error");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      getEnqueueSnackbar(COPY_TO_CLIPBOARD);
      return true;
    } catch (error: any) {
      getEnqueueSnackbar(COPY_TO_CLIPBOARD, "error");
      setCopiedText(null);
      console.error("Failed to copy text: ", error);
      return false;
    }
  }, []);

  return { copiedText, copy };
}
