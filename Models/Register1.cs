using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace WebAngularRAC.Models
{
   
        [Table("Register1")]
        public class Register1
        {
            [Key]
            public string Pp { get; set; }
            public string Mp { get; set; }
            public string Place { get; set; }     //[ЭлектроннаяПлощадка]
            public string Garza { get; set; }     
            public DateTime DatePost { get; set; }  //[ДатаОкончанияПодачи]
            public string Result { get; set; }
            public DateTime DateAuction { get; set; }
            public string Region { get; set; }            //[Регион]
            public string Player { get; set; }            //[игрок]
            public string Client { get; set; }            //[Заказчик]
            public string Manager { get; set; }
            public decimal FirstPrice {get; set; }        //[НачальнаяЦена]
            public decimal Sum { get; set; }               //[сумма обепечений]
            public decimal Return { get; set; }            //[возврат обепечений]
            public decimal SumPrize { get; set; }            //[сумма выигрыша]
            public decimal Percent { get; set; }             //процент цены
            public string Status { set; get;}               //статус исполнения котракта
    }


}
