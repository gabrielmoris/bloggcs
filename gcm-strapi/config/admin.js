module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f7b44913943ddc96a1c480abbc7ef001'),
  },
});
