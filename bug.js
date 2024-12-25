```javascript
// ... your Tailwind CSS code ...

<div class="bg-gradient-to-r from-blue-500 to-purple-500">
  <!-- Some content -->
</div>
```
This code snippet uses Tailwind's gradient utility classes. However, if the gradient doesn't appear or appears incorrectly, it might be due to a few uncommon issues:

1. **Incorrect Color Names:** Double-check that `blue-500` and `purple-500` are valid Tailwind color names.  Typographical errors are common.  Consult your Tailwind configuration to ensure these colors exist.
2. **Missing or Incorrect Configuration:** If you're using custom colors, make sure they're correctly defined in your `tailwind.config.js` file.
3. **Conflicting Styles:** Other CSS rules might be overriding your gradient styles. Use your browser's developer tools to inspect the element and check its computed styles to see what's actually being applied.
4. **Missing or Incorrect `theme` Configuration:**  Ensure your `theme` section in `tailwind.config.js` includes the gradient configurations you're trying to use.  A missing `extend` section or incorrect values can cause unexpected behavior.  Here's an example:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
```
5. **Parent Container Issues:**  The parent container's styling might be interfering. Try removing or simplifying the parent container's styles to isolate the problem.
6. **Caching:** Clear your browser's cache and hard-reload the page to ensure that you are not seeing an outdated version of the stylesheet.
7. **Plugin Conflicts:** If you have other CSS plugins or libraries, their styles might be interfering. Try temporarily disabling other plugins to determine if a conflict exists.