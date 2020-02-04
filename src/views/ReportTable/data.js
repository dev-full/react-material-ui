import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    type: 'inappropriate',
    reporterId: 'mark-0472',
    postReported: 'Pictures of naked babes',
    post_url: '#',
    reportedDate:'2018-12-14 11:00:11',
    status: 'Active',
  },
  {
    id: uuid(),
    type: 'notrelevant',
    reporterId: 'tim-0672',
    postReported: 'Dorchester parade',
    post_url: '#',
    reportedDate:'2020-02-02 14:34:11',
    status: 'Completed',
  },
  {
    id: uuid(),
    type: 'spam',
    reporterId: 'brenda-1272',
    postReported: 'Geico Insurance sign up',
    post_url: '#',
    reportedDate:'2018-12-14 12:41:00',
    status: 'Ended',
  },
];
