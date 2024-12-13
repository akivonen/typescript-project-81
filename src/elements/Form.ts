import Tag from "./Tag";
import Input from "./Input";
import Textarea from "./Textarea";
import { FormProps, Template, Attributes, Field } from "../types";

export default class Form extends Tag {
  private template: Template;
  private inputs: Field[];
  private defaultAttributes: Attributes = {
    action: '#',
    method: 'post',
  };
  constructor(template: Record<string, string>, attributes: Attributes | {}) {
    super('form');
    this.attributes = { ...this.defaultAttributes, ...attributes };
    this.template = template;
    this.inputs = [];
  }

  public input(fieldName: string, attrs?: Attributes): void {
    if (!Object.hasOwn(this.template, fieldName)) {
      throw new Error(`Field '${fieldName}' does not exist in the template.`);
    }
    const field = this.createInput(
      { name: fieldName, value: this.template[fieldName], ...attrs },
    )
    this.inputs.push(field);
  }

  public createInput(attrs: Attributes): Field {
    if (Object.hasOwn(attrs, 'as') && attrs.as === 'textarea') {
      const { as, ...textAreaAttrs } = attrs;
      return new Textarea(textAreaAttrs);
    }
    return new Input(attrs);
  }

  public inputsToString() : string {
    return this.inputs.join('');
  }

  public toString(): string {
    this.children = this.inputsToString();
    return super.toString();
  }
}