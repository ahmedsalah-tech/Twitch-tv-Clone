import type { Request, Response } from 'express';
import User from '../../models/User.ts';

interface PopulatedChannel {
  _id: string;
  title: string;
  avatarUrl: string;
  isActive: boolean;
}

interface PopulatedUser {
  username: string;
  channel: PopulatedChannel;
}

export const getChannels = async (req: Request, res: Response) => {
  try {
    const users = await User.find(
      {},
      {
        channel: 1,
        username: 1,
      }
    ).populate<{ channel: PopulatedChannel }>('channel');

    const channels = users
      .filter((user) => user.channel && user.channel.isActive)
      .map((user) => {
        return {
          id: user.channel._id,
          title: user.channel.title,
          avatarUrl: user.channel.avatarUrl,
          username: user.username,
          isOnline: false,
        };
      });

    return res.json({
      channels,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Something went wrong');
  }
};
