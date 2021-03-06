
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "3456789012" para "1234567890" con offset 12', () => {
      assert.equal(cipher.encode(12, "1234567890"), "3456789012");
    });

    it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest -33', () => {
      assert.equal(cipher.encode(-33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "TUVWXYZABCDEFGHIJKLMNOPQRS");
    });

    it('debería retornar "tuvwxyzabcdefghijklmnopqrs" para "abcdefghijklmnopqrstuvwxyz" con offest -33', () => {
      assert.equal(cipher.encode(-33, "abcdefghijklmnopqrstuvwxyz"), "tuvwxyzabcdefghijklmnopqrs");
    });

    it('debería retornar "9012345678" para "1234567890" con offset -12', () => {
      assert.equal(cipher.encode(-12, "1234567890"), "9012345678");
    });

    it('debería retornar "!@#%&/()=?[]+{}<>;,:.-¿¡" para "!@#%&/()=?[]+{}<>;,:.-¿¡" con offest 33', () => {
      assert.equal(cipher.encode(33, "!@#%&/()=?[]+{}<>;,:.-¿¡"), "!@#%&/()=?[]+{}<>;,:.-¿¡");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "1234567890" para "3456789012" con offset 12', () => {
      assert.equal(cipher.decode(12, "3456789012"), "1234567890");
    });

    it('debería retornar "!@#%&/()=?[]+{}<>;,:.-¿¡" para "!@#%&/()=?[]+{}<>;,:.-¿¡" con offest 33', () => {
      assert.equal(cipher.decode(33, "!@#%&/()=?[]+{}<>;,:.-¿¡"), "!@#%&/()=?[]+{}<>;,:.-¿¡");
    });

  });

});
