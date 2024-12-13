import { expect, test, describe, assert } from 'vitest';
import HexletCode from "../HexletCode";
import formFixtures from 'src/__fixtures__/formFixtures';

describe('HexletCode tests', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };
  
  test('field generation', () => {
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
    });
    const actual = formFixtures.test1;
    expect(form).toBe(actual);
  });

  test('additional attrs for fields', () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input('name', {class: 'user-input'});
      f.input('job');
    });
    const actual = formFixtures.test2;
    expect(form).toBe(actual);
  });

  test('default attrs', () => {
    const form = HexletCode.formFor(template, {}, (f) =>
      f.input('job', { as: 'textarea' }));
    const actual = formFixtures.test3;
    expect(form).toBe(actual);
  });

  test('default attrs overriding', () => {
    const form = HexletCode.formFor(template, { url: '#' }, (f) =>
      f.input('job', { as: 'textarea', rows: 50, cols: 50}));
    const actual = formFixtures.test4;
    expect(form).toBe(actual);
  });

  test('if field doesn`t exist in tpl should throw', () => {
    assert.throws(() => {
      const form = HexletCode.formFor(template, { url: '/users' }, (f) => {
        f.input('name');
        f.input('job', { as: 'textarea' });
        f.input('age');
      });  
    }, formFixtures.test5)
  });

  test('submit with default attrs', () => {
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
      f.submit();
    });
    const actual = formFixtures.test6;
    expect(form).toBe(actual);
  });

  test('submit with custom value', () => {
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job', { as: 'textarea' });
      f.submit('Wow');
    });
    const actual = formFixtures.test7;
    expect(form).toBe(actual);
  });
})

