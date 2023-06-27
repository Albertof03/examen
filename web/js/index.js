"use strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { contestsAPI_auto } from "/js/api/_contests.js";


async function main() {
    loadcontenido();
}
async function loadcontenido() {
    let contenidos = document.getElementById("content");
    try {
        let books = await contestsAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardGallery(books);
        console.log(books);
        contenidos.appendChild(cardGallery);

    } catch (err) {
        messageRenderer.showErrorMessage("Error while loading photos", err);
    }
}
document.addEventListener("DOMContentLoaded", main);