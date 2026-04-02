import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const { Schema } = mongoose;

const channelTitle = 'New Channel';
const channelDescription = 'This is a new channel';

const channelSchema = new Schema({
  isActive: { type: Boolean, default: false },
  title: { type: String, default: channelTitle },
  description: { type: String, default: channelDescription },
  avatarUrl: { type: String, default: 'none' },
  streamKey: { type: String, default: uuid },
  messages: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    default: [],
  },
});

export default mongoose.model('Channel', channelSchema);
