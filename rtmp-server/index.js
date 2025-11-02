// filepath: rtmp-server/src/index.ts
import NodeMediaServer from 'node-media-server';

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    host: '0.0.0.0',
    allow_origin: '*',
  },
  auth: {
    api: true,
    api_user: 'admin',
    api_pass: 'admin',
    admin: true  // This enables the admin panel
  }
};

const nms = new NodeMediaServer(config);
nms.run();