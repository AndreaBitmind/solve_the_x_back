import chalk from "chalk";
import Debug from "debug";
import app from "../controllers/carsControllers";

const debug = Debug("solve_the_x_project:src:server:startServer");

const startServer = (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.green(`Server listening on http://localhost:${port}`));
      resolve(true);
    });
    server.on("error", (error: Error) => {
      debug(chalk.red("Error connecting to dataBase: ", error.message));
      reject(error);
    });
  });

export default startServer;
