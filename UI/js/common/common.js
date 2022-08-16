// Các hàm dùng chung toàn chương trình
var CommonFn = CommonFn || {};

// Hàm format số tiền
CommonFn.formatMoney = money => {
    if(money && !isNaN(money)){
        return money.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.");
    }else{
        return money;
    }
}

// Hàm format số tiền
CommonFn.moneyStringToNaN = money => {
    return money.replace(/[^0-9]/g , '');
}

// Format ngày tháng
CommonFn.formatDate = dateSrc => {
    let date = new Date(dateSrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
}
CommonFn.formatForInputDate = dateSrc => {
    let date = new Date(dateSrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}


CommonFn.NameToID = value => {
    switch(value){
        // Xử lý giới tính
        case Resource.Gender.Male:
            return Enumeration.Gender.Male;
        case Resource.Gender.Female:
            return Enumeration.Gender.Female;
        case Resource.Gender.Other:
            return Enumeration.Gender.Other;

        // xử lý chức vụ
        case Resource.Positions.P1:
            return Enumeration.Positions.P1;
        case Resource.Positions.P2:
            return Enumeration.Positions.P2;
        case Resource.Positions.P3:
            return Enumeration.Positions.P3;
        case Resource.Positions.P4:
            return Enumeration.Positions.P4;
        case Resource.Positions.P5:
            return Enumeration.Positions.P5;
        case Resource.Positions.P6:
            return Enumeration.Positions.P6;


        case Resource.Departments.D1:
            return Enumeration.Departments.D1;
        case Resource.Departments.D2:
            return Enumeration.Departments.D2;
        case Resource.Departments.D3:
            return Enumeration.Departments.D3;
        case Resource.Departments.D4:
            return Enumeration.Departments.D4;
        case Resource.Departments.D5:
            return Enumeration.Departments.D5;


        case Resource.WorkStatus.NotWorking:
            return Enumeration.WorkStatus.NotWorking;
        case Resource.WorkStatus.CurrentlyWorking:
            return Enumeration.WorkStatus.CurrentlyWorking;
        case Resource.WorkStatus.StopWork:
            return Enumeration.WorkStatus.StopWork;
            
    }
}
