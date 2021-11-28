import request from "@/api/request";


export function getFlight() {
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



