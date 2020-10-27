import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';

import Moment from 'react-moment';
import { QuestionTitle, QuestionCard, QuestionCards } from './QuestionCards';
import Tags from './Tags';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('<QuestionTitle />', () => {
  it('should render question title', () => {
    const wrapper = shallow(<QuestionTitle>title</QuestionTitle>);

    expect(wrapper.text()).toBe('title');
  });

  it('should set correct url for question', () => {
    const wrapper = shallow(
      <QuestionTitle questionId={1}>title</QuestionTitle>
    );

    expect(wrapper.find('a').prop('href')).toBe('/question/1');
  });
});

describe('<QuestionCard />', () => {
  it('should render Question card', () => {
    const mockQuestion = {
      id: 1,
      title: 'Question title',
      tags: [],
      time: '1603596931285',
      answers: [{}, {}],
      user: { username: 'michel' },
    };

    const wrapper = mount(<QuestionCard {...mockQuestion} />);

    expect(wrapper.find(QuestionTitle).exists()).toBe(true);
    expect(wrapper.find(Tags).exists()).toBe(true);
    expect(wrapper.find('div p').at(0).text()).toBe('2 Answer(s)');
    expect(wrapper.exists(Moment)).toBe(true);
    expect(wrapper.find('div p').at(1).text()).toBe('michel');
  });
});

describe('<QuestinCards />', () => {
  it('should render all cards', async () => {
    const mockQuestions = [
      {
        id: 1,
        title: 'Question title1',
        tags: [],
        time: '1603596931285',
        answers: [],
        user: { username: 'michel' },
      },
      {
        id: 2,
        title: 'Question title2',
        tags: [],
        time: '1603596931285',
        answers: [],
        user: { username: 'michel' },
      },
    ];

    // window.fetch = jest.fn(() => {
    //   return Promise.resolve({ json: () => mockQuestions });
    // });

    fetchMock.get('/api/question/', {
      status: 200,
      body: mockQuestions,
    });

    let wrapper;

    await act(async () => {
      wrapper = mount(<QuestionCards />);
    });

    // expect(wrapper.find(QuestionCard).length).toBe(2);
    // expect(window.fetch.mock.calls.length).toBe(1);

    expect(fetchMock.calls('/api/question/').length).toBe(1);
    fetchMock.restore();
  });
});
