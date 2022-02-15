import db from '../../utils/db';
import data from '../../utils/data';
import User from '../models/User';
import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);

  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});
export default handler;
