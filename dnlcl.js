var xhr = new XMLHttpRequest();
var url = 'http://openapi.tago.go.kr/openapi/service/BusRouteInfoInqireService/getRouteNoList'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent('23'); /*도시코드*/
queryParams += '&' + encodeURIComponent('routeNo') + '=' + encodeURIComponent('905'); /*노선번호*/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText);
    }
};

xhr.send('');