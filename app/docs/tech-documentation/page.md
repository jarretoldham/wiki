---
title: Tech Documentation
author: Jarret Oldham
description: RTFM
nextjs:
  metadata:
    title: Tech Documentation
    description: RTFM
---

{% partial file="header.md" /%}

This is the tech documentation page
- {% link href="/docs/tech-documentation/topic-a" %} Here {% /link %} For More Information on topic A
- {% link href="https://google.com" %} Google Link {% /link %}
- [Another Internal Link](/docs/tech-documentation/topic-a), this time with markdown
- [Google](https://google.com) with markdown
- {% link href="/docs/tech-documentation/topic-a" target="_blank" size="sm" %} Topic A, but external {% /link %}

Ordered List 
1. One
2. Test 
3. Another item

## Images

Here is what an image looks like:
![Foxit Webhook Status](/images/foxit-webhook-status.png "Foxit Webhook Status")

Custom Image Tag: 
{% appImage src="/images/foxit-webhook-status.png" alt="Foxit Webhook Status" blurred=true radius="sm"/%}
