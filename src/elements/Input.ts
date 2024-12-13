import Tag from "./Tag";
import { Attributes } from "../types";

export default class Input extends Tag {

  constructor(attributes: Attributes) {
    super('input');
    const { name, ...inputAttrs } = attributes;
    this.attributes = {
      name,
      type: 'text',
      ...inputAttrs,
    };
  }

}