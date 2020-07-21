const expect = chai.expect;

describe('ES6 object literal shorthand', () => {
  it('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = { wet, dry };
    expect(obj.dry).to.eql('bread');
    expect(obj.wet).to.eql('soup');
  });
  it('ES5, ES6', () => {
    const tall = 'tree';
    const obj = {
      tall,
      short: 'bush'
    };
    expect(obj.short).to.eql('bush');
    expect(obj.tall).to.eql('tree');
  });
  it('a menagerie', () => {
    const swimming = 'mackerel';
    const obj = {
      flying: 'crane',
      swimming,
      running: 'cheetah'
    };
    expect(obj.flying).to.eql('crane');
    expect(obj.running).to.eql('cheetah');
    expect(obj.swimming).to.eql('mackerel')
  });
});