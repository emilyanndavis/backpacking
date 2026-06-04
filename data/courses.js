/*
Backpacking, a Degree Progress Tracker
Copyright (C) 2026 Emily Davis

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

import { Departments } from './departments.js';
import { Schools } from './schools.js';
import { Status } from './status.js';
import { Term } from './term.js';

export const courses = [
  {
    school: Schools.ISU,
    department: Departments.CS,
    number: 1181,
    name: 'Intro to Programming',
    credits: 3,
    status: Status.complete,
    term: Term.Fall,
    year: 2022,
  },
  {
    school: Schools.ISU,
    department: Departments.CS,
    number: 2235,
    name: 'Data Structures & Algorithms',
    credits: 3,
    status: Status.complete,
    term: Term.Fall,
    year: 2022,
  },
  {
    school: Schools.ISU,
    department: Departments.CS,
    number: 1337,
    name: 'Computer Organization & Architecture',
    credits: 3,
    status: Status.complete,
    term: Term.Spring,
    year: 2023,
  },
  {
    school: Schools.ISU,
    department: Departments.CS,
    number: 4499,
    name: 'Data Science & Applied Machine Learning',
    credits: 3,
    status: Status.complete,
    term: Term.Spring,
    year: 2023,
  },
  {
    school: Schools.CSU,
    department: Departments.CS,
    number: 220,
    name: 'Discrete Structures',
    credits: 4,
    status: Status.complete,
    term: Term.Summer,
    year: 2023,
  },
  {
    school: Schools.CSU,
    department: Departments.CS,
    number: 370,
    name: 'Operating Systems',
    credits: 3,
    status: Status.complete,
    term: Term.Fall,
    year: 2023,
  },
  {
    school: Schools.CSU,
    department: Departments.MATH,
    number: 369,
    name: 'Linear Algebra I',
    credits: 3,
    status: Status.complete,
    term: Term.Spring,
    year: 2024,
  },
  {
    school: Schools.CSU,
    department: Departments.CS,
    number: 320,
    name: 'Algorithms: Theory & Practice',
    credits: 3,
    status: Status.complete,
    term: Term.Fall,
    year: 2024,
  },
  {
    school: Schools.CSU,
    department: Departments.CS,
    number: 453,
    name: 'Intro to Compiler Construction',
    credits: 4,
    status: Status.complete,
    term: Term.Spring,
    year: 2025,
  },
  {
    school: Schools.CSU,
    department: Departments.CS,
    number: 495,
    name: 'Independent Study',
    credits: 2,
    status: Status.complete,
    term: Term.Fall,
    year: 2025,
  },
  {
    school: Schools.CSU,
    department: Departments.CS,
    number: 445,
    name: 'Intro to Deep Learning',
    credits: 4,
    status: Status.complete,
    term: Term.Spring,
    year: 2026,
  },
  {
    school: Schools.CSU,
    department: Departments.CS,
    number: 0,
    name: 'Upper Division CS Elective',
    credits: 3,
    status: Status.incomplete,
  },
  {
    school: Schools.CSU,
    department: Departments.CS,
    number: 0,
    name: 'Upper Division CS Elective',
    credits: 4,
    status: Status.incomplete,
  },
];
