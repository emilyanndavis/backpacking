<!--
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
-->

# Why I Created Backpacking

In 2022, while working full-time, I started taking courses toward a second bachelor's degree. When you're taking just one or two courses per term, the pace of progress can seem glacial! I created Backpacking to help me see just how far I've come. It provides a view of the path ahead, as well as a reminder to celebrate progress, no matter how slow.

I built Backpacking with HTML, CSS, [Charts.css](https://chartscss.org/), and [mustache.js](https://github.com/janl/mustache.js). After years of working with increasingly complex front-end JavaScript frameworks, I've found myself drawn to simpler tools for simpler use cases. I envisioned Backpacking as a static page, driven by data that changes infrequently (roughly once per academic term). I also wanted to design it in a way that others could clone Backpacking and use it to track their own degree progress, without the need for any prior experience with front-end development. This vision led me to seek a solution based on templating. I've created the structure with HTML, using [mustache](https://mustache.github.io/) syntax to identify places where the content should be populated by behind-the-scenes data. To customize Backpacking, a student need only personalize that behind-the-scenes data so it reflects their own degree and course details, and mustache.js takes care of the rest. Even the theme colors are defined by data, making it easy to repaint Backpacking without even touching the CSS.

— Emily Davis, January 2026
