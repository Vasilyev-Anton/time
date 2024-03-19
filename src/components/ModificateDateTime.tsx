import moment from "moment";
import { ReactNode } from "react";
import React from 'react';

export default function ModificateDateTime(Component: React.ElementType, date: string) {

  const getDifferenceText = (dif: number): string => {
    if (dif < 1000 * 60 * 60 * 24) return "12 минут назад";
    if (dif < 1000 * 60 * 60) return "5 часов назад";

    const days = Math.floor(dif / (1000 * 60 * 60 * 24));
    
    if (days === 1 || days === 21) return `${days} день назад`;
    if ((days >= 2 && days <= 4) || (days >= 22 && days <= 24)) return `${days} дня назад`;
    return `${days} дней назад`;
  };

  const getMonthsYearsText = (months: number): string => {
    if (months >= 12) {
      const years = Math.floor(months / 12);
      return `${years} ${years >= 5 ? 'лет' : years === 1 ? 'год' : 'года'} назад`;
    }
    return `${months} ${months >= 5 ? 'месяцев' : months === 1 ? 'месяц' : 'месяца'} назад`;
  };

  const dateLabel = (date: string) => {
    const dif = moment().diff(moment(date));
    
    if (dif >= 1000 * 60 * 60 * 24 * 30) {
      const months = Math.floor(dif / (1000 * 60 * 60 * 24 * 30));
      return getMonthsYearsText(months);
    }

    return getDifferenceText(dif);
  };

  const newDate = dateLabel(date);

  return class extends React.Component {

    render(): ReactNode {
      return (
        <Component date={newDate} />
      );
    }
  }
}
