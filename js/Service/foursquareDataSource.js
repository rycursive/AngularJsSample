'use strict';

app.factory('foursquareDataSource',
    function ()
    {    
        return new kendo.data.DataSource({
            type: "json",
            transport: {
                read: "https://api.foursquare.com/v2/venues/explore?venuePhotos=1&client_id=WOY3TZFKEN3HJTL0ZY1PBO035SJGZFVDMB3CWWTXBDBMEOBS&client_secret=RGWTUBG0THSZBB3TDEPJNVIA0RU50RC2IS1DHHPJ5JKC0ELB&v=20140806",
                parameterMap: function (data, action) {
                    if(action === "read") {
                        if(data.near)
                            this.near = data.near;                        
                        return {
                            near: this.near ? this.near : "bangkok",
                            offset: data.skip ? data.skip : 0,
                            limit: data.take ? data.take : 30
                        };
                    } else {
                        return data;
                    }
                }
            },
            serverPaging: true,
            pageSize: 30,
            schema: {
                data: "response.groups[0].items",
                total: "response.totalResults",
                model :{       
                    id : "venue.id",
                    image : function() {
                        return this.get("venue.photos.groups[0].items[0].prefix") + "128x128" + this.get("venue.photos.groups[0].items[0].suffix");
                    }
                }
            },
            change: function(e) {
                toastr.success("success");
            },
            error: function(e,xhr) {
                var error = jQuery.parseJSON(e.xhr.responseText);
                toastr.error(error.meta.errorDetail); 
            }
        });
        
    });