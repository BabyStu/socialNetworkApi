const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }
  const users = [];

  for (let i = 0; i < 20; i++) {
    const thoughts = getRandomThought(3);

    const username = getRandomUser();
    const email = `${username.toLowerCase().split(' ').join('')}@gmail.com`;
    const friends = users.map(({ _id }) => _id);

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  const thoughts = [];

  for (let i = 0; i < 20; i++) {


    const thoughtText = getRandomThought();

    const username = getRandomUser();
    const reactions = [];

    thoughts.push({
      thoughtText,
      username,
      reactions,
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);


  console.table(users);
  console.table(thoughts);
  
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
