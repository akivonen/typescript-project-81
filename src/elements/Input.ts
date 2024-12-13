import Tag from "./Tag";
import { Attributes } from "../types";

export default class Input extends Tag {

  constructor(attributes: Attributes) {
    super('input');
    const { name, type, ...inputAttrs } = attributes;
    this.attributes = attributes.type === 'submit'
      ? { type, ...attributes }
      : {
        name,
        type: 'text',
        ...inputAttrs,
      };
  }

}