---
title: Getting started with Markdoc
author: Jarret Oldham
description: How to get started with Markdoc
nextjs:
  metadata:
    title: Getting started with Markdoc
    description: How to get started with Markdoc
---

{% partial file="header.md" /%}

This is a test

{% callout title="Hey you!" type="warning" %}
I have a message for you!

You can make support for custom markdown tags that are rendered by your react components!
{% /callout %}

{% callout type="check" %}

This is another type of callout, all rendered by the @/components/callout component

{% /callout %}

```javascript
let test = 1;
function foo = () => { console.log('bar') };
```

```bash
cd ../test
dotnet pack /p:Version=1.0
```

## Secondary Heading

This is another paragraph

you can add any `page.md` in a subdirectory in `/app/docs` and it will be added to the next.js router

### Third Heading

## Another heading
