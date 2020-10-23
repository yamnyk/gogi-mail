import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {Header} from "./Header";
import {act} from "@testing-library/react";

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('header component tests', () => {
  test('header renders', () => {
    act(() => {
      render(<Header />, container);
    });
  });
  test('header renders title from props correctly', () => {
    const titleText = 'Gogi';
    act(() => {
      render(<Header myTitle={titleText}/>, container);
    });
    const titleEl = container.getElementsByTagName('h2')[0];
    expect(titleEl.textContent).toBe(titleText);
  });
  test('header contains counter', () => {
    const titleText = 'Gogi';
    const COUNTER_REGEX = /count: [0-9]/i;

    act(() => {
      render(<Header/>, container);
    });

    const counter = container.getElementsByClassName('counter')[0];

    expect(counter).toBeDefined();
    expect(COUNTER_REGEX.test(counter.textContent)).toBeTruthy();
  });
});