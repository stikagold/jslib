$(function(){
    console.log("jslib initialised");

    function CCommunicationBridge () {
        version = 1;

        /**
         * This function we need to call for initialise connection with server
         * @param Object params
         */
        this.initial = function (params) {
            throw "Implement this method";
        }

        /**
         * Use this method to communicate with server
         * @param Object params array of datas for sending to server
         * @param String command command to send server, can be empty
         * @param String|Object additional additional parameters for internal use
         * @param callback callback function
         */
        this.send = function (params, command, additional, callback) {
            throw "Implement this method";
        }

        this.getVersion = function(){
            return this.version;
        }

    }

    function CAjax()
    {
        CCommunicationBridge.call(this);
    }
})