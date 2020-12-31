module.exports = {
  async rewrites() {
    return [
      { source: '/:path*', destination: '/:path*' },
      {
        source: '/event',
        destination: 'https://www.beyondrun.com/event'
      },
      {
        source: '/terms-and-conditions',
        destination: 'https://www.beyondrun.com/terms-and-conditions'
      },
      {
        source: '/blog/:id',
        destination: 'https://www.beyondrun.com/blog/:id'
      },
      {
        source: '/static/js/:chunkjs',
        destination: 'https://www.beyondrun.com/static/js/:chunkjs'
      },
      {
        source: '/static/css/:chunkcss',
        destination: 'https://www.beyondrun.com/static/css/:chunkcss'
      },
      {
        source: '/fonts/:fonts*',
        destination: 'https://www.beyondrun.com/fonts/:fonts*'
      },
      {
        source: '/img/:img*',
        destination: 'https://www.beyondrun.com/img/:img*'
      }
    ];
  }
};
