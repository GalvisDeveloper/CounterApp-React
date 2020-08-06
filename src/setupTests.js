
// import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import Enzyme from 'enzyme';
 

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

Enzyme.configure({ adapter: new Adapter() });