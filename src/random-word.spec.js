import test from 'ava';
import { shallow } from 'enzyme';
import * as React from 'react';
import RandomWord from './random-word.js';

test('Random word renders at least one span', (t) => {
    const wrapper = shallow(<RandomWord word="test" />);
    const actual = wrapper.find('span').length;
    const expected = 1;

    t.is(actual, expected);
});
