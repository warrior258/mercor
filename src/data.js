export const todos = [
    {
      id: 1,
      level : 'Low',
      title: 'Brainstorming',
      desc: "Brainstorming brings team members' diverse experience to play.",
      peopleImg: 'assets/3people.svg',
      comments: '12',
      files: '0'
    },
    {
      id: 2,
      level : 'High',
      title: 'Research',
      desc: "User research helps you to create an optimal products for users.",
      peopleImg: 'assets/2people.svg',
      comments: '10',
      files: '2'
    },
];

export const progresses = [
    {
      id: 3,
      level : 'Low',
      title: 'Onboarding Illustrations',
      img: 'assets/photo1.svg',
      peopleImg: 'assets/3people(1).svg',
      comments: '14',
      files: '15',
      height: '258'
    },
    {
      id: 4,
      level : 'Low',
      title: 'Moodboard',
      img: 'assets/photo2.svg',
      peopleImg: 'assets/1people.svg',
      comments: '9',
      files: '10',
      height: '227'
    },
];

export const done = [
    {
      id: 4,
      level : 'Completed',
      title: 'Mobile App Design',
      img: 'assets/photo4.svg',
      peopleImg: 'assets/2people(1).svg',
      comments: '12',
      files: '15',
      height: '328'
    },
    {
      id: 5,
      level : 'Completed',
      title: 'Design System',
      img: 'assets/photo2.svg',
      desc: 'It just need to adapt the UI from what you did before',
      peopleImg: 'assets/3people(2).svg',
      comments: '12',
      files: '15',
      height: '177'
    },
];

export default {
    todos,
    progresses,
    done
}