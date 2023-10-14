const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const partialThots = [
  'I had a great day today!',
  'Exploring the beautiful countryside.',
  'Just finished reading a fantastic book.',
  'Learning a new language is so exciting.',
  'Spent the day with my loved ones.',
  'Enjoying a delicious meal with friends.',
  'Traveling to a new city for the weekend.',
  'Music makes everything better.',
  'The sunset was breathtaking.',
  'Nature is so calming and peaceful.',
  'Working on a challenging project.',
  'Thinking about life and its mysteries.',
  'Adventures await just around the corner.',
  'Dreaming of far-off places to visit.',
  'Reflecting on the past and future.',
  'The world is full of amazing people.',
  'Art and creativity know no bounds.',
  'Finding joy in the little things.',
  'Achieving your goals is a great feeling.',
  'Making memories that will last a lifetime.',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Makes random username from the names array
const getRandomUser = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random thoughts that we can add to the database

const getRandomThought = () => {
  return {
    thoughtText: getRandomArrItem(partialThots),
    reactions: [],
  };
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThought };
