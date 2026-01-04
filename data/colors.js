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

const colors = {
    csuGreen: '#1e4d2b',
    csuGold: '#c8c372',
    csuAggieOrange: '#d9782d',
    csuOvalGreen: '#006144',
    csuLoversLane: '#82c503',
    csuEnergyGreen: '#cffc00',
    csuFlowerTrialRed: '#e56a54',
    csuPoweredPurple: '#7e5475',
    csuHorsetoothBlue: '#008fb3',
    csuStalwartSlate: '#105456',
    csuSunshine: '#ffc038',
    white: '#ffffff',
};

export const backgroundColors = {
  color1: colors.csuFlowerTrialRed,
  color2: colors.csuPoweredPurple,
  color3: colors.csuAggieOrange,
  color4: colors.csuGold,
  color5: colors.csuGreen,
};

export const pageTitleColor = colors.csuGreen;

export const textShadowColors = {
  color1: colors.csuGold,
  color2: colors.csuSunshine,
};

export const mountainSceneColors = {
  mountain: colors.csuGreen,
  hiker: colors.csuPoweredPurple,
  sun: colors.csuSunshine,
};

export const chartColors = {
  complete: {
    bg: colors.csuGreen,
    text: colors.white,
  },
  inProgress: {
    bg: colors.csuAggieOrange,
    text: colors.white,
  },
  incomplete: {
    bg: colors.csuPoweredPurple,
    text: colors.white,
  },
};
