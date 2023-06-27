"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import{ bookRenderer } from "/js/renderers/concursos.js";

const galleryRenderer = {
    asCardGallery: function (t) {
        let cont=`
            <table class="table">
                <thead>
                    <th scope="col">name</th>
                    <th scope="col">organizer</th>
                    <th scope="col">contestDate</th>
                    <th scope="col">prize</th>
                    <th scope="col">description</th>
                    <th scope="col">imageUrl</th>
                </thead>
            </table>`;
        let galleryContainer = parseHTML('<tbody></tbody>');
        let row = parseHTML(cont);
        for (let book of t) {
            let card = bookRenderer.asCard(book);
            galleryContainer.appendChild(card);
        }
        row.appendChild(galleryContainer);
        return row;
    }
};

export { galleryRenderer };