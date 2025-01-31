---
category: features-image-upload
menu-title: Overview
order: 10
---

# Image upload overview

Inserting images into content created with CKEditor 5 is a very common task. In a properly configured rich-text editor, there are several ways for the end user to insert images:

* **Pasting** it from the clipboard.
* **Dragging** a file from the file system.
* Selecting it through a **file system dialog**.
* Selecting it from a **media management tool** in your application.

Excluding the last option, all other ways require the image to be uploaded to a server. The server will then be responsible for providing the image URL used by CKEditor 5 to display the image in the document.

{@img assets/img/image-upload-animation.svg 650 The visualization of the image upload process in a WYSIWYG editor.}

The software that makes the image upload possible is called an **upload adapter**. It is a callback which tells the editor how to send the file to the server. There are two main strategies of getting the image upload work you can adopt in your project:

* [**Official upload adapters**](#official-upload-adapters) &ndash; There are several features providing upload adapters developed and maintained by the CKEditor team. Pick the best one for your integration and let it handle the image upload in your project.
* [**Custom upload adapters**](#implementing-your-own-upload-adapter) &ndash; Create your own upload adapter from scratch using the open API architecture of CKEditor 5.

<info-box>
	If you want to get a better look under the hood and learn more about the upload process, you can check out the {@link framework/guides/deep-dive/upload-adapter "Custom image upload adapter" deep dive guide} covering that topic.
</info-box>

## Demo

The demo below uses the {@link builds/guides/overview#classic-editor Classic editor} configured to use the {@link features/easy-image Easy Image} service provided by [CKEditor Cloud Services](https://ckeditor.com/ckeditor-cloud-services):

{@snippet build-classic-source}

{@snippet features/easy-image}

## Official upload adapters

### Easy Image

CKEditor 5 introduces a new way of handling images, with a strong focus on the end–user experience. This feature is called {@link features/easy-image Easy Image} and its goal is to make the image upload as effortless and intuitive as possible.

Easy Image is part of the [CKEditor Cloud Services](https://ckeditor.com/ckeditor-cloud-services/) offer. It is a <abbr title="Software as a service">SaaS</abbr> product which:

* securely uploads images,
* takes care of rescaling and optimizing them as well as providing various image sizes (responsive images),
* delivers uploaded images through a blazing-fast CDN.

All that with virtually zero server setup.

{@link features/easy-image **Learn how to use Easy Image in your project**}.

### CKFinder

The {@link features/ckfinder CKFinder feature} provides a bridge between the rich-text editor and [CKFinder](https://ckeditor.com/ckfinder/), a browser-based file uploader with its server-side connectors (PHP and ASP.NET).

There are two ways you can integrate CKEditor 5 with the CKFinder file manager:

* **With the server-side connector only** &ndash; In this scenario, images dropped or pasted into the editor are uploaded to the CKFinder server-side connector running on your server.
* **With both the server-side connector and the client-side file manager** (recommended) &ndash; Images dropped and pasted into the editor are uploaded to the server (like in the first option).

	But there are more cool features available, for instance:

	* **uploading** using the full user interface,
	* **browsing** previously uploaded images,
	* **editing** images (cropping, resizing, etc.),
	* **organizing** or deleting images.

{@link features/ckfinder **Learn how to integrate CKEditor 5 with CKFinder in your project**}.

### Simple adapter

The {@link features/simple-upload-adapter Simple upload adapter} allows uploading images to your server using the [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API with a minimal editor configuration.

{@link features/simple-upload-adapter **Learn how to use the Simple upload adapter in CKEditor 5**}.

### Base64 adapter

The {@link features/base64-upload-adapter Base64 upload feature} converts images inserted into the editor into [Base64 strings](https://en.wikipedia.org/wiki/Base64) in the {@link builds/guides/integration/saving-data editor output}.

{@link features/base64-upload-adapter **Learn how to use Base64–encoded images in CKEditor 5**}.

## Implementing your own upload adapter

CKEditor 5 provides an open API that allows you to develop your own upload adapters. Tailored to your project, a custom adapter will allow you to take the **full control** over the process of sending the files to the server as well as passing the response from the server (e.g. the URL to the saved file) back to the WYSIWYG editor.

{@link framework/guides/deep-dive/upload-adapter **Learn how to develop your own upload adapter for CKEditor 5**}.
