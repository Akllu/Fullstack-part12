db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('users');
db.createCollection('blogs');

db.users.insert({
  username: 'wick',
  name: "John Wick",
  passwordHash: '$2b$10$utaWNnNo22aW9blmrxn8hOhD5xiUw.86KJX20/OZxPf2lg9dTsQ/2'
});

db.blogs.insert({
  title: 'My story',
  url: 'www.johnwick.com',
  author: 'John Wick',
  likes: 58 
});