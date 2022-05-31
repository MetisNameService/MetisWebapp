const networks = [
	{
			"chainName":"Metis Andromeda Mainnet",
			"chain": "metis",
			"chainId": 1088,
			"shortName": "metis",
			"networkId": 1088,
			"nativeCurrency":{"name":"Metis","symbol":"METIS","decimals":18},
			"rpcUrls": ["https://andromeda.metis.io/?owner=1088"],
			"blockExplorerUrls": ["https://andromeda-explorer.metis.io/"],
			"contactAddress": "0xCc55bffd995DFDe68667C2Fb1942C727D3f15676",
			"tld": ".metis",
			"logo": "/images/cryptologo/metis.svg",
			"baseUri" : "https://app.metis.domains/api/nftdomains/metadata/",
			"visible" : true
		}
	];
	
function getObjects(obj, key, val) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getObjects(obj[i], key, val));    
			} else 
			//if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
			if (i == key && obj[i] == val || i == key && val == '') { //
				objects.push(obj);
			} else if (obj[i] == val && key == ''){
				//only add if the object is not already in the array
				if (objects.lastIndexOf(obj) == -1){
					objects.push(obj);
				}
			}
		}
		return objects;
	}

	//return an array of values that match on a certain key
	function getValues(obj, key) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getValues(obj[i], key));
			} else if (i == key) {
				objects.push(obj[i]);
			}
		}
		return objects;
	}

	//return an array of keys that match on a certain value
	function getKeys(obj, val) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getKeys(obj[i], val));
			} else if (obj[i] == val) {
				objects.push(i);
			}
		}
		return objects;
	}
	
	function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;
				
			//alert(sPageURL);
			
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
				
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
			return "";
     };
