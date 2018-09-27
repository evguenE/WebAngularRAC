


/****** Object:  Table [dbo].[Register]    Script Date: 19.09.2018 10:02:59 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Register](	
	[ПП] [nvarchar](255) NOT NULL,
	[МП] [nvarchar](255) NULL,
	[ЭлектроннаяПлощадка] [nvarchar](255) NULL,
	[ДатаОкончанияПодачи] [datetime] NULL,
	[Результат] [nvarchar](255) NULL,
	[ДатаПроведенияАукциона] [datetime] NULL,
	[Регион] [nvarchar](255) NULL,
	[Заказчик] [nvarchar](255) NULL,
	[Менеджер] [nvarchar](255) NULL,
	[НачальнаяЦена] [float] NULL,
	[ОбеспечениеЗаявки] [float] NULL,
	[СтатусОбеспеченияЗаявки] [nvarchar](255) NULL,
	[Выиграно ] [float] NULL,
	[ОбеспечениеИсполненияКонтракта] [float] NULL,
	[СниженияЦены] [float] NULL,
	[ФормаОбеспеченияКонтракта] [nvarchar](255) NULL,
	[ОкончаниеОбеспеченияКонтракта] [nvarchar](255) NULL,
	[СрокОкончБанкГарант] [nvarchar](255) NULL	    
) 
GO

