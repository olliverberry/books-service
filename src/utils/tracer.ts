import { tracer, TracerOptions } from 'dd-trace';

const tracerOps: TracerOptions = {
  spanSamplingRules: [
    {
      sampleRate: 0,
      name: 'books',
    },
  ],
};

tracer.init(tracerOps);
export default tracer;
