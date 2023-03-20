import { tracer } from 'dd-trace';

tracer.init();
tracer.use('express', {
  blocklist: [/(^\/{0,1}api\/books\/?$)|(^\/api\/books\/{1}.+$)/]
});
export default tracer;