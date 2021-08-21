db.auth('root', 'root');
db = db.getSiblingDB('admin')

db.createUser({
  user: 'admin',
  pwd: 'admin',
  roles: [
    {
      role: 'readWrite',
      db: 'wall',
    },
  ],
});
