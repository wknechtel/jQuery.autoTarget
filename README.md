jQuery.autoTarget
=================

Simply, automatically, and standards-compliantly open external links in a new window/tab.

Why autoTarget?
---------------

There is a little gotcha when you're writing standards compliant code, but still want off-site links to open in new windows. XHTML 1.0 Strict deprecated the use of the "target" attribute.  Early versions of HTML5 also had this deprecation, but have since brought it back.  In either case, making sure the target attribute is set on every off-site link can be tedious.

Enter autoTarget
----------------

Instead of going through the tedium of ensuring your target attributes are set, this jQuery plugin automatically scans all the links on a page, and sets the attribute for you (target="_blank") if the href attributes domain isn't the same as the domain the page is served from. Just to sweeten the deal, it also sets any offsite link to have a class of "external-link", so you can style offsite links in the manner of your choice.  Easy-peasy. And it only weighs in at 222 bytes!

Using autoTarget
----------------
Simply include the jQuery.autoTarget.min.js in your document head.  That's it. There's nothing to initialize, just a single line in the head of your document:

```html
<script type="text/javascript" src="javascripts/jQuery.autoTarget.min.js"></script>
```

Just make sure your include that line _after_ you've included jQuery itself.

Compatibility
-------------
I've not conducted huge swaths of compatibility testing, but it seems to work fine in modern iterations of Safari, FireFox, Chrome, IE9+, etc.  As for jQuery, I think it'd likely work in 1.4+.

Download
--------
[Download jQuery.autoTarget v1.0.0](https://github.com/wknechtel/jQuery.autoTarget/archive/v1.0.0.zip)