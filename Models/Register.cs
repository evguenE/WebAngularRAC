using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngularRAC.Models
{
    [Table("Register")]
    public class Register
    {
        [Key]
        public string Pp { get; set; }
        public string Mp { get; set; }
        public string Place { get; set; }     //[ЭлектроннаяПлощадка]
        public DateTime DatePost { get; set; }  //[ДатаОкончанияПодачи]
        public string Result { get; set; }


        //[ДатаПроведенияАукциона]         DATETIME       NULL,
        //[Регион]                         NVARCHAR (255) NULL,
        //[Заказчик]                       NVARCHAR (255) NULL,
        //[Менеджер]                       NVARCHAR (255) NULL,
        //[НачальнаяЦена]                  FLOAT (53)     NULL,
        //[ОбеспечениеЗаявки]              FLOAT (53)     NULL,
        //[СтатусОбеспеченияЗаявки]        NVARCHAR (255) NULL,
        //[Выиграно ]                      FLOAT (53)     NULL,
        //[ОбеспечениеИсполненияКонтракта] FLOAT (53)     NULL,
        //[СниженияЦены]                   FLOAT (53)     NULL,
        //[ФормаОбеспеченияКонтракта]      NVARCHAR (255) NULL,
        //[ОкончаниеОбеспеченияКонтракта]  NVARCHAR (255) NULL,
        //[СрокОкончБанкГарант]            NVARCHAR (255) NULL,
        //[id]                             INT            NOT NULL

        //[NotMapped]
        //public string Username { get; set; }
    }
}
