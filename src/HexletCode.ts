import Form from "./elements/Form";
import { FormProps, Template } from "./types";

export default class HexletCode {
  static formFor(template: Template, props: Partial<FormProps> = {}, fn?: (f: Form) => void) {
    const { url, ...restProps } = props;
    const handledProps = url
      ? { action: url, ...restProps }
      : restProps;
    const form = new Form(template, handledProps);

    if (fn) fn(form);

    return form.toString();
  }
};