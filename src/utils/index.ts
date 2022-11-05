import startServer from "../server/startServer";

const port = 4000;

(async () => {
  try {
    await startServer(port);
  } catch (error) {
    process.exit(1);
  }
})();
