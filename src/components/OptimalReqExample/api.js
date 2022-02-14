const ENDPOINT = "https://api.instantwebtools.net/v1/passenger";

const sleep = (time) => new Promise((resolve,reject) => setTimeout(resolve,time))
export const apiCall = async (page, size) => {
  let res = await fetch(ENDPOINT + `?page=${page}&size=${size}`).then((res) =>
    res.json()
  );
  await sleep(2000)
  return page;
}