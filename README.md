# Geocam Viewer
GeoCam image panorama viewer SDK for JavaScript.

### NPM Installation:
```
npm install 'https://gitpkg.now.sh/geocamxyz/geocam-viewer/src?1.0.0'
```
or for a particual commit version:
```
npm install 'https://gitpkg.now.sh/geocamxyz/geocam-viewer/src?564ef82'
```
### Import Map (External Loading):
```
https://cdn.jsdelivr.net/gh/geocamxyz/geocam-viewer@1.0.0/dist/geocam-viewer.js
```
or for a particual commit version:
```
https://cdn.jsdelivr.net/gh/geocamxyz/geocam-viewer@564ef82/dist/geocam-viewer.js
```

### Usage:
The .js file can be imported into your .html file using the below code (This can be ignored if your using the NPM package).
```
<script type="importmap">
      {
        "imports": {
          "geocam-viewer": "https://cdn.jsdelivr.net/gh/geocamxyz/geocam-viewer@1.0.0/dist/geocam-viewer.js"
        }
      }
    </script>
```
The viewer can be imported via a module script or using the npm package and using the below import statement.
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