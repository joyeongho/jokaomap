/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'oNJ%2FNNFWx8pMbAAWWUcxLd69nhiSbW93emPKkOH%2FQd73bUIORADpweN8i116CTEI6V3GfSJTNa3py9S%2Bs5KoEQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('714') + '=' + encodeURIComponent(''); /*노선ID*/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText);
    }
};

xhr.send('');