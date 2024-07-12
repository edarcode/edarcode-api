import { PORT } from "./server/envs";
import { SERVER_ON } from "./server/msgs";
import { server } from "./server/server";

server.listen(PORT, () => console.log(SERVER_ON));
