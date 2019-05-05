const getHostname = (target, port) => {
  let hostname = `${window.location.hostname}:${port}`;
  if (hostname === `vitaes.io:${port}`) {
    hostname = `${target}.vitaes.io`;
  }
  return hostname;
};


// TODO get data from ENV
export const getRendererHostname = () => getHostname('renderer', 5000);

export const getLoggerHostname = () => getHostname('logger', 8017);
