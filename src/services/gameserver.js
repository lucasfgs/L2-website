import net from "net";

function getGameserverStatus() {
  try {
    net.connect({
      host: process.env.GAMERSERVER_HOST,
      port: process.env.GAMERSERVER_PORT
    });
  } catch (error) {
    console.log(error);
  }
}

export { getGameserverStatus };
