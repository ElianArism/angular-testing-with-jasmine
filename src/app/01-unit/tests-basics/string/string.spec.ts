import { message } from './string';
/**
  * Group tests
  * describe(); 
   
  * Define test
  * it(); 
 */

describe('Strings', () => {
  it('It should return a string', () => {
    const mess = message('Elian');
    expect(typeof mess).toBe('string');
  });

  it('It should return a message with the passed value', () => {
    const name = 'Elian';
    const mess = message('Elian');
    expect(mess).toContain(name);
  });
});
