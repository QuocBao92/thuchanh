let MyDate = function(day,month,year){
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function (){
        return this.day;
    }
    this.getMonth = function(){
        return this.month;
    }
    this.getYear = function (){
        return this.year;
    }
    this.setDay = function(day){
        if(this.validDay(day))
            this.day = day;
        else
            alert('invalid day');
    }
    this.setMonth = function(month){
        if(this.validMonth(month))
        this.month = month;
        else
            alert('invalid month');
    }
    this.setYear = function(year){
        if(this.validYear(year))
        this.year = year;
        else
            alert('invalid year');
    }
    this.setDate = function(dd,mm,yyyy){
        this.day = dd;
        this.month = mm;
        this.year = yyyy;
    }
    this.toString = function(){
        alert(this.day + '/' + this.month + '/' + this.year);
    }
    this.validDay = function(d){
        return d> 0 && d <32;
    }
    this.validMonth = function(m){
        return m> 0 && m <13;
    }
    this.validYear = function(y){
        return y> 1899 && y <10000;
    }
};

let date = new MyDate(12,7,2019);

let day = date.getDay();    
let month = date.getMonth();
let year = date.getYear();
alert(day+'/'+month+'/'+year);

date.setDay(12);
date.setMonth(2);
date.setYear(2019);

alert(date.day +'/'+ date.month +'/'+ date.year);

date.setDate(5,6,2013);

date.toString();

