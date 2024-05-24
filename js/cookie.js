/*!
 * Google Opt-Out v1 (https://arg0wak.github.io/google-opt-out/)
 * Copyright 2024 (https://github.com/arg0WAK)
 * Licensed under MIT (https://github.com/arg0WAK/google-opt-out/blob/main/LICENSE)
 */

document.addEventListener('DOMContentLoaded', function () {
   const gaProperty = PUBLIC_KEY
   const optionalCookies = ['Add your optional cookies here']
   const analyticsCookies = document.getElementById('analyticsCookies')

   const disableStr = `ga-disable-${gaProperty}`

   // Set the GA disable flag if the cookie is present
   if (document.cookie.includes(`${disableStr}=true`)) {
      window[disableStr] = true
   }

   // Check for user consent
   const isEULawAsked = Cookies.get('eu-law-asked') === '1'
   const isAnalyticsEnabled = Cookies.get('enableAnalytics') === '1'
   const isEULawDisagreed = Cookies.get('eu-law-disagree') === '1'
   const isOptionalCookie = Cookies.get('disableAdditionalCookies') === '1'

   if (!isEULawAsked) {
      // You can use this to anything you want.
   }

   if (isOptionalCookie) {
      optionalCookies.forEach((cookie) => {
         removeCookie(cookie, { path: '/', domain: '.' + window.location.hostname})
      })
   }

   if (!isAnalyticsEnabled || isEULawDisagreed) {
      // Remove GA4 Cookies
      window['ga-disable-' + gaProperty] = true
      ;['_gat', '_gid', '_ga'].forEach((cookie) => removeCookie(cookie, { path: '/', domain: '.' + window.location.hostname}))
      removeAllGACookies()
   }

   function setCookie(name, value, options = {}) {
      Cookies.set(name, value, options)
   }

   function removeCookie(name, options = {}) {
      Cookies.remove(name, options)
   }

   function removeAllGACookies() {
      const allCookies = document.cookie.split('; ')
      allCookies.forEach((cookie) => {
         const cookieName = cookie.split('=')[0]
         if (cookieName.startsWith('_ga_')) {
            removeCookie(cookieName, { path: '/', domain: '.' + window.location.hostname})
         }
      })
   }

   function removeAdditionalCookies() {
      // You must remove only addional cookies here
      setCookie('disableAdditionalCookies', optionalCookies, { expires: -1, path: '/' })
   }

   function handleAllowCookie() {
      setCookie('eu-law-asked', 1)

      if (!analyticsCookies.checked) {
         setCookie('enableAnalytics', 0)
         setCookie('eu-law-disagree', 1)
         setCookie(disableStr, 'true', { expires: 365, path: '/' })
      } else {
         setCookie('enableAnalytics', 1)
         setCookie('eu-law-disagree', 0)
         setCookie(disableStr, 'false', { expires: 365, path: '/' })
      }

      // You can use this to anything you want
      window.location.reload()
   }

   function handleDisableCookie() {
      setCookie('eu-law-asked', 1, { path: '/' })
      setCookie('eu-law-disagree', 1, { path: '/' })
      setCookie('enableAnalytics', 0, { path: '/' })
      // Remove GA4 Cookies
      setCookie(disableStr, 'true', { expires: 365, path: '/' })
      removeAllGACookies()

      // If you can remove additional cookies, you can use this
      removeAdditionalCookies()

      // You can use this to anything you want
      window.location.reload()
   }

   function allowAllCookies() {
      analyticsCookies.checked = true
      handleAllowCookie()
   }

   window.allowAllCookies = allowAllCookies
   window.handleAllowCookie = handleAllowCookie
   window.handleDisableCookie = handleDisableCookie
})
