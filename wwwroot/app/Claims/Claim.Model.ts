export class ClaimModel {
    
    public Pp: string;
    public Mp: string;
    public Place: string;
    public Garza: string;
    public DatePost: string;          
    public Result: string;
    public DateAuction: string;       //[ДатаПроведенияАукциона]
    public Region: string;            //[Регион]
    public Player: string;            //[Игрок]
    public Client: string;            //[Заказчик]
    public Manager: string;           //[Менеджер]
    public FirstPrice: number;        //[НачальнаяЦена]
    public Sum: number;               //[сумма обепечений]
    public Return: number;            //[возврат обепечений]
    public SumPrize: number;            //[сумма выигрыша]
    public Percent: number;           //[процент снижения]
    public Status: string;          //статус исполнения котракта
}

    //public DateAuction: string;       //[ДатаПроведенияАукциона]
        //public Region: string;            //[Регион]
        //public Client: string;            //[Заказчик]
        //public Menager: string;           //[Менеджер]
        //public FirstPrice: number;        //[НачальнаяЦена]


       //[ОбеспечениеЗаявки]              FLOAT (53)     NULL,
        //[СтатусОбеспеченияЗаявки]        NVARCHAR (255) NULL,
        //[Выиграно ]                      FLOAT (53)     NULL,
        //[ОбеспечениеИсполненияКонтракта] FLOAT (53)     NULL,
        //[СниженияЦены]                   FLOAT (53)     NULL,
        //[ФормаОбеспеченияКонтракта]      NVARCHAR (255) NULL,
        //[ОкончаниеОбеспеченияКонтракта]  NVARCHAR (255) NULL,
        //[СрокОкончБанкГарант]            NVARCHAR (255) NULL,
        //[id]                             INT            NOT NULL


