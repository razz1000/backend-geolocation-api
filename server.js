import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dataRouter from "./src/api/index.js";
import listEndpoints from "express-list-endpoints";
import {
  badRequestHandler,
  genericErrorHandler,
  notFoundHandler,
} from "./errrorHandlers.js";

const server = express();
const port = process.env.PORT || 3001;

// ****************************************************** MIDDLEWARES **********************************************

server.use(cors());
server.use(express.json());

//********************** ENDPOINT **********************************************************/

server.use("/data", dataRouter);

// ***************************************************** ERROR HANDLERS ********************************************

server.use(badRequestHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

/* mongoose.connect(process.env.MONGO_CONNECTION_URL);
 */
server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(
    `Rasmus, for your information: server is running on port ${port}`
  );
});
