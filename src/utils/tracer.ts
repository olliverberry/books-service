import { tracer } from 'dd-trace';

tracer.init();
tracer.use('express', {
  blocklist: [/api\/books\/.{1,}/]
});
export default tracer;