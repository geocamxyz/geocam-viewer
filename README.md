# Geocam Viewer
GeoCam image panorama viewer SDK for JavaScript

### NPM Installation:
```
npm install 'https://gitpkg.now.sh/geocamxyz/geocam-viewer/src?main'
```
### Import Map (External Loading):
```
https://cdn.jsdelivr.net/gh/geocamxyz/geocam-viewer@564ef82aca67208f1c480275591394e9b6c5a52e/dist/geocam-viewer.js
```

### Usage:

```
import { viewer as geocamViewer } from "geocam-viewer"
```
### Setup:
Node is the html element which the viewer will be binded.
````
const viewer = new geocamViewer(node, {
	plugins: [
        // Plugins go here
      ],
});

await viewer.show(
	[
		[
			"url_img_01",
		],
		[
			"url_img_02",
		],
		[
			"url_img_03",
		],
	],
	0,
	[
		"https://calibration.geocam.xyz/calibrations/5992/1/hemisphere_0.obj",
		"https://calibration.geocam.xyz/calibrations/5992/1/hemisphere_1.obj",
		"https://calibration.geocam.xyz/calibrations/5992/1/hemisphere_2.obj",
	]
);
```