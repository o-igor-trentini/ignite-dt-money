export const dateMask = (date: Date) => Intl.DateTimeFormat('pt-BR').format(date);

export const moneyMask = (value: number) =>
    Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
