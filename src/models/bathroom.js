import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bathroomSchema = new Schema({
  name: { type: 'String', required: true },
  lat:  { type: 'String', required: true },
  long: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  description: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Bathroom', bathroomSchema);
