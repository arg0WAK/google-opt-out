<a class="remove" href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>

<h1 class='remove'>Google Opt-Out (Cookie Consent)</h1>

![Google Opt-Out (Cookie Consent) Cover](https://arg0wak.github.io/gist/images/google-opt-out/2Q1NL3AAKQQUP8Z.png)

Google Opt-out refers to a set of tools and settings that allow users to opt-out of certain data collection or tracking activities when using Google services. This is offered to users to enhance their privacy and help them avoid certain types of advertising or data collection. This repo gives the end user the option to refuse Analytics cookies. It supports both UA and GA4 properties.

## ⛓️ Dependencies

The dependencies are given below. If you are using a SASS Compiler, you do not need to install the `sass` package.

```bash
  js-cookie
  bootstrap
  sass
```

## 🚨 Warnings

### Add PUBLIC_KEY

Add your `PUBLIC KEY` to the field given in the example below.
If you have the Universal Analytics property, update the `G-` entry to `UA-`.

`const PUBLIC_KEY = 'G-XXXXXXXXXX'`

### Defining Necessary and Optional Cookies

Before starting the installation, determine what cookies are required in your project. Define the ones you want to remove optionally among these cookies in the `optionalCookies` variable.

## 🚀 Installation

First of all clone the repo to your device using the link below.

```bash
  $ git clone git@github.com:arg0WAK/google-opt-out.git
  $ cd google-opt-out
```

Install all dependencies.

```bash
  $ npm install
  $ clear
```

Define your public key given by Google Analytics in the `PUBLIC_KEY` variable between the `<head></head>` tags.

```bash
# Google tag (gtag.js) #
<script>
   const PUBLIC_KEY = 'G-XXXXXXXXXX'

   # Code is continuing.
</script>
```

Import `js.cookie.js` and `cookie.js` file just before the `</body>` tags.

```bash
<script src="/node_modules/js-cookie/dist/js.cookie.js"></script>

# arg0WAK Cookie.js JavaScript #
<script src="js/cookie.js"></script>
```

Import dependencies in your SCSS or CSS like below.

```bash
# You don't need to use it in SCSS or CSS, you can define it as link in HTML if you want.
@import url('/node_modules/bootstrap/dist/css/bootstrap.min.css');

# Google Opt-Out Cookie Consent CSS
@import url('cookie.css');
@import url('utils/fixed.css');
```

Go back your HTML file and add code belows.

```bash
<div class="cookie-container">
   <div class="form-group p-3 d-flex flex-column justify-cent-center gap-2 rounded h-100">
      <div class="form-check">
         <input
            disabled
            checked
            class="form-check-input"
            type="checkbox"
            value="true"
            id="requiredCookies" />
         <label
            class="form-check-label"
            for="">
            Required Cookies
            # You must write function for only required Cookies #
         </label>
      </div>
      <div class="form-check">
         <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="analyticsCookies" />
         <label
            class="form-check-label"
            for="analyticsCookies">
            Analytics Cookies
         </label>
      </div>
      <div class="form-group d-flex flex-column gap-2">
         <button
            class="btn btn-warning w-100"
            onclick="handleAllowCookie()">
            Accept Preferred Cookies 🔍
         </button>
         <div class="d-flex flex-md-row flex-column gap-2">
            <button
               class="btn btn-success w-100"
               onclick="allowAllCookies()">
               Accept All Cookies 🍪
            </button>
            <button
               class="btn btn-danger w-100"
               onclick="handleDisableCookie()">
               Reject Cookies
            </button>
         </div>
      </div>
   </div>
</div>
```

If you want to fix the Cookie Container over page, you can use the following classes.

```bash
<div class="
   cookie-container
   cookie-container-fixed
   cookie-container-center">

   # Code is continuing
</div>
```

Also you can use `cookie-container-left` and `cookie-container-right` classes instead of `cookie-container` class.

## Remove Optional Cookie

When user rejects analytics data tracking permissions, user may want to reject other data tracking cookies. If you want to provide options to the user, you can customize the `optionalCookies` variable and manipulate the DOM as you wish through this structure.

```bash
const optionalCookies = ['cookieName1', 'cookieName2', 'cookieName3']
```

_Enjoy it!_
