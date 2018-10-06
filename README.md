# Personal Website

![license: mit][license_shield] [![code style: prettier][prettier_shield]][prettier]

My personal minimalist spot on the web, built with [Preact][preact],
[Typescript][typescript] and [Sass][sass], bundled with [Parcel][parcel] and
formatted with [Prettier][prettier].

## Fast

I wanted a simple website with fast load times without sacrificing
the component-based approach of React. The solution was to use Preact which has
a much smaller footprint: infact, this website is just shy of 11KB gzipped
excluding the font which, sadly, adds another 13KB. However, font loading is
deferred using [font-display][google-font-display] to reduce the time to FMP.

The site also scores 100/100 in Google Chrome's
[Lighthouse audit tool][lighthouse] Performance test (Chrome build: 69,
Device: Mobile, Throttling: Applied Fast 3G, 4x CPU Slowdown, Clear Storage:
yes, Enabled Chrome extensions: none).

## Upcoming Features

- [ ] Projects page
- [ ] Blog page

## License

Copyright (c) 2018-present Matei Bogdan Radu.

This source code is licensed under the MIT license found in the
[LICENSE][license] file in the root directory of this source tree.

<!-- Sources -->

[typescript]: http://www.typescriptlang.org/
[sass]: https://sass-lang.com/
[parcel]: https://parceljs.org/
[preact]: https://preactjs.com/
[lighthouse]: https://developers.google.com/web/tools/lighthouse/
[google-font-display]: https://developers.google.com/web/updates/2016/02/font-display
[license]: https://github.com/matt-block/personal-website/blob/master/LICENSE
[license_shield]: https://img.shields.io/badge/license-MIT-blue.svg
[prettier]: https://github.com/prettier/prettier
[prettier_shield]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
