// Các enum dùng chung toàn chương trình
var Enumeration = Enumeration || {};

// Các mode của form detail
Enumeration.FormMode = {
    Add: 1,    // Thêm mới
    Edit: 2,   // Sửa
    Delete: 3  // Xóa
}

// Giới tính
Enumeration.Gender = {
    Female: 1, // Nữ
    Male: 0,   // Nam
    Other: 2   // Khác
}

Enumeration.WorkStatus = {
    NotWorking: 0, // Chưa làm việc
    CurrentlyWorking: 1,   // đang làm việc
    StopWork: 2   // đã nghỉ việc
}

Enumeration.Positions = {
    P1: '2f21d279-fd4b-11ec-b2bc-847beb21fa4f', //Trưởng phòng
    P2: '2f25e3f1-fd4b-11ec-b2bc-847beb21fa4f', //Giám đốc sản xuất
    P3: '2f25e60f-fd4b-11ec-b2bc-847beb21fa4f',//Bảo vệ
    P4: '2f2722e8-fd4b-11ec-b2bc-847beb21fa4f',//Nhân viên tư vấn
    P5: '2f27f18b-fd4b-11ec-b2bc-847beb21fa4f',//Giám đốc tuyển dụng
    P6: '2f283cbe-fd4b-11ec-b2bc-847beb21fa4f' //Kế toán
}

Enumeration.Departments = {
    D1: '2f21402d-fd4b-11ec-b2bc-847beb21fa4f',//phòng kế toán
    D2:'2f269c98-fd4b-11ec-b2bc-847beb21fa4f',//phòng bảo vệ 
    D3:'2f274d39-fd4b-11ec-b2bc-847beb21fa4f',//phòng hỗ trợ khách hàng
    D4:'2f2927a9-fd4b-11ec-b2bc-847beb21fa4f',//phòng nhân sự
    D5:'2f29922d-fd4b-11ec-b2bc-847beb21fa4f'//phòng hành chính

}