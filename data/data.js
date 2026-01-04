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

import { coAuthorName, coAuthorURL } from './coAuthor.js';
import {
  backgroundColors,
  chartColors,
  pageTitleColor,
  mountainSceneColors,
  textShadowColors,
} from './colors.js';
import { courses } from './courses.js';
import { lastUpdatedDate } from './lastUpdated.js';
import { Status } from './status.js';
import { student } from './student.js';

// Top-level data
export const pageTitle = 'Backpacking';

export { student };

// Helper functions for styling list items by course status
const courseStatusToCssClass = (status) => {
    switch(status) {
        case Status.complete:
            return 'complete';
        case Status.inProgress:
            return 'in-progress';
        case Status.incomplete:
            return 'incomplete';
        default:
            return '';
    }
};

const courseStatusToColor = (status) => {
    switch(status) {
        case Status.complete:
            return chartColors.complete.bg;
        case Status.inProgress:
            return chartColors.inProgress.bg;
        case Status.incomplete:
            return chartColors.incomplete.bg;
        default:
            return 'magenta';
    }
};

export const courseList = courses.map(course => ({
    ...course,
    cssClass: courseStatusToCssClass(course.status),
    iconColor: courseStatusToColor(course.status)
}));

// Inputs to summary section (bar chart)
export const totalNumCourses = courses.length;
export const numCoursesCompleted = courses.filter(course => course.status === Status.complete).length;
export const numCoursesInProgress = courses.filter(course => course.status === Status.inProgress).length;
export const numCoursesIncomplete = courses.filter(course => course.status === Status.incomplete).length;
const getMaxBarLength = () => {
  let maxBarLength = 1;
  for (let num of [numCoursesCompleted, numCoursesInProgress, numCoursesIncomplete]) {
    if (num > maxBarLength) {
      maxBarLength = num;
    }
  }
  return maxBarLength;
};
export const maxBarLength = getMaxBarLength();

// Inputs to snapshot section (mountain climber scene)
const fractionComplete = numCoursesCompleted / totalNumCourses;
export const percentComplete = Math.round(100 * fractionComplete);
const getProgressMessage = () => {
  const messagePrefix = `You've completed ${percentComplete}% of your coursework`;
  if (percentComplete === 100) {
    return `${messagePrefix}. Congrats!`;
  } else if (percentComplete === 0) {
    return `${messagePrefix}. Welcome to the trailhead!`;
  } else if (percentComplete < 34) {
    return `${messagePrefix}. Off to a great start!`;
  } else if (percentComplete < 67) {
    return `${messagePrefix}. Keep going!`;
  } else {
    return `${messagePrefix}. Almost there!`;
  }
};
export const progressMessage = getProgressMessage();
const getHikerAltText = () => {
  if (fractionComplete === 0) {
    return 'A backpacker standing at the base of a mountain.';
  } else if (fractionComplete === 100) {
    return 'A backpacker standing at the top of a mountain.';
  } else {
    return `A backpacker standing on the slope of a mountain. They have climbed ${percentComplete}% of the mountain so far.`;
  }
};
export const hikerAltText = getHikerAltText();

// Custom colors
export {
  backgroundColors,
  chartColors,
  mountainSceneColors,
  pageTitleColor,
  textShadowColors,
};

// Footer details
export { coAuthorName, coAuthorURL };
export { lastUpdatedDate };
