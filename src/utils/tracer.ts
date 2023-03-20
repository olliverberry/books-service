import { tracer, TracerOptions } from 'dd-trace';

const tracerOpts: TracerOptions = {
  samplingRules: [
    {
        sampleRate: 0,
        name: /(books)(\/*)/
    }
  ],
};

tracer.init(tracerOpts);
export default tracer;