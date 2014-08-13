'use strict';

app.factory('photoDataSource',
    function ()
    {        
        return new kendo.data.DataSource({
            transport: {
                read: {
                    url: "",
                    dataType: "jsonp"
                }
            },
            pageSize: 15,
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 3
            },
            schema: {
                data: "response.photos.items",
                total: "response.photos.count",
                model :{       
                    id : "id",
                    image : function() {
                        return this.get("prefix") + "128x128" + this.get(".suffix");
                    }
                }
            },
            requestStart: function () {
                kendo.ui.progress($("#loading"), true);
            },
            requestEnd: function () {
                kendo.ui.progress($("#loading"), false);
            }
        });
    });