
var Init = new Init();

Init.Init();

function Init(){
    this.Init = function(){
        Init.Img();
        Init.event();
    }
    this.event = function(){
        $(window).resize(function(){
            Init.Img();
        })
    }
    this.Img = function(){
         var card_width = 300;
        var number = parseInt($(".content").width()/card_width);
        console.log(number);
        var content_left = ($(".content").width()-(card_width*number))/2;
       
        var count = 0;
        var top_arr = { "0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "11":0, "12":0, "13":0, "14":0, "15":0, "16":0, "17":0, "18":0, "19":0, "20":0};
   
        $(".card").each(function(index){
            if(index >= number){
                var rest = index%number;
                var temp = $(".card").eq(index-number).height();
                
                top_arr[rest] = top_arr[rest]+temp+60;
                
                $(this).css({"top":top_arr[rest]});
            }else{
                $(this).css({"top":0});
            }
            $(this).css({"left":card_width*count+content_left});
            count++;
            count == number ? count = 0 : ""; 
        })
    }
}