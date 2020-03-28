import http from '@/http/http';


export function getIndexCarousel() {
  const url = 'https://www.fastmock.site/mock/3f8a70ee57336c296feaadb9e87a930a/shop/shop/indexCarousel';
  return http.get(url, {}).then(
    (res) => res,
  );
}


export function login(param) { // 开工报告新增
  const url = 'http://localhost:55899/Login/checkLogin';
  return http.post(url, param).then((data) => data);
}
