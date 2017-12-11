import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJestDiff from 'chai-jest-diff';
import dirtyChai from 'dirty-chai';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

Enzyme.configure({ adapter: new Adapter() });

sinon.stub.resolves = function resolves(args) {
  return this.returns(Promise.resolve(args));
};

sinon.stub.rejects = function rejects(args) {
  return this.returns(Promise.reject(args));
};

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(dirtyChai);
chai.use(chaiJestDiff());

chai.config.truncateThreshold = 0;

global.sinon = sinon;
global.expect = chai.expect;
