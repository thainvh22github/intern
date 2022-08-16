$(document).ready(function(){
    new EmployeePage();
});
class EmployeePage {

    /**
     * hàm khởi tạo 
     * NVHThai 13/7/2022
     */
    constructor(){
        $("#icondr").click(function(e) {
            $("#content-cbx").toggle(500);
        });
    }
}
//click nút thêm nhân viên thì hiện form thêm nhân viên
   
