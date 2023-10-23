const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }
  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random thoughts using a helper function that we imported from ./data
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

  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop 20 times -- add thoughts to the thoughts array
  for (let i = 0; i < 20; i++) {
    // Get some random thoughts using a helper function that we imported from ./data
    const thoughtText = getRandomThought();

    const username = getRandomUser();
    const reactions = [];

    thoughts.push({
      thoughtText,
      username,
      reactions,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
