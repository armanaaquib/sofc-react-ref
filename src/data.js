const users = [
  {
    username: 'michel',
    name: 'michel shawn',
    profile_pic: null,
  },
  {
    username: 'bryce',
    name: 'bryce shawn',
    profile_pic: null,
  },
  {
    username: 'jake',
    name: 'jake shawn',
    profile_pic: null,
  },
  {
    username: 'carlo',
    name: 'carlo shawn',
    profile_pic: null,
  },
];

const questions = [
  {
    username: 'michel',
    title: 'Question Title 1',
    description: 'Description 1',
    time: '2020-07-20 11:20:35',
  },
  {
    username: 'michel',
    title: 'Question 2',
    description: 'Description 2',
    time: '2020-07-20 11:24:35',
  },
  {
    username: 'jake',
    title: 'Question 3',
    description: null,
    time: '2020-07-21 11:15:35',
  },
  {
    username: 'jake',
    title: 'Question 4',
    description: 'Description 4',
    time: '2020-07-21 11:20:35',
  },
  {
    username: 'carlo',
    title: 'Question 5',
    description: 'Description 5',
    time: '2020-07-21 11:24:35',
  },
];

const answers = [
  {
    username: 'michel',
    question_id: 5,
    description: 'Answer 1',
    accepted: 1,
    time: '2020-07-20 11:20:35',
  },
  {
    username: 'bryce',
    question_id: 5,
    description: 'Answer 2',
    accepted: 0,
    time: '2020-07-21 11:20:35',
  },
  {
    username: 'jake',
    question_id: 5,
    description: 'Answer 3',
    accepted: 0,
    time: '2020-07-21 12:20:35',
  },
  {
    username: 'michel',
    question_id: 2,
    description: 'Answer 4',
    accepted: 0,
    time: '2020-07-22 11:20:35',
  },
  {
    username: 'carlo',
    question_id: 2,
    description: 'Answer 5',
    accepted: 0,
    time: '2020-07-22 11:30:35',
  },
];

const answer_votes = [
  { username: 'michel', answer_id: 1, vote: 'up' },
  { username: 'jake', answer_id: 1, vote: 'up' },
  { username: 'bryce', answer_id: 1, vote: 'down' },
  { username: 'michel', answer_id: 5, vote: 'down' },
  { username: 'jake', answer_id: 5, vote: 'up' },
  { username: 'bryce', answer_id: 5, vote: 'up' },
  { username: 'jake', answer_id: 3, vote: 'up' },
  { username: 'bryce', answer_id: 3, vote: 'up' },
];

const question_tags = [
  { question_id: 1, tag_name: 'node js' },
  { question_id: 1, tag_name: 'C' },
  { question_id: 1, tag_name: 'js' },
  { question_id: 2, tag_name: 'java' },
  { question_id: 2, tag_name: 'C#' },
  { question_id: 3, tag_name: 'js' },
  { question_id: 3, tag_name: 'C#' },
  { question_id: 4, tag_name: 'C#' },
  { question_id: 4, tag_name: 'node js' },
  { question_id: 5, tag_name: 'java' },
  { question_id: 5, tag_name: 'clojure' },
  { question_id: 5, tag_name: 'C' },
  { question_id: 6, tag_name: 'js' },
  { question_id: 6, tag_name: 'C' },
  { question_id: 6, tag_name: 'clojure' },
  { question_id: 6, tag_name: 'java' },
];

const questions_desc = [
  {
    id: 1,
    username: 'michel',
    title: 'Question Title 1',
    description: 'Description 1',
    time: '2020-07-20 11:20:35',
    noOfAnswers: 0,
    tags: ['node js', 'C', 'js'],
  },
  {
    id: 2,
    username: 'michel',
    title: 'Question 2',
    description: 'Description 2',
    time: '2020-07-20 11:24:35',
    noOfAnswers: 2,
    tags: ['java', 'C#'],
  },
  {
    id: 3,
    username: 'jake',
    title: 'Question 3',
    description: null,
    time: '2020-07-21 11:15:35',
    noOfAnswers: 0,
    tags: ['js', 'C#'],
  },
  {
    id: 4,
    username: 'jake',
    title: 'Question 4',
    description: 'Description 4',
    time: '2020-07-21 11:20:35',
    noOfAnswers: 0,
    tags: ['C#', 'node js'],
  },
  {
    id: 5,
    username: 'carlo',
    title: 'Question 5',
    description: 'Description 5',
    time: '2020-07-21 11:24:35',
    noOfAnswers: 3,
    tags: ['java', 'clojure', 'C'],
  },
];

export { questions_desc, questions, answers };
