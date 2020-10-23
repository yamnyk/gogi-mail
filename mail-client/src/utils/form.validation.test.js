import {EMAIL_REGEX} from "./formValidation";

describe('form validation function testing', () => {
  test('email regex test', () => {
    expect(EMAIL_REGEX.test('a@a.a')).toBeTruthy();
    // expect(EMAIL_REGEX.test('a@a')).toBeFalsy();
  });
});