import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tags from './Tags.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tags />', () => {
  it('should not render tags if no tags is passed as props', () => {
    const tagsWrapper = shallow(<Tags />);

    expect(tagsWrapper.children().length).toBe(0);
  });

  it('should render all tags passed as props', () => {
    const tagsWrapper = shallow(
      <Tags tags={[{ tagName: 'tag1' }, { tagName: 'tag2' }]} />
    );

    expect(tagsWrapper.children().length).toBe(2);
    expect(tagsWrapper.children().first().text()).toBe('tag1');
  });
});
