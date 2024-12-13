import Tag from "./Tag";
import { Attributes } from "../types";

export default class Label extends Tag {

  constructor(attributes: Attributes) {
    super('label');
    this.attributes = attributes;
    const labelText = attributes.for
      ? `${attributes.for.charAt(0).toUpperCase()}${attributes.for.slice(1)}`
      : '';
    this.children = labelText;
  }
}