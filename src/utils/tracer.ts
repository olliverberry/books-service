import { tracer } from 'dd-trace';

tracer.init({
  samplingRules: [
    {
      sampleRate: 0,
      name: 'books',
    },
  ],
});
export default tracer;