const ENDPOINT = "https://api.instantwebtools.net/v1/passenger";

export const apiCall = async (page, size) => {
  let res = await fetch(ENDPOINT + `?page=${page}&size=${size}`).then((res) =>
    res.json()
  );
  return res.data;
}