import request from "@/api/request";

export function getFlightByRoute() {
  return request({
    url: "/flight_info",
    method: "get",
    params: {
      origin: "Shanghai",
      dest: "HongKong",
      depart_date: "20211013",
    },
  });
}


export function getFlightByNo() {
  return request({
    url: "/flight_info",
    method: "get",
    params: {
      flight_no: "AQ1211",
      depart_date: "20211113",
    },
  });
}

export function getTokenPrice() {
  return request({
    url: "/token_price",
    method: "get",
    params: {
      token: "BTC",
    },
  });
}

export function getTokenInfo() {
  return request({
    url: "/token_pool",
    method: "get",
    params: {
      token: "BTC800H2202",
    },
  });
}

