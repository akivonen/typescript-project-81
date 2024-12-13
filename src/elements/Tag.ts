import { IHTMLElement, Attributes } from "../types";

export default class Tag implements IHTMLElement {
  public tagName: keyof HTMLElementTagNameMap;
  public attributes: Attributes;
  public children: string | number;
  public isSingleTag: boolean;
  public singleTags: string[] = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'source',
  ];

  constructor(name: keyof HTMLElementTagNameMap, attributes?: Attributes, children?: string) {
    this.tagName = name;
    this.attributes = attributes ?? {};
    this.children = children ?? '';
    this.isSingleTag = this.singleTags.includes(name);
  };

  protected attrsToString(): string {
    const stringifiedAttrs = Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')
      .trim();
    return stringifiedAttrs.length > 0 
      ? ` ${stringifiedAttrs}`
      : '';
  }

  public toString(): string {
    return this.isSingleTag
      ? `<${this.tagName}${this.attrsToString()}>`
      : `<${this.tagName}${this.attrsToString()}>${this.children}</${this.tagName}>`; 
  };
}