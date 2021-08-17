// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {countsAsAYes} from '../utils';

const test = QUnit.test;

test('Tell if the answer is yes or no', (expect) => {
    const expected = true;
    const actual = countsAsAYes('yes');

    expect.equal(actual,expected, 'yes is true');
});
