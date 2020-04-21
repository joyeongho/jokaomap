var xhr = new XMLHttpRequest();
var url = 'http://openapi.tago.go.kr/openapi/service/BusRouteInfoInqireService/getRouteNoList'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'oNJ%2FNNFWx8pMbAAWWUcxLd69nhiSbW93emPKkOH%2FQd73bUIORADpweN8i116CTEI6V3GfSJTNa3py9S%2Bs5KoEQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent('23'); /*도시코드*/
queryParams += '&' + encodeURIComponent('routeNo') + '=' + encodeURIComponent('905'); /*노선번호*/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText);
    }
};

xhr.send('');