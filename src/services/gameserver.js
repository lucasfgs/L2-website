import net from "net";

function getGameserverStatus(cb) {
  return new Promise((resolve, reject) => {
    let status = "";
    const client = net.connect(
      {
        host: process.env.GAMERSERVER_HOST,
        port: process.env.GAMERSERVER_PORT
      },
      () => {
        status = "Online";
        resolve("Online");
      }
    );
    client.setTimeout(500, () => {
      if (status === "") {
        client.end();
        resolve("Offline");
      }
    });
    client.on("error", error => {
      reject(error);
    });
    client.on("close", error => {
      reject(error);
    });
  });
}

export { getGameserverStatus };
