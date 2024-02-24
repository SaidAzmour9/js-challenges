let firstName = prompt("enter first name");
let lastName = prompt("enter last name");
let fullName = firstName + " " + lastName;
let birthdayYear = Number(prompt("enter birthday year"));

years = 2024- birthdayYear;
months = years * 12;
days = 365* years;
hours = days* 24;
minutes = hours * 60;
seconds = minutes * 60;

let all = `
                hello ${fullName}.
                your age is:
                ${years} years.
                ${months} months.
                ${days} days.
                ${hours} hours.
                ${minutes} minutes.
                ${seconds} seconds.
      `
console.log(all);
