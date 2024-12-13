import { expect, test, describe, assert } from 'vitest';
import HexletCode from "../HexletCode";

describe('HexletCode tests', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };
  test('field generation', () => {
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
    });
    const actual = `<form action="#" method="post"><input name="name" type="text" value="rob"><textarea name="job" cols="20" rows="40">hexlet</textarea></form>`;
    expect(form).toBe(actual);
  });

  test('additional attrs for fields', () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input('name', {class: 'user-input'});
      f.input('job');
    });
    const actual = `<form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"><input name="job" type="text" value="hexlet"></form>`;
    expect(form).toBe(actual);
  });

  test('default attrs', () => {
    const form = HexletCode.formFor(template, {}, (f) =>
      f.input('job', { as: 'textarea' }));
    const actual = `<form action="#" method="post"><textarea name="job" cols="20" rows="40">hexlet</textarea></form>`;
    expect(form).toBe(actual);
  });

  test('default attrs overriding', () => {
    const form = HexletCode.formFor(template, { url: '#' }, (f) =>
      f.input('job', { as: 'textarea', rows: 50, cols: 50}));
    const actual = `<form action="#" method="post"><textarea name="job" cols="50" rows="50">hexlet</textarea></form>`;
    expect(form).toBe(actual);
  });

  test('if field doesn`t exist in tpl should throw', () => {
    assert.throws(() => {
      const form = HexletCode.formFor(template, { url: '/users' }, (f) => {
        f.input('name');
        f.input('job', { as: 'textarea' });
        f.input('age');
      });  
    }, `Field 'age' does not exist in the template.`)
  })
})

