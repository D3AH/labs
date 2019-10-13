export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('event', 20);
  // server.createList('presenter', 10);
  // server.createList('session', 10);
}
