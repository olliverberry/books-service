import { tracer } from 'dd-trace';

tracer.init();
tracer.use('express', {
  blocklist: [/books\/.{1,}/]
});
export default tracer;