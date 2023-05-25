// /*
// //<a href="https://g.page/LowCostPetClinic?share" rel="noopener noreferrer" target="_blank">Visit Us in Kingwood, TX</a>
// /* eslint-disable react/jsx-props-no-spreading */
// import { ColorModeScript } from "@chakra-ui/react";
// import type { DocumentContext } from "next/document";
// import Document, { Html, Head, Main, NextScript } from "next/document";

// import Meta from "lib/components/Meta";
// import customTheme from "lib/styles/theme";

// class home extends Document {
//   static getInitialProps(ctx: DocumentContext) {
//     return Document.getInitialProps(ctx);
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <link
//             href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
//             rel="stylesheet"
//           />
//           <Meta />
//         </Head>
//         <body>
//           <ColorModeScript
//             initialColorMode={customTheme.config?.initialColorMode}
//           />
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default home;


// /*
// <div class="sppb-addon sppb-addon-feature sppb-text-left ">
// <div class="sppb-addon-content sppb-text-left">
// <div class="sppb-media"><div class="pull-left">
// <div class="sppb-icon"><a href="https://goo.gl/maps/ot8myZipifC9MY169" rel="noopener noreferrer" target="_blank"><span class="sppb-icon-container" aria-label="Visit Us in Kingwood, TX"><i class="fas fa-map-marker" aria-hidden="true"></i>
// </span></a></div></div>
// <div class="sppb-media-body"><div class="sppb-media-content"><h6 class="sppb-addon-title sppb-feature-box-title sppb-media-heading"><a href="https://g.page/LowCostPetClinic?share" rel="noopener noreferrer" target="_blank">Visit Us in Kingwood, TX</a></h6>
// <div class="sppb-addon-text">
// </div></div></div></div></div></div>
// */

// //file picker
// /*<file-picker ng-model="files" changed="uploadPhotos(files)" accept="image/*" multiple="true" class="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty">
// <strong class="ng-binding">Max file size 5MB</strong>
//   <div ngf-drop="" ngf-change="fileChange($files, $invalidFiles)" ngf-multiple="multiple" ngf-allow-dir="false" ngf-pattern="accept" ngf-max-size="maxSize" class="file-uploader well centered-container" ngf-drag-over-class="'dragover'">
//     <div ng-messages="errorMessages" class="error text-danger ng-inactive">
//       <!-- ngMessage: pattern -->
//       <!-- ngMessage: maxSize -->
//     </div>
//     <div class="centered">
//       <ngf-select ngf-change="fileChange($files, $invalidFiles)" ngf-multiple="multiple" ngf-accept="accept" ngf-pattern="accept" ngf-max-size="maxSize" class="btn btn-default fileinput-button">
//         <span>Browse</span>
//         <i class="fa fa-folder-open-o"></i>
//       </ngf-select>
//       <span class="message">Drop a file here to upload</span>
//     </div>
//   </div>
// </file-picker>
// */
// // select option input field

// /*
// <span ng-if="type === 'select'" class="ng-scope">
//         <select id="column-input" name="column" class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required clearfix ng-touched" ng-required="required" ng-model="model()[field]" ng-disabled="!categories" ng-options="c for c in categoryOptions()" ng-class="{ 'has-error': rc.needsAttention(form[field]) ||
//                      form[field].serverErrors,
//                    clearfix: type !== 'checkbox' }" required="required" style=""><option value="" class="ng-binding" selected="selected"></option><option label="No Preference" value="string:No Preference">No Preference</option><option label="Dr. Johnson" value="string:Dr. Johnson">Dr. Johnson</option><option label="Dr. Centers" value="string:Dr. Centers">Dr. Centers</option><option label="Dr. O" value="string:Dr. O">Dr. O</option><option label="Dr. B" value="string:Dr. B">Dr. B</option></select>
//       </span>
//       */
// // date picker

// /*
// <div ng-if="type === 'date'" class="input-group date ng-scope">
//         <input id="preferred-date-input" name="preferredDate" type="text" class="form-control ng-pristine ng-isolate-scope ng-empty ng-invalid ng-invalid-required clearfix ng-touched" date-time-picker="" data-date-format="L" ng-required="required" ng-model="model()[field]" moment-model="L" data-date-use-current="false" enabled-dates="availableDays" ng-disabled="noneAvailable" placeholder="" ng-class="{ 'has-error': rc.needsAttention(form[field]) ||
//                      form[field].serverErrors,
//                    clearfix: type !== 'checkbox' }" required="required" style="">
//         <span class="input-group-addon">
//           <i class="fa fa-calendar-o"></i>
//         </span>
//       </div>
// */

// // google map


// /*
// <div id="sppb-addon-osm-1591307976371" class="sppb-addon-openstreetmap leaflet-container leaflet-touch leaflet-fade-anim leaflet-touch-zoom" data-location="[{&quot;address&quot;:&quot;<a href=\&quot;https:\/\/goo.gl\/maps\/ot8myZipifC9MY169\&quot; target=\&quot;_blank\&quot;>View on Google Maps<\/a>&quot;,&quot;latitude&quot;:&quot;30.05731398452589&quot;,&quot;longitude&quot;:&quot; -95.18724762808074&quot;,&quot;custom_icon&quot;:&quot;\/images\/mapRye.png&quot;}]" data-mapstyle="CartoDB.Positron" data-mapzoom="15" data-mousescroll="0" data-dragging="0" data-zoomcontrol="0" data-attribution="0" tabindex="0" style="position: relative; outline: none;"><div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(-22px, 0px, 0px);"><div class="leaflet-pane leaflet-tile-pane"><div class="leaflet-layer " style="z-index: 1; opacity: 1;"><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1);"><img alt="" role="presentation" src="https://cartodb-basemaps-d.global.ssl.fastly.net/light_all/15/7719/13512.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-89px, -242px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/15/7720/13512.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(167px, -242px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/15/7719/13513.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-89px, 14px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://cartodb-basemaps-b.global.ssl.fastly.net/light_all/15/7720/13513.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(167px, 14px, 0px); opacity: 1;"></div></div></div><div class="leaflet-pane leaflet-shadow-pane"></div><div class="leaflet-pane leaflet-overlay-pane"></div><div class="leaflet-pane leaflet-marker-pane"><img src="/images/mapRye.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0" style="margin-left: -22px; margin-top: -94px; width: 38px; height: 95px; transform: translate3d(127px, 75px, 0px); z-index: 75;"></div><div class="leaflet-pane leaflet-tooltip-pane"></div><div class="leaflet-pane leaflet-popup-pane"></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(1.97628e+06px, 3.45939e+06px, 0px) scale(16384);"></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"></div><div class="leaflet-top leaflet-right"></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"></div></div></div>
// */

// // old google  maps rendering
// /*
// <section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-ee1116b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ee1116b" data-element_type="section">
// 						<div class="elementor-container elementor-column-gap-default">
// 							<div class="elementor-row">
// 					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-965763c" data-id="965763c" data-element_type="column">
// 			<div class="elementor-column-wrap elementor-element-populated">
// 							<div class="elementor-widget-wrap">
// 						<div class="elementor-element elementor-element-caed514 elementor-widget elementor-widget-google_maps animated fadeInLeft" data-id="caed514" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="google_maps.default">
// 				<div class="elementor-widget-container">
// 			<div class="elementor-custom-embed"><iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=4215%20Spencer%20Hwy%2C%20Pasadena%2C%20Tx%2077504&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="4215 Spencer Hwy, Pasadena, Tx 77504" aria-label="4215 Spencer Hwy, Pasadena, Tx 77504"></iframe></div>		</div>
// 				</div>
// 						</div>
// 					</div>
// 		</div>
// 								</div>
// 					</div>
// 		</section>
//         */
