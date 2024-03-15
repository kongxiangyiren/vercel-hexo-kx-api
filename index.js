process.env.NODE_ENV = 'vercel';
// vercel 需要 显性引入
const { join } = require('path');
join(__dirname, './node_modules/hexo-kx-api/public');
join(__dirname, './node_modules/hexo-kx-api/README.md');
join(__dirname, './node_modules/hexo-kx-api/build');
require('hexo-kx-api');
