# Contributing

## File format

When possible, use Asciidoc to write pages. Asciidoc files should end in 
`.adoc`, but may end in `.asciidoc` if necessary. *NOTE:* Files will not be 
differentiated by extension.

Markdown is available, but there is no reason to use it. Avoid writing pages in 
HTML at all costs. If you must, consider making it a 
[layout](https://nanoc.app/doc/items-and-layouts/#layouts) instead.
Do not inline CSS. Any styling that is applicable to all pages goes into 
`stylesheet.css`, using classes if necessary. ***TODO:*** should there be 
multiple CSS files, concatenated into one before deploy?

## Metadata

Each page must contain YAML frontmatter with the attributes `title` and 
`description`. Example:
```asciidoc
---
title: Some Page - Spokane Bible Church
description: A succinct but helpful description of the page contents.
---

= Some Page

...
```

Except for the homepage, every page title should end in ` - Spokane Bible 
Church`.

Asciidoc processors will complain about heading levels, since the YAML comes 
before the first h1. You can ignore this.

## Style

Please refer to existing pages for available markup, as well as [the Asciidoc 
docs](https://docs.asciidoctor.org).
When using a style not found in the existing website, you may have to style it 
using `stylesheet.css`. Make sure not to mess up existing
styles.

### Links

Prefix all links with the link macro (`link:`). Enclose link text that contains 
punctuation or spaces in quotation marks (ex. `link:to-someplace["Multiple 
words"]`).
All links that have a role (see YouTube link example below) should enclose 
their link text in quotes.
Add `role=video` (the `.video` CSS class) to all YouTube videos (ex. 
`link:youtu.be/video-id["Some Video",role=video]`).
Make sure to use `youtu.be/<id>` instead of `youtube.com/watch?v=<id>`. If a 
video is part of a playlist, include that in the url.

## Before publishing

You ***MUST*** make sure your changes compile and don't break anything before 
you push or publish any changes.
Use the built-in nanoc server (`nanoc view`), or a third-party HTTP server in 
the `output` directory.
