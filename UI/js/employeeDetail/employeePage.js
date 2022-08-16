

class EmployeePage{
    // Hàm khởi tạo
    constructor(gridId){

        
        let me = this;
        // Lưu lại grid đang thao tác
        me.grid = $(`#${gridId}`);
        
        // Lấy dữ liệu
        me.initGetData();
        
        // Dùng khởi tạo sự kiện
        me.initEvents();

        // KHởi tạo form detail
        me.initFormDetail();
       
        // KHởi tạo toolbar
        me.initToolBar();

        // KHởi tạo page navigation
        me.initPageNavi();  
    }
    
    /**
     * Khởi tạo trang detail
     * nvhthai 9/8/2022
     */
     initFormDetail(){
        let me = this;

        // Khởi tạo đối tượng form detail
        me.formDetail = new EmployeeDetail("form-add-employee");
        // var employeeDetail = new EmployeeDetail("");
        me.openPage();
    }

    /**hàm dùng để lấy dữ liệu
     * nvhthai 9/8/2022
     */
    initGetData(){
        let me = this;

        //hàm lấy dữ liệu từ data base
        me.getData('','','','','',1,10);
        
        //hàm lấy tổng số nhân viên
        me.getTotalEmployee();
    }

    /**hàm khởi tạo sự kiện class page-navi
     * nvhthai 9/8/2022
     */
    initPageNavi(){
        let me = this,
           
            pageNaviID = me.grid.attr("PageNavi");
    
            $(`#${pageNaviID} [IconBtn]`).off("click");
            $(`#${pageNaviID} [IconBtn]`).on("click", function(){
            let iconBtn = $(this).attr("IconBtn");
            if(me[iconBtn] && typeof me[iconBtn] == "function"){
                me[iconBtn]();
            }
        });
    }

    
    /**
     * Khởi tạo sự kiện cho table
    nvhthai 9/8/2022
     */
    initEventsTable(){
        let me = this;

        // Khởi tạo sự kiện khi click vào dòng
        me.grid.off("click", "tr");
        me.grid.on("click","tr", function(){
            me.grid.find(".color-tr").removeClass("color-tr");
            $(this).addClass("color-tr");
            $(this).removeClass("");
            
        });

            me.grid.off("dblclick", "tr");
            me.grid.on("dblclick","tr", function(){
                $(this).addClass("color-tr");
                me.openForm();
                let a = me.getID();
                me.formDetail.getDataByID(a,2);
        });
    }

    /**hàm khởi tạo sự kiện class toolbar
     * nvhthai 9/8/2022
     */
    initToolBar(){
        let me = this,
            toolbarId = me.grid.attr("Toolbar");
        
        $(`#${toolbarId} [ButtonName]`).off("click");
        $(`#${toolbarId} [ButtonName]`).on("click", function(){
            let buttonName = $(this).attr("ButtonName");
            
            if(me[buttonName] && typeof me[buttonName] == "function"){
                me[buttonName]();
            }
        });

        $(`#${toolbarId} [Keypress]`).off("keydown");
        $(`#${toolbarId} [Keypress]`).on("keydown", function(){
            let keypress = $(this).attr("Keypress");
            
            if(me[keypress] && typeof me[keypress] == "function"){
                me[keypress]();
            }
        });
      
    }


    /**hàm delete nhân viên
     * nvhthai 9/8/2022
     */
    delete(){
        let me = this;
        
        //hàm mở form thông báo gồm nút xác nhận và hủy
        me.formDetail.showFormDeleteDone();
    }

    /**hàm nhân bản nhân viên
     * nvhthai 9/8/2022
     */
    duplicate(){
        let me = this,
        //hàm lấy id nhân viên
            a = me.getID();

        // hàm get data nhân viên bằng id đã lấy
        me.formDetail.getDataByID(a, 1);

        //hàm mở form add
        me.openForm();
        
    }

    /**hàm tải lại trang 
     * nvhthai 9/8/2022
     */
    refresh(){
        let me = this;
        me.getData('','','','','',1,10);
        $("#searchData").val("");
        $("#combobox-positions").val("")
        $("#combobox-department").val("");

    }

    /**hàm tìm kiếm nhân viên
     * nvhthai 9/8/2022
     */
    search(){
        $("#combobox-department").val("");
        $("#combobox-positions").val("")
        let me = this;
        let searchData = $("#searchData").val();
        me.getData(searchData,'','','','',1, 10);
        me.getData('',searchData,'','','',1, 10);
        me.getData('','',searchData,'','',1, 10);
       
    }

    /**Tìm kiếm bằng departmentID
     * nvhthai 9/8/2022
     */
    searchFromDepartmentID(){
        let me = this;
        $("#combobox-positions").val("")
        let departmentID = CommonFn.NameToID($("#combobox-department").val());
        if(departmentID){
            me.getData('','','','',departmentID,1, 10);
        }else{
            me.getData('','','','','',1,10);
            $("#combobox-positions").val("")

        }
    }

    /**Tìm kiếm bằng positionID
     * nvhthai 9/8/2022
     */
    searchFromPositionID(){
        let me = this;
        $("#combobox-department").val("");
        let positionID = CommonFn.NameToID($("#combobox-positions").val());
        if(positionID){
            me.getData('','','',positionID,'',1, 10);
        }else{
            me.getData('','','','','',1,10);
            $("#combobox-department").val("");
            
        }
    }
    /**
     * Dùng để khởi tạo các sự kiện cho trang 
     * nvhthai 9/8/2022
     */
    initEvents(){
        let me = this;
        // Khởi tạo sự kiện cho table
        me.initEventsTable();
    }


    /**hàm hiển thị trang đầu tiên của page
     * nvhthai 9/8/2022
     */
    startpage(){
        let me = this;
        
        me.getData('','','','','',1,10);
        
    }

    /**hàm trở về trang trước trang đang hiển thị
     * nvhthai 9/8/2022
     */
    backonestep(){
        let me = this;
        let getSkip = Number.parseInt($("#getSkip").val());
        if(getSkip > 1){
            me.getData('','','','','',getSkip - 1,10);
        }
    }

     /**hàm hiển thị trang 1 của page
     * nvhthai 9/8/2022
     */
    page1(){
        let me = this;
        me.getData('','','','','',1,10);
    }

    /**hàm hiển thị trang 2 của page
     * nvhthai 9/8/2022
     */
    page2(){
        let me = this;
        me.getData('','','','','',2,10);
       
        
    }

    /**hàm hiển thị trang 3 của page
     * nvhthai 9/8/2022
     */
    page3(){
        let me = this;
        me.getData('','','','','',3,10);
    }

    /**hàm hiển thị trang 4 của page
     * nvhthai 9/8/2022
     */
    page4(){
        let me = this;
        me.getData('','','','','',4,10);
    }

    /**hàm hiển thị trang kế tiếp của page
     * nvhthai 9/8/2022
     */
    nextonestep(){
        let me = this;
        let getSkip = Number.parseInt($("#getSkip").val());
        let end = Number.parseInt($("#maxSkip").val());
        if(getSkip <= end){
            me.getData('','','','','',getSkip + 1,10);
        }
    }
    
    /**hàm hiển thị trang cuối cùng của page
     * nvhthai 9/8/2022
     */
    endpage(){
        let me = this;
        let getMaxSkip = Number.parseInt($("#maxSkip").val());
        me.getData('','','','','',getMaxSkip+1, 10);
    }

    /**hàm lưu biến trang hiện tại
     * nvhthai 9/8/2022
     * @param {*} skip 
     */
    getSkip(skip){
        $("#getSkip").val(skip);
    }

    /**hàm lưu biến tổng số trang
     * nvhthai 9/8/2022
     * @param {*} end 
     */
    getMaxSkip(end){
        $("#maxSkip").val(end);
        
    }

    /**hàm lấy tổng số nhân viên từ csdl
     * nvhthai 9/8/2022
     */
    getTotalEmployee(){
        let me = this;
        $.ajax({
            type: "GET",
            url: "https://localhost:7285/api/v1/Employees/total",
            data: "json",
            success: function (response) {
                let end = Math.floor(response/10);
                me.getMaxSkip(end);
                
                
            }
        });
        
    }
   
    
    
   /**hàm lấy id từ bảng
    * nvhthai 9/8/2022
    * @returns 
    */
    getID(){
        let me = this,
            txt;
        me.grid.find(".color-tr .getId").each(function(){
            txt = $(this).text();
        });
        return txt;

    }


    /**hàm xóa nhân viên khỏi csdl bằng id
     * nvhthai 9/8/2022
     * @param {*} idEmployee 
     */
    deteleEmployee(idEmployee){
        let me = this;

        $.ajax({
            type: "DELETE",
            url: "https://localhost:7285/api/v1/Employees/"+idEmployee,
            data: JSON.stringify(idEmployee),
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log(response);
                me.getData('','','','','',1,10);

            }
        });

        
    }

    /**hàm mở form add
     * nvhthai 9/8/2022
     */
    openForm(){
        let me = this;
        if(me.formDetail){
            me.formDetail.openForm();
        }
    }

    /**hàm lấy thuộc tính bên detail
     * nvhthai 9/8/2022
     */
    openPage(){
        let me = this,
        param = {parent: me};
        
        if(me.formDetail){
            me.formDetail.openGetData(param);
        }
    }
    

  
    /**
     * Hàm dùng để lấy dữ liệu cho trang
     * nvhthai 9/8/2022
     */
    getData(code,names,phoneNumber,positionID,departmentID,skip, take){
        let me = this;
        
        $.ajax({
            type: "Get",
            url: "https://localhost:7285/api/v1/Employees?code="+code+"&name="+names+"&phoneNumber="+phoneNumber+"&positionID="+positionID+"&departmentID="+departmentID+"&pageSize="+take+"&pageNumber="+skip,
            dataType: "json",
            success: function (response) {
                if(response){
                    if(response.totalCount > 0){
                        me.loadData(response);
                    }else{
                        console.log("khong co data");
                    }
                }else
                {
                    alert('lỗi hệ thống');
                }
            }
        });
        me.getSkip(skip);
        
    }

    
    /** hàm Load dữ liệu
     * nvhthai 9/8/2022
     */
    loadData(response){
        let me = this,
            data = response.data;
        
        if(data){
            // Render dữ liệu cho grid
            me.renderGrid(data);
        }
    }

    /**
     * Render dữ liệu cho grid
    nvhthai 9/8/2022
     */
    renderGrid(data){
        let me = this,
            table = $("<table></table>"),
            thead = me.renderThead(),
            tbody = me.renderTbody(data);
            

        table.append(thead);
        table.append(tbody);
        me.grid.find("table").remove();
        me.grid.append(table);
    }

    /**
     * Remder header
    nvhthai 9/8/2022
     */
    renderThead(){
        let me = this,
            thead = $("<thead></thead>"),
            tr = $("<tr></tr>");

        // Duyệt từng cột để vẽ header
        me.grid.find(".col").each(function(){
            let text = $(this).text(),
                dataType = $(this).attr("DataType"),
                className = me.getClassFormat(dataType),
                th = $("<th></th>");

            th.text(text);
            th.addClass(className);

            tr.append(th);
        });
        thead.append(tr);

        return thead;
    }

    /**
     * Renderbody
    nvhthai 9/8/2022
     */
    renderTbody(data){
        let me = this,
            tbody = $("<tbody></tbody>");
        
        if(data){
            data.filter(function(item){
                let tr = $("<tr></tr>");
                // Duyệt từng cột để vẽ header
                me.grid.find(".col").each(function(){
                    let fieldName = $(this).attr("FieldName"),
                        dataType = $(this).attr("DataType"),
                        td = $("<td></td>"),
                        value = me.getValueCell(item, fieldName, dataType),
                        className = me.getClassFormat(dataType);

                    td.text(value);
                    td.addClass(className);

                    tr.append(td);
                });

                tr.data(item);

                tbody.append(tr);
            });
        }

        return tbody;
    }

     /**
     * Lấy giá trị ô
     nvhthai 9/8/2022
     * @param {} item 
     * @param {*} fieldName 
     * @param {*} dataType 
     */
      getValueCell(item, fieldName, dataType){
        let me = this,
            value = item[fieldName];
        switch(dataType){
            case Resource.DataTypeColumn.Number:
                value = CommonFn.formatMoney(value);
                break;
            case Resource.DataTypeColumn.Date:
                value = CommonFn.formatDate(value);
                break;
            case Resource.DataTypeColumn.Enum:
                switch(fieldName){
                    case Resource.FieldName.gender:
                        value = Gender.EnumToName(value);
                        break;
                    case Resource.FieldName.workStatus:
                        value = WorkStatus.EnumToName(value);
                        break;
                    case Resource.FieldName.positionsID:
                        value = Positions.EnumToName(value);
                        break;
                    case Resource.FieldName.departmentsID:
                        value = Departments.EnumToName(value);
                        break;
                }
        }   

        return value;
    }

    


     /**
     * Hàm dùng để lấy class format cho từng kiểu dữ liệu
     * nvhthai 9/8/2022
     */
    getClassFormat(dataType){
        let className = "";
    
        switch(dataType){
            case Resource.DataTypeColumn.Number:
                className = "align-right";
                break;
            case Resource.DataTypeColumn.Date:
                className = "align-center";
                break;
            case Resource.DataTypeColumn.Text:
                className = "align-left";
                break;
            case Resource.DataTypeColumn.Enum:
                className = "align-left";
                break;
            case Resource.DataTypeColumn.GetID:
                className = "getId";
                break;
        }
    
        return className;
    }


}


// Khởi tạo một biến cho trang nhân viên
var employeePage = new EmployeePage("gridEmployee");

