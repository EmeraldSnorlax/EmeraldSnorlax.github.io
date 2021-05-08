import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import App from '../App.svelte';

describe('<Intro>', () => {
  it('draws the svg', () => {
    const { getByTitle } = render(App);
    const svg = getByTitle('Rain');
    expect(document.body.contains(svg));
  });
});
