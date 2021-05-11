export default class Utils {
    public static rgbToHex(r:number, g:number, b:number):number {
        return (r << 16) + (g << 8) + b;
    }

    // TODO: move to command
    public static sendRequest(
        data:string,
        successCallback:(json:any)=>void,
        errorCallback:(error:any)=>void = null
    ):void {
        const xhr:XMLHttpRequest = new XMLHttpRequest();
			let url:string = "http://narzyaevsite.com/" + data;
			xhr.open("GET", url,true);
			xhr.setRequestHeader("Accept", "text/plain");
			xhr.responseType = "json";
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
                        if (xhr.response["success"] == "true")
                        {
                            successCallback(xhr.response);
                        }
                        else
                        {
                            if (errorCallback != null)
                            {
                                errorCallback(xhr.response["result"]["reason"]);
                            }
                        }
					} else {
                        if (errorCallback != null)
                        {
                            errorCallback("xhr.status = " + xhr.status);
                        }
					}
				}
			};
			xhr.send();
    }
}
