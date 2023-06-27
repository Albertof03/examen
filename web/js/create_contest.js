"use strict";

import { contestsAPI_auto } from "/js/api/_contests.js";
import { messageRenderer } from "/js/renderers/messages.js";

let urlParams = new URLSearchParams(window.location.search);
let contestId = urlParams.get("contestId");

async function main() {

    if (contestId !== null) {
        loadCurrentPhoto();
    }
    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;
}


async function loadCurrentPhoto() {
    let pageTitle = document.getElementById("page-title");
    let titleInput = document.getElementById("input-name");
    let authorInput = document.getElementById("input-organizer");
    let releaseDateInput = document.getElementById("input-contestDate");
    let numPagesInput = document.getElementById("input-prize");
    let descriptionInput = document.getElementById("input-description");
    let imageUrlInput = document.getElementById("input-imageUrl");
    pageTitle.textContent = "Editor de Libros";
    try {
        let currentPhoto = await contestsAPI_auto.getById(contestId);
        authorInput.value = currentPhoto.organizer;
        titleInput.value = currentPhoto.name;
        releaseDateInput.value = currentPhoto.contestDate;
        numPagesInput.value = currentPhoto.prize;
        descriptionInput.value = currentPhoto.description;
        imageUrlInput.value = currentPhoto.imageUrl;
    } catch (err) {
        messageRenderer.showErrorMessage(err.response.data.message);
    }
}

async function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    try {
        let formData = new FormData(form);

        if (contestId !== null) {
            await contestsAPI_auto.update(formData, contestId);
            window.location.href = `/create_contest.html?contestId=${contestId}`;
        } else {
            await contestsAPI_auto.create(formData);
            window.location.href = "/index.html";
        }
    } catch (error) {
        messageRenderer.showErrorMessage(error);
    }
}
document.addEventListener("DOMContentLoaded", main);
