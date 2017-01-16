(function(window){
    function $(str){
        return document.querySelector(str);
    }

    function toParam(json){
        var str='',
            isF=true;
        for(var j in json){
            str+=(isF?(isF=false,''):'&')+j+'='+json[j];
        }
        return str;
    }

    function uniqID(string){
        string = string || '';
        return string + Math.floor(Math.random() * 10000000) + new Date().getTime().toString().substring(10, 13);
    }

    function toast(msg, interval, site) {
        /* site位置如下：默认为5
         *  1,2,3
         *  4,5,6
         *  7,8,9
         * */
        msg || (msg = '');
        site = site || 5;


        var id=uniqID(),
            obj=document.createElement('div');
        obj.id=id;
        obj.classList='toast_info_box toast_info_box_site' + site;
        obj.innerHTML='<span class="error_msg">' + msg + '</span>';
        document.documentElement.appendChild(obj);

        var close = function () {
            $('#' + id).remove();
        };

        if (interval !== false)
            setTimeout(function () {
                close();
            }, interval || 2000);

        return {
            close: function () {
                close();
            }
        };
    };

    function async(options){
        var data=options.data,
            type=options.type||'get',
            url=options.url,
            success=options.success||function(){},
            apiRoot='https://app.91yaowang.com/app/webservice/v2/';

        console.log(toParam(data))

        fetch(apiRoot+url,{
            method:type,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body:toParam(data)
        }).then(response => response.json())
    .then(d => {
            if (d.status == 0) {
            success(d.data);
        } else if (options.error && typeof (options.error) === 'function') {
            options.error(d);
        } else {
            toast(d.msg, 1000);
        }
    })
    .catch(function(error) {
            console.log('request failed: ', error)
        })
    }
    window.sync=async;
    window.toast=toast;
    window.uniqID=uniqID;
    window.$=$;
}(window));
