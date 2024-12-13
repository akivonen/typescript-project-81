import Tag from "./Tag";
import { Attributes } from "../types";

export default class Textarea extends Tag {
  private defaultAttributes: Attributes = {
    cols: '20',
    rows: '40',
  };
  
  constructor(attributes: Attributes) {
    super('textarea');
    const { value, name, ...textAreaAttrs } = attributes;
    this.attributes = {
      ...this.defaultAttributes,
      name,
      ...textAreaAttrs,
    }
    this.children = attributes?.value ?? '';
  }

}