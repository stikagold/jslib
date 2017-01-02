function CCommunicationBridge() {
    version = 1;

    /**
     *
     * @param params
     * @param additional
     * @param callback
     */
    this.initial = function (params, additional, callback) {
        throw "Implement this method";
    };

    /**
     * Use this method to communicate with server
     * @param params Object array of datas for sending to server
     * @param command String command to send server, can be empty
     * @param additional String|Object additional parameters for internal use
     * @param callback callback function
     */
    this.sendRequest = function (params, command, additional, callback) {
        throw "Implement this method";
    };

    this.getVersion = function () {
        return this.version;
    };

}

function CAjax() {
    CCommunicationBridge.call(this);

    const METHOD_POST = "post";
    const METHOD_GET = "get";

    this.availableMethods = [METHOD_POST, METHOD_GET];

    this.__method = METHOD_POST;
    this.__async = true;
    this.__ajaxURL = null;
    this.__params = {};
    this.__additional = {};
    this.__callback = null;

    this.__isInitialised = false;
    this.__isCachable = false;

    this.ajax = null;

    this.initial = function (params, additional, callback) {
        if (typeof params === "object") {
            this.__params = params;

            if(typeof params.url !== "undefined" && typeof params.url === "string"){
                this.__ajaxURL = params.url;
            }

            if(typeof params.async !== "undefined" && typeof params.async === "boolean"){
                this.__async = params.async;
            }

            if(typeof params.cache !== "undefined" && typeof params.async === "boolean"){
                this.__isCachable = params.cache;
            }

            if (typeof params.method !== "undefined" && typeof params.method === "string") {
                if (params.method === METHOD_POST || params.method === METHOD_GET) {
                    this.__method = params.method;
                }
                else {
                    throw ("Undefined method " + params.method);
                }
            }

        }

        if (typeof additional === "object") {
            this.__additional = additional;
        }

        this.__callback = callback;
        this.__isInitialised = true;
    };

    this.getCurrentMethod = function () {
        return this.__method;
    };

    this.getAvailableMethods = function () {
        return this.availableMethods;
    };

    this.sendRequest = function (params, command, additional, callback) {
        params.command = command;
        $.ajax({
            url: this.__ajaxURL,
            method: this.__method,
            cache: this.__isCachable,
            data: {args:params},
        }).done(function(result){
            console.log("Insite in done with result"+result);
            callback(result);
        });
    };

}
