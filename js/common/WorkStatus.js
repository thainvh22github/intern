// Các hàm dùng chung toàn chương trình
var WorkStatus = WorkStatus || {};


WorkStatus.EnumToName = value => {
    switch(value){
        case Enumeration.WorkStatus.NotWorking:
            return Resource.WorkStatus.NotWorking;
        case Enumeration.WorkStatus.CurrentlyWorking:
            return Resource.WorkStatus.CurrentlyWorking;
        case Enumeration.WorkStatus.StopWork:
            return Resource.WorkStatus.StopWork;
    }
}

