"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const bookRenderer = {
    asCard: function (contest) {
        let html = `
        <tr>
            <td>${contest.name}</td>
            <td>${contest.organizer}</td>
            <td>${contest.contestDate}</td>
            <td>${contest.prize}</td>
            <td>${contest.description}</td>
            <td>${contest.imageUrl}</td>
        </tr>`;
        let card = parseHTML(html);
        return card;
    },
};
export { bookRenderer };