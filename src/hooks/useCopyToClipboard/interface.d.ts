export type textType = string | number;

export type message = string;

export interface copiedValueInterface {
   value?: textType | null;
   error?: Error | null;
   message: message;
}

export interface CopyToClipboardInterface {
   copiedRes: copiedValueInterface;
   copyToClipboard: (text: textType) => void;
}
