import Input from "./elements/Input";
import Textarea from "./elements/Textarea";

export interface IHTMLElement {
  tagName: keyof HTMLElementTagNameMap;
  toString: () => string;
}

export type Attributes = {
  name?: string;
  for?: string;
  [key: string]: string | number | undefined;
};

export type Template = Record<string, string>;

export type FormProps = Record<string, string> & {
  url?: string;
  method?: string;
};

export type Field = Input | Textarea;


