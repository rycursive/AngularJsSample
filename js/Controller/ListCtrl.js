app.controller('ListCtrl',
    function ($scope, foursquareDataSource, photoDataSource)
    {        
        $scope.nearby = "";
        $scope.country = "";
        $scope.photoDataSource = photoDataSource;        
        $scope.mainGridOptions = {
            dataSource: foursquareDataSource,
            height: 750,
            groupable: true,
            sortable: true,
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5
            },
            columns: [{ 
                field: 'venue.name', title:"Name" 
            },{ 
                title: 'Image', "template": "<img src= #= image() #>" 
            }, {
                title:'detail', field: 'tips' , "template": $("#detailTemplate").html() 
            },{ 
                command: { text: "View more image", click: moreImage }, title: " ", width: "140px" }]
            
        };
        $scope.windowOption = {
            title: "Image",
            modal: true,
            visible: false,
            resizable: false,
            width: 600,
            height: 587,
        };
        $scope.listviewOption = {
            dataSource: photoDataSource,
            template: kendo.template($("#listViewTemplate").html()),
            autoBind: false
        }
        $scope.submit = function()
        {            
            $scope.mainGridOptions.dataSource.query({ page: 1, pageSize: 30,near:$scope.country });
        }        
        
        function moreImage(e) {
            e.preventDefault();
            var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
            var photoUrl = "https://api.foursquare.com/v2/venues/"+dataItem.id +"/photos?client_id=WOY3TZFKEN3HJTL0ZY1PBO035SJGZFVDMB3CWWTXBDBMEOBS&client_secret=RGWTUBG0THSZBB3TDEPJNVIA0RU50RC2IS1DHHPJ5JKC0ELB&v=20140806"
            $scope.listviewOption.dataSource.transport.options.read.url = photoUrl;
            $scope.pager.page(1);
            $scope.listviewOption.dataSource.read();
            $scope.win1.center().open();
        }

    });