'use strict';


// Utility object for mapping desired transformations to URL query parameters:
export const transformEncodings = new Map([
  ['angle', 'a_'],            // Example: -20 <deg>, auto_left, auto_right, ignore, hflip, vflip
  ['aspect', 'ar_'],          // Example: 1.5, 16:9, 4:3
  ['background', 'b_'],       // Example: blue, rgb:9090ff
  ['border', 'bo_'],          // Example: 4px_solid_black, 3px_solid_rgb:00390b, 6px_solid_rgb:00390b60
  ['condition', 'if_'],       // Example: `If width is greater than 300 pixels` => if_w_gt_300
  ['crop', 'c_'],             // Example: scale, fit, limit, fill, crop, thumb
  ['default', 'd_'],          // Example: avatar.png
  ['density', 'dn_'],         // Example: 20 <dpi>
  ['effect', 'e_'],           // Example: hue:40, red:50, negate, brightness:60, sepia:50, grayscale, blackwhite, screen, multiply
  ['gravity', 'g_'],          // Example: north, east, west, south, north_east, north_west, south_east, south_west, xy_center, face
  ['height', 'h_'],           // Example: 40 <px>, 0.3 <%>
  ['opacity', 'o_'],          // Example: 30 <%>, 60 <%>
  ['pdf', 'multi_page_pdf'],  // Singular option
  ['quality', 'q_'],          // Example: 100 <%>, 20 <%>
  ['radius', 'r_'],           // Example: 20 <px>, max <keyword>
  ['width', 'w_'],            // Example: 80 <px>, 0.2 <%>
  ['xCoord', 'x_'],           // Example: 130<px>, 0.1<%>
  ['yCoord', 'y_'],           // Example: 340<px>, 0.2<%>
  ['zoom', 'z_']              // Example: 1.5, 0.85
]);


// Ready-to-go method for attaining image URLs for the photo Grid:
export const GridImageURL = (imgURL) => imgURL.replace(/^(http.+upload\/)(.+)$/i, `$1h_650/$2`);

// Ready-to-go method for attaining image URLs for the OrderFormModal thumbnails:
export const ModalImageThumbnailURL = (imgURL) => imgURL.replace(/^(http.+upload\/)(.+)$/, `$1h_100/$2`);

// Dynamic method that allows one to pass an object of key-value properties and achieve the intended URL:
// @param {object} transforms
//  { angle: -20, height: 215, crop: 'scale', effect: 'negate', zoom: 1.15 }
export const DynamicImageURL = (imgURL, transforms) => {
  let transformQuery = Object.keys(transforms).reduce((memo, curr) => {
    memo.push(`${transformEncodings.get(curr)}${transforms[curr]}`);
    return memo;
  }, []);
  return imgURL.replace(/^(http.+upload\/)(.+)$/i, `$1${transformQuery.join(',')}/$2`);
};
