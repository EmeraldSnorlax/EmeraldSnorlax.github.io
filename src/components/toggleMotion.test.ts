import { render, fireEvent, } from '@testing-library/svelte';
import { expect } from 'chai';
import App from '../App.svelte';

describe('<ToggleMotion>',  () => {
  it('Toggles the background', async () => {
    const { getByText, getByTestId } = render(App);
    const btn = getByText(/toggle animation/i);
    const main = getByTestId('main');
    expect(main.className).to.not.include('safe')
    await fireEvent.click(btn)
    const bg = getByTestId(/main/)
    expect(main.className).to.include('safe');
  });
});
