import net from "net";

function getGameserverStatus() {
  const status = "Offline";
  net.connect(
    {
      host: process.env.GAMERSERVER_HOST,
      port: process.env.GAMERSERVER_PORT
    },
    () => {
      return (status = "Online");
    }
  );
  return status;
}

export { getGameserverStatus };
