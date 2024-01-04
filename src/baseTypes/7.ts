/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  Mon = "понеділок",
  Tue = "вівторок",
  Wed = "середа",
  Thu = "четвер",
  Fri = "пʼятниця",
  Sat = "субота",
  Sun = "неділя",
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Sat || DayOfWeek.Sun) {
    return true;
  }
  return false;
};
