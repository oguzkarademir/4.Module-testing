'use strict';

const expect = chai.expect;

describe('dot notation', () => {
  it('types of tasty treats', () => {
    const favorite = 'soup';
    const obj = {
      wet: favorite,
      dry: 'bread'
    };
    expect(obj.dry).to.eql('bread');
    expect(obj.wet).to.eql('soup');
  });
  it('a menagerie', () => {
    const swimming = 'mackerel';
    const obj = {
      flying: 'crane',
      swimming: swimming,
      running: 'cheetah'
    };
    expect(obj.flying).to.eql('crane');
    expect(obj.running).to.eql('cheetah');
    expect(obj.swimming).to.eql('mackerel')
  });
});
