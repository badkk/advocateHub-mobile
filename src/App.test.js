import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('Enzyme Shallow', function () {
    it('App\'s title should be Todos', function () {
        let app = shallow(<App/>);

    });
});