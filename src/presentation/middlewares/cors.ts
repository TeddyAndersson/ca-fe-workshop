import c from 'cors';
const options = {
  origin: '*',
  optionsSuccessStatus: 200,
}
export const cors = c(options);