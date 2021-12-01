import request from "@/api/request";

export function getCity() {
  return request({
    url: "/city_list",
    method: "get",
  });
}

export function getFlight() {
  return request({
    url: "/flight_info",
    method: "get",
  });
}

export function getFlightByRoute(data) {
  return request({
    url: "/flight_info",
    method: "get",
    params: data,
  });
}

export function getFlightByNo(data) {
  return request({
    url: "/flight_info",
    method: "get",
    params: data,
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
