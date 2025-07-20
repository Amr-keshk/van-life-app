export async function getVans(id) {
  const url = `/api/vans/${id ? id : ""}`
  const res = await fetch(url)
  if(!res.ok) {
    throw {
      message: "Faild fetching data",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return data.vans;
};
export async function getHostVans(id) {
  const url = `/api/host/vans/${id ? id : ""}`
  const res = await fetch(url)
  if(!res.ok) {
    throw {
      message: "Faild fetching data",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return data.vans;
};