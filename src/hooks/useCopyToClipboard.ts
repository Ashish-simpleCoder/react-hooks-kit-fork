import { useState } from "react";

type textType = string | number;

type message = string;

interface copiedValueInterface {
  value?: textType | null;
  error?: Error | null;
  message: message;
}

interface CopyToClipboardInterface {
  copiedRes: copiedValueInterface;
  copyToClipboard: (text: textType) => void;
}

export const useCopyToClipboard = (): CopyToClipboardInterface => {
  const allowedType = ["string", "number"];

  const [copiedRes, setCopiedRes] = useState<copiedValueInterface>({
    value: null,
    error: null,
    message: "",
  });

  const copyToClipboard = async (text: textType) => {
    try {
      if (!text) {
        return setCopiedRes({
          ...copiedRes,
          message: "Cannot copy empty string to clipboard",
        });
      }

      if (!allowedType.includes(typeof text)) {
        return setCopiedRes({
          ...copiedRes,
          message: `Cannot copy typeof ${typeof text} to clipboard`,
        });
      }

      await navigator.clipboard.writeText(String(text));

      setCopiedRes({
        value: text,
        error: null,
        message: "Copied to clipboard!",
      });
    } catch (error) {
      setCopiedRes({ message: "", value: null, error: error as Error });
    }
  };

  return { copiedRes, copyToClipboard };
};
