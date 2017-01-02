<html>
<head>
    <script src="extjs/jquery-3.1.1.js"></script>
    <script src="jslib.js"></script>

    <script>
        $(function(){
            var t = new CAjax;
            var params = {
                'url':"action.php",
                'async':true,
                'method':'get',
            }
            t.initial(params, null, function(result){
                console.log("this is just callback");
                console.log(result);
            });
            console.log(t);
            console.log(t.getCurrentMethod());
            console.log(t.getAvailableMethods());

            function ShowResult(result){
                console.log("-->This is a result");
                console.log(result);
            }
            t.sendRequest(params, null,ShowResult);
        });

    </script>
</head>

<body>

</body>
</html>