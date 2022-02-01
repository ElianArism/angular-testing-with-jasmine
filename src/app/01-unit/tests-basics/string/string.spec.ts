import { message } from './string';
/**
  * Para agrupar pruebas
  * describe(); 
   
  * Para crear/realizar una prueba
  * it(); 
 */

describe('Tests of Strings', () => {
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
