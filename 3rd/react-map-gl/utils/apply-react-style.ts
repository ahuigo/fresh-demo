import * as React from 'preact';
import type {CSSProperties} from 'preact/compat'
// This is a simplified version of
// https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSPropertyOperations.js#L62
const unitlessNumber = /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;

export function applyReactStyle(element: HTMLElement, styles: CSSProperties) {
  if (!element || !styles) {
    return;
  }
  const style = element.style;

  for (const key in styles) {
    const value = styles[key];
    if (Number.isFinite(value) && !unitlessNumber.test(key)) {
      // @ts-ignore:
      style[key] = `${value}px`;
    } else {
      // @ts-ignore:
      style[key] = value;
    }
  }
}
