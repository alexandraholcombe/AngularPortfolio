import { CareerDevItem } from './../../_models/careerdevitem.model';

let epicodus: CareerDevItem = new CareerDevItem(
  'Epicodus',
  'C#/.NET Web Development Student',
  'Jan 2017',
  'Jun 2017',
  'Seattle, WA',
  "In six months at Epicodus, I have learned not only the fundamentals of several different frameworks and languages, but also how to think like a programmer, write good code and use an efficient development workflow. I can quickly learn new programming concepts and implement them with a team or by myself."
)

let skykick: CareerDevItem = new CareerDevItem(
  'SkyKick',
  'Software Engineering Intern',
  'Jun 2017',
  'Jul 2017',
  'Seattle, WA',
  '<ul>' + '<li>Developed internal webpage with fellow interns for the QA team. Technologies used include Sails.js,Angular,  and Azure Cloud Services.</li>' + '<li>Created proof of concept to demonstrate integrating Protractor into current UI testing suite.</li>' +
  '<li>Updated build script by creating separate testing script.</li>' + '<li>Updated new developer setup guide</li>' +
  '</ul>'
)

export const careerDevItems = [
  skykick,
  epicodus
]