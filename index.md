---
layout: default
title: Home
---

## Hi, I’m Wen-Hao Lue.

I’m a programmer, musician, and I dabble in design. I’m currently a Software
Engineering student at the [University of Waterloo], graduating in 2014.

In my spare time, I work on [various projects] and contribute to [open source].
I'm one of the main contributors of [PonyDebugger].

Most recently, I interned at [Twitter], writing Monads in Scala. I previously
worked at [Square] as an iOS Engineer, and [Xtreme Labs].

## Shall we talk?

The best way to contact me is through [email]. You can also ping me [@wlue] on
Twitter.

  [Software Engineering]:     https://uwaterloo.ca/software-engineering/
  [University of Waterloo]:   http://uwaterloo.ca
  [various projects]:         /projects
  [open source]:              http://github.com/wlue
  [PonyDebugger]:             http://github.com/square/ponydebugger
  [Twitter]:                  http://twitter.com
  [Square]:                   http://squareup.com
  [Xtreme Labs]:              http://xtremelabs.com
  [email]:                    mailto:contact@wenhaolue.com
  [@wlue]:                    http://twitter.com/wlue

{% if site.posts.count %}

<hr>
## Posts

  <ul class="posts">
    {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      - <span>{{ post.date | date_to_string }}</span>
    </li>
    {% endfor %}
  </ul>

{% endif %}
