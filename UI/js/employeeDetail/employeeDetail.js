
class EmployeeDetail{
    constructor(formAddId){
        

        let me =this;
        // Lưu lại grid đang thao tác
        me.formAdd = $(`#${formAddId}`);
        
        // Khởi tạo sự kiện cho form
        me.initEvents();
        
        //Khởi tạo sự kiện cho tiền lương
        me.initSalary();

        // Khởi tạo sự kiện cho thông báo
        me.initToastMessage();

        me.getEmployeeNewCode();
    }

    /**khởi tạo sự kiện cho form
     * nvhthai 7/8/2022
     */
    initEvents(){
    
        let me = this;

        // Khởi tạo sự kiện button trên toolbar 
        me.formAdd.find(".btn-end-form [CommandType]").off("click");
        me.formAdd.find(".btn-end-form [CommandType]").on("click", function(){
            let commandType = $(this).attr("CommandType");

                if (commandType == 'Detroy'){
                    // hàm đóng form
                    me.closeForm();
                }
                else if (commandType == 'Save'){
                    //hàm lưu form
                    me.saveForm();
                }
        });

        //hàm mở form thêm
        me.OpenEmployeeDetails();
    }
    
    /**Khởi tạo sự kiện cho tiền lương
     * nvhthai 7/8/2022
     */
    initSalary(){
        let me = this;
        me.formAdd.find("[Salary]").off("blur");
        me.formAdd.find("[Salary]").on("blur", function(){
            let salary = $(this).attr("Salary");
            if(me[salary] && typeof me[salary] == "function"){
                me[salary]();
            }
        });
        
    }

    /**Khởi tạo sự kiện cho thông báo
     * nvhthai 7/8/2022
     */
    initToastMessage(){
        let me = this,
            toast = me.formAdd.attr("ToastMessage");
        $(`#${toast}`).find("[ButtonToast]").off("click");
        $(`#${toast}`).find("[ButtonToast]").on("click", function(){
            let buttonToast = $(this).attr("ButtonToast");
            if(me[buttonToast] && typeof me[buttonToast] == "function"){
                me[buttonToast]();
            }
        });

    }


    /**đưa ra thông báo là người dùng nhập thiếu thông tin
     * nvhthai 7/8/2022
     */
    showToastNull(){
        let me = this,
        toast = me.formAdd.attr("ToastMessage");
        $(`#${toast}`).find(".err").show();
        $(`#${toast}`).find(".err").hide(4000);
    }


    /**đóng các form thông báo
     * nvhthai 7/8/2022
     */
    closeFormMessage(){
        let me = this,
        toast = me.formAdd.attr("ToastMessage");
        $(`#${toast}`).find(".err").hide();
        $(`#${toast}`).find(".warrning-delete").hide();
    }



    /**đưa ra thông báo hỏi khách hàng muốn xóa user không
     * nvhthai 7/8/2022
     */
    showFormDeleteDone(){
        let me = this,
        toast = me.formAdd.attr("ToastMessage");
        $(`#${toast}`).find(".warrning-delete").show();
    }



    /**xóa user 
     * nvhthai 7/8/2022
     */
    deleteDone(){
        
       let me = this,

       //hàm lấy id nhân viên 
        id = me.parent.getID();

        //hàm xóa nhân viên trong csdl
        me.parent.deteleEmployee(id);

        //hàm đóng form thông báo
        me.closeFormMessage();
    }
    

    /**hàm làm ẩn thông báo định dạng sai email
     * nvhthai 9/8/2022
     */
    showToastFormEmail(){
        let me = this;
        me.formAdd.find(".mess-email").show();
        me.formAdd.find("input").off("focus");
        me.formAdd.find("input").on("focus", function(){
            me.formAdd.find(".mess-email").hide();
            
        });
    }


    /** hàm làm ẩn thông báo định dạng sai số CMT
     * nvhthai 9/8/2022
     */
    showToastFormIdentityNumber(){
        let me = this;
        me.formAdd.find(".mess-IdentityNumber").show();
        me.formAdd.find("input").off("focus");
        me.formAdd.find("input").on("focus", function(){
            me.formAdd.find(".mess-IdentityNumber").hide();
        });
    }

    /**hàm làm ẩn thông báo định dạng sai số điện thoại
     * nvhthai 9/8/2022
     */
    showToastFormNumberPhone(){
        let me = this;
        me.formAdd.find(".mess-numberPhone").show();
        me.formAdd.find("input").off("focus");
        me.formAdd.find("input").on("focus", function(){
            me.formAdd.find(".mess-numberPhone").hide();
            me.formAdd.find(".mess-IdentityNumber").hide();
        });
    }
   
    /**hàm làm ẩn thông báo sai định dạng tiền lương
     * nvhthai 9/8/2022
     */
    showToastFormSalary(){
        let me = this;
        me.formAdd.find(".mess-salary").show();
        me.formAdd.find("input").off("focus");
        me.formAdd.find("input").on("focus", function(){
            me.formAdd.find(".mess-salary").hide();
        });
    }


    /**hàm định dạng cho thẻ input tiền lương
     * nvhthai 9/8/2022
     */
    salary(){
        let me = this;
        me.formAdd.find("[Salary]").each(function(){
            $(this).val(CommonFn.formatMoney($(this).val()));
        });
    }


    /**hàm copy thuộc tính
     * nvhthai 9/8/2022
     * @param {*} param 
     */
    openGetData(param){
        let me = this;
        Object.assign(me, param);
        me.parent.getData('','','','','',1,10);
    }

    /**hàm mở form thêm tổng thể
     * nvhthai 9/8/2022
     */
    OpenEmployeeDetails(){
        let me = this;
        
        $("#btn-add-employee").click(function(e) {
            //hàm mở form thêm
            me.openForm();

            //lấy thông tin từ id IDEmployeeEnd (id tăng 1 đơn vị) rồi đưa ra thẻ input
            let IDEmployeeEnd = $("#IDEmployeeEnd").val();
            $("#employeesCode").val(IDEmployeeEnd);
            
            //hàm focus vào thẻ employeesCode
            $("#employeesCode").focus();
        });
    
    }


    
    /**hàm lấy thông tin để sửa nhân viên
     * nvhthai 9/8/2022
     * 
     */
    renderDataFormAdd(data,check){
        let me = this;
        
        //hàm check: nếu check = 1 thì là hàm duplicate, check = 2 thì là hàm đưa dữ liệu lên form để sửa
        if(data && check == 1){
            //hàm đưa thông tin ra thẻ input với MNV là số to nhất
            me.renderData(data,check);
        }
        if(data && check == 2){
            //hàm đưa thông tin ra form add đê sửa
            this.renderData(data, check);
        }
    }

   

    /**hàm đưa thông tin ra thẻ input 
     * nvhthai 9/8/2022
     * @param {*} data 
     */
    renderData(data, check){
        let me = this;
        let IDEmployeeEnd = $("#IDEmployeeEnd").val();
        me.formAdd.find("[PropName]").each(function(){
            let dataType = $(this).attr("DataType") || "String",
                propName = $(this).attr("PropName"),
                value = null;
                
            switch(dataType){
                case Resource.DataTypeColumn.Date:
                    $(this).val(CommonFn.formatForInputDate(data[propName]));
                    break
                case Resource.DataTypeColumn.Enum:
                    value = data[propName];
                    switch(propName){
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
                    $(this).val(value);
                    break;
                case Resource.DataTypeColumn.Text:
                    $(this).val(data[propName]);
                    break;
                case Resource.DataTypeColumn.String:
                    if(check == 2){
                        $(this).val(data[propName]);
                        let a = data.employeesID;
                        $("#employeeID").val(a);
                    }else if(check == 1){
                        $(this).val(IDEmployeeEnd);
                    }
                    break;
                case Resource.DataTypeColumn.Number:
                    value = data[propName];
                    if(value){
                        $(this).val(parseInt(value));
                    }
                    break;
            }
        });
        //hàm lấy data từ thẻ input trong form add     
        me.getFormData();     
    }

    /**
     * hàm đóng form
    nvhthai 9/8/2022
     */
    closeForm(){
        let me = this;
        me.formAdd.hide();
    }

    /*  ham mở form thêm
     *  nvhthai 9/8/2022
     */
    openForm(){
        let me = this;
        //mở form
        me.formAdd.show();

        //khi mở thì reset thẻ input
        me.resetForm();
    }

   
    /**hàm lưu thông tin nhân viên
     * nvhthai 9/8/2022
     */
    saveForm(){
        
        let me = this,
        //hàm kiểm tra điều kiện
            isValid = me.validateForm();

        if(isValid){
            //hàm lấy thông tin từ form
                let dataEmployee = me.getFormData();
                // hàm lấy thông tin employeeID
                let employeeID = $("#employeeID").val();
                
            if(employeeID){
                // edit data nếu không employeeID khác null
                me.editData(dataEmployee, employeeID);
            }else{
                // Lưu data nếu không employeeID null
                me.saveData(dataEmployee);
            }
        }
    }
    
    /**hàm lấy data từ form add để lưu data 
     * nvhthai 9/8/2022
     * @param {} employeeID 
     * @returns 
     */
    getFormData(){
        let me = this,
            dataEmployee = {};
        me.formAdd.find("[PropName]").each(function(){
            let dataType = $(this).attr("DataType"),
                propName = $(this).attr("PropName"),
                value = null;
                
            switch(dataType){
                case Resource.DataTypeColumn.Enum:
                    if($(this).val()){
                        value = CommonFn.NameToID($(this).val())
                    }else{
                        value = null;
                    }
                    break;
                case Resource.DataTypeColumn.Text:
                    value = $(this).val();
                    break;
                case Resource.DataTypeColumn.String:
                    value = $(this).val();
                    break;
                case Resource.DataTypeColumn.Number:
                    if($(this).val()){
                        value = CommonFn.moneyStringToNaN($(this).val());
                    }
                    break;
                case Resource.DataTypeColumn.Date:
                    if($(this).val()){
                        value = $(this).val();
                    }else{
                        value = null;
                    }
                    break;
            }
            dataEmployee[propName] = value;
        });
        
        
        return dataEmployee;
    }

   

    /**hàm lưu data nhân viên vào cơ sở dữ liệu
     * nvhthai 9/8/2022
     * @param {} dataEmployee 
     */
    saveData(dataEmployee){
        let me = this;
        $.ajax({
            type: "POST",
            url: "https://localhost:7285/api/v1/Employees",
            data: JSON.stringify(dataEmployee),
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log(response);  
                me.openGetData();
                me.getEmployeeNewCode();
            }
        });

        //hàm đóng form
        me.closeForm();
    }
    

    /**hàm sửa thông tin nhân viên trong csdl
     * nvhthai 9/8/2022
     * @param {*} dataEmployee 
     */
    editData(dataEmployee, employeeID){
        let me = this;
        $.ajax({
            type: "PUT",
            url: "https://localhost:7285/api/v1/Employees/"+employeeID,
            data: JSON.stringify(dataEmployee),
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log(response); 
                //sửa xong thì lấy thông tin đẩy lên bảng 
                me.openGetData();
                              
            }
        });
        me.closeForm();
    }

   
    /**kiểm tra điều kiện
     * nvhthai 9/8/2022
     * @returns 
     */
    validateForm(){
        let me = this,
            isValid = me.validateRequire();
            if(isValid){
                //kiểm tra điều kiện email
                isValid = me.validateEmail();
            }
            if(isValid){
                //kiểm tra điều kiện só CMT
                isValid = me.RequiredIdentityNumber();
            }
            if(isValid){
                //kiểm tra điều kiện Số điện thoại
                isValid = me.RequiredNumberPhone();
            }
            if(isValid){
                //kiểm tra điều kiện lương
                isValid = me.RequiredSalary();
            }
            
            return isValid;
    }

    /**kiểm tra điều kiện emai
     * nvhthai 9/8/2022
     * @returns 
     */
    validateEmail(){
        let me = this,
        isValid = true;

        me.formAdd.find('[RequiredEmail]').each(function(){
        let value = $(this).val();
        //hàm check mail xem đúng định đạng không
            if(!me.checkEmail(value)){
                isValid = false;
                $(this).addClass("require-control");
                //hiện thông báo sai định dạng
                me.showToastFormEmail();
            }else{
                $(this).removeClass("require-control");
                }
        });
        return isValid;
    }    


    /**hàm kiểm tra email xem đúng dạng hay không
     * nvhthai 9/8/2022
     * @param {*} email 
     * @returns 
     */
    checkEmail(email) {
        let me = this,
            re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        return re.test(String(email).toLowerCase());
    }

    /**hàm kiểm tra CMT xem đúng định dạng chưa
     * nvhthai 9/8/2022
     * @returns 
     */
    RequiredIdentityNumber(){
        
        let me = this,
            isValid = true;
        me.formAdd.find('[RequiredIdentityNumber]').each(function(){
            let value = $(this).val();
            if(isNaN(value)){
                isValid = false;
                me.showToastFormIdentityNumber();
            }
        });

        return isValid;
    }   

    /**hàm kiểm tra xem số điện thoại đúng định dạng chưa
     * nvhthai 9/8/2022
     * @returns 
     */
    RequiredNumberPhone(){
        let me = this,
            isValid = true;
        me.formAdd.find('[RequiredNumberPhone]').each(function(){
            let value = $(this).val();
            if(isNaN(value)){
                isValid = false;
                me.showToastFormNumberPhone();
            }
        });

        return isValid;
    }

    /**hàm kiểm tra lương xem đúng định dạng chưa
     * nvhthai 9/8/2022
     * @returns 
     */
    RequiredSalary(){
        let me = this,
            isValid = true;
        me.formAdd.find('[RequiredSalary]').each(function(){
            let value = $(this).val();
            if(isNaN(value)){
                isValid = false;
                me.showToastFormSalary();
            }
        });
        return isValid;

    }

    /**hàm kiểm tra xem đầu vào có rỗng không
     * nvhthai 9/8/2022
     * @returns 
     */
    validateRequire(){
        let me = this,
            isValid = true;

        me.formAdd.find('[Required]').each(function(){
            let value = $(this).val();

            if(!value){
                isValid = false;

                $(this).addClass("require-control");
                $(this).attr("title", "Không được bỏ trống");
                me.showToastNull();

            }else{
                $(this).removeClass("require-control");
                $(this).attr("title", "");
            }
        });

        return isValid;
    }


     /**
     * Reset nội dung form
     nvhthai 9/8/2022
     */
     resetForm(){
        let me = this;
        me.formAdd.find("[PropName]").each(function(){
            let dataType = $(this).attr("DataType") || "Text",
                functionName = "reset" + dataType;
            if(me[functionName] && typeof me[functionName] == "function"){
                me[functionName](this);
            }
        });

        
        me.formAdd.find(".require-control").each(function(){
            $(this).removeClass("require-control");
        });
    }

    /**reset nội dung dịnh dạng là text
     * nvhthai 9/8/2022
     * @param {*} text 
     */
    resetText(text){
        let me = this;
        $(text).val("");
    }

    /**reset nội dung định dạng là date
     * nvhthai 9/8/2022
     * @param {*} date 
     */
    resetDate(date){
        let me = this;
        $(date).val("");
    }

    /**reset nội dung dịnh dạng là số
     * 
     * @param {*} number 
     */
    resetNumber(number){
        let me = this;
        $(number).val("");
    }

    /**reset nội dung định dạng là enum
     * nvhthai 9/8/2022
     * @param {*} Enum 
     */
    resetEnum(Enum){
        let me = this;
        $(Enum).val("");
    }
   

    /**lấy thông tin chi tiết nhân viên bằng ID
     * nvhthai 9/8/2022
     * @param {*} employeesID 
     * @param {*} check 
     */
    getDataByID(employeesID, check){
        let me = this;
            $.ajax({
                    type: "GET",
                    url: "https://localhost:7285/api/v1/Employees/" + employeesID,
                    data: JSON.stringify(employeesID),
                    dataType: "json",
                    contentType: "application/json",
                success: function (response) {
                    
                    me.renderDataFormAdd(response, check);
                }
            });
    }

    /**hàm lấy mã nhân viên mới nhất
     * nvhthai 9/8/2022
     */
    getEmployeeNewCode(){
        let me = this;
        $.ajax({
            type: "Get",
            url: "https://localhost:7285/api/v1/Employees/new-code",
            dataType: "text",
            contentType: "application/json",
            success: function (response) {
                me.upDataEmloyeeCode(response); 
            }
            
        });
        
    }

    
     /**hàm lấy mã nhân viên rồi đưa vào id IDEmployeeEnd
     * nvhthai 9/8/2022
     * @param {*} employeeCode 
     */
     upDataEmloyeeCode(employeeCode){
        $("#IDEmployeeEnd").val(employeeCode);
    }
    
}







