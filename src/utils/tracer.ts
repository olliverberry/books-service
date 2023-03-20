import { tracer, TracerOptions } from 'dd-trace';

const tracerOpts: TracerOptions = {
  samplingRules: [
    {
        sampleRate: 0,
        name: 'GET /api/books/'
    }
  ],
};

tracer.init(tracerOpts);
export default tracer;
