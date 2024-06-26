import { log } from '../index';

jest.spyOn(global.console, 'log');

describe('@dank/logger', () => {
  it('prints a message', () => {
    log('hello');
    // eslint-disable-next-line no-console -- testing console
    expect(console.log).toBeCalledWith('LOGGER: ', 'hello');
  });
});
