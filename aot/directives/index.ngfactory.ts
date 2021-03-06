/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../directives/index';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/common/src/localization';
import * as import8 from '@angular/core/src/application_init';
import * as import9 from '@angular/core/src/testability/testability';
import * as import10 from '@angular/core/src/application_ref';
import * as import11 from '@angular/core/src/linker/compiler';
import * as import12 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import13 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import14 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import15 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import16 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import17 from '@angular/core/src/animation/animation_queue';
import * as import18 from '@angular/core/src/linker/view_utils';
import * as import19 from '@angular/platform-browser/src/browser/title';
import * as import20 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import21 from '@angular/forms/src/form_builder';
import * as import22 from '@angular/core/src/di/injector';
import * as import23 from '@angular/core/src/i18n/tokens';
import * as import24 from '@angular/core/src/application_tokens';
import * as import25 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import26 from '@angular/platform-browser/src/dom/events/key_events';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import29 from '@angular/core/src/console';
import * as import30 from '@angular/core/src/error_handler';
import * as import31 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import32 from '@angular/platform-browser/src/dom/animation_driver';
import * as import33 from '@angular/core/src/render/api';
import * as import34 from '@angular/core/src/security';
import * as import35 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import36 from '@angular/core/src/change_detection/differs/keyvalue_differs';
class GooglePlaceModuleInjector extends import0.NgModuleInjector<import1.GooglePlaceModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _ReactiveFormsModule_5:import6.ReactiveFormsModule;
  _GooglePlaceModule_6:import1.GooglePlaceModule;
  __LOCALE_ID_7:any;
  __NgLocalization_8:import7.NgLocaleLocalization;
  _ErrorHandler_9:any;
  _ApplicationInitStatus_10:import8.ApplicationInitStatus;
  _Testability_11:import9.Testability;
  _ApplicationRef__12:import10.ApplicationRef_;
  __ApplicationRef_13:any;
  __Compiler_14:import11.Compiler;
  __APP_ID_15:any;
  __DOCUMENT_16:any;
  __HAMMER_GESTURE_CONFIG_17:import12.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_18:any[];
  __EventManager_19:import13.EventManager;
  __DomSharedStylesHost_20:import14.DomSharedStylesHost;
  __AnimationDriver_21:any;
  __DomRootRenderer_22:import15.DomRootRenderer_;
  __RootRenderer_23:any;
  __DomSanitizer_24:import16.DomSanitizerImpl;
  __Sanitizer_25:any;
  __AnimationQueue_26:import17.AnimationQueue;
  __ViewUtils_27:import18.ViewUtils;
  __IterableDiffers_28:any;
  __KeyValueDiffers_29:any;
  __SharedStylesHost_30:any;
  __Title_31:import19.Title;
  __RadioControlRegistry_32:import20.RadioControlRegistry;
  __FormBuilder_33:import21.FormBuilder;
  constructor(parent:import22.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _LOCALE_ID_7():any {
    if ((this.__LOCALE_ID_7 == null)) { (this.__LOCALE_ID_7 = import3._localeFactory(this.parent.get(import23.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_7;
  }
  get _NgLocalization_8():import7.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == null)) { (this.__NgLocalization_8 = new import7.NgLocaleLocalization(this._LOCALE_ID_7)); }
    return this.__NgLocalization_8;
  }
  get _ApplicationRef_13():any {
    if ((this.__ApplicationRef_13 == null)) { (this.__ApplicationRef_13 = this._ApplicationRef__12); }
    return this.__ApplicationRef_13;
  }
  get _Compiler_14():import11.Compiler {
    if ((this.__Compiler_14 == null)) { (this.__Compiler_14 = new import11.Compiler()); }
    return this.__Compiler_14;
  }
  get _APP_ID_15():any {
    if ((this.__APP_ID_15 == null)) { (this.__APP_ID_15 = import24._appIdRandomProviderFactory()); }
    return this.__APP_ID_15;
  }
  get _DOCUMENT_16():any {
    if ((this.__DOCUMENT_16 == null)) { (this.__DOCUMENT_16 = import4._document()); }
    return this.__DOCUMENT_16;
  }
  get _HAMMER_GESTURE_CONFIG_17():import12.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) { (this.__HAMMER_GESTURE_CONFIG_17 = new import12.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_17;
  }
  get _EVENT_MANAGER_PLUGINS_18():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) { (this.__EVENT_MANAGER_PLUGINS_18 = [
      new import25.DomEventsPlugin(),
      new import26.KeyEventsPlugin(),
      new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_18;
  }
  get _EventManager_19():import13.EventManager {
    if ((this.__EventManager_19 == null)) { (this.__EventManager_19 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(import27.NgZone))); }
    return this.__EventManager_19;
  }
  get _DomSharedStylesHost_20():import14.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_20 == null)) { (this.__DomSharedStylesHost_20 = new import14.DomSharedStylesHost(this._DOCUMENT_16)); }
    return this.__DomSharedStylesHost_20;
  }
  get _AnimationDriver_21():any {
    if ((this.__AnimationDriver_21 == null)) { (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_21;
  }
  get _DomRootRenderer_22():import15.DomRootRenderer_ {
    if ((this.__DomRootRenderer_22 == null)) { (this.__DomRootRenderer_22 = new import15.DomRootRenderer_(this._DOCUMENT_16,this._EventManager_19,this._DomSharedStylesHost_20,this._AnimationDriver_21,this._APP_ID_15)); }
    return this.__DomRootRenderer_22;
  }
  get _RootRenderer_23():any {
    if ((this.__RootRenderer_23 == null)) { (this.__RootRenderer_23 = import28._createConditionalRootRenderer(this._DomRootRenderer_22,this.parent.get(import28.NgProbeToken,(null as any)),this.parent.get(import10.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_23;
  }
  get _DomSanitizer_24():import16.DomSanitizerImpl {
    if ((this.__DomSanitizer_24 == null)) { (this.__DomSanitizer_24 = new import16.DomSanitizerImpl()); }
    return this.__DomSanitizer_24;
  }
  get _Sanitizer_25():any {
    if ((this.__Sanitizer_25 == null)) { (this.__Sanitizer_25 = this._DomSanitizer_24); }
    return this.__Sanitizer_25;
  }
  get _AnimationQueue_26():import17.AnimationQueue {
    if ((this.__AnimationQueue_26 == null)) { (this.__AnimationQueue_26 = new import17.AnimationQueue(this.parent.get(import27.NgZone))); }
    return this.__AnimationQueue_26;
  }
  get _ViewUtils_27():import18.ViewUtils {
    if ((this.__ViewUtils_27 == null)) { (this.__ViewUtils_27 = new import18.ViewUtils(this._RootRenderer_23,this._Sanitizer_25,this._AnimationQueue_26)); }
    return this.__ViewUtils_27;
  }
  get _IterableDiffers_28():any {
    if ((this.__IterableDiffers_28 == null)) { (this.__IterableDiffers_28 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_28;
  }
  get _KeyValueDiffers_29():any {
    if ((this.__KeyValueDiffers_29 == null)) { (this.__KeyValueDiffers_29 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_29;
  }
  get _SharedStylesHost_30():any {
    if ((this.__SharedStylesHost_30 == null)) { (this.__SharedStylesHost_30 = this._DomSharedStylesHost_20); }
    return this.__SharedStylesHost_30;
  }
  get _Title_31():import19.Title {
    if ((this.__Title_31 == null)) { (this.__Title_31 = new import19.Title()); }
    return this.__Title_31;
  }
  get _RadioControlRegistry_32():import20.RadioControlRegistry {
    if ((this.__RadioControlRegistry_32 == null)) { (this.__RadioControlRegistry_32 = new import20.RadioControlRegistry()); }
    return this.__RadioControlRegistry_32;
  }
  get _FormBuilder_33():import21.FormBuilder {
    if ((this.__FormBuilder_33 == null)) { (this.__FormBuilder_33 = new import21.FormBuilder()); }
    return this.__FormBuilder_33;
  }
  createInternal():import1.GooglePlaceModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._ReactiveFormsModule_5 = new import6.ReactiveFormsModule();
    this._GooglePlaceModule_6 = new import1.GooglePlaceModule();
    this._ErrorHandler_9 = import4.errorHandler();
    this._ApplicationInitStatus_10 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER,(null as any)));
    this._Testability_11 = new import9.Testability(this.parent.get(import27.NgZone));
    this._ApplicationRef__12 = new import10.ApplicationRef_(this.parent.get(import27.NgZone),this.parent.get(import29.Console),this,this._ErrorHandler_9,this,this._ApplicationInitStatus_10,this.parent.get(import9.TestabilityRegistry,(null as any)),this._Testability_11);
    return this._GooglePlaceModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import6.ReactiveFormsModule)) { return this._ReactiveFormsModule_5; }
    if ((token === import1.GooglePlaceModule)) { return this._GooglePlaceModule_6; }
    if ((token === import23.LOCALE_ID)) { return this._LOCALE_ID_7; }
    if ((token === import7.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import30.ErrorHandler)) { return this._ErrorHandler_9; }
    if ((token === import8.ApplicationInitStatus)) { return this._ApplicationInitStatus_10; }
    if ((token === import9.Testability)) { return this._Testability_11; }
    if ((token === import10.ApplicationRef_)) { return this._ApplicationRef__12; }
    if ((token === import10.ApplicationRef)) { return this._ApplicationRef_13; }
    if ((token === import11.Compiler)) { return this._Compiler_14; }
    if ((token === import24.APP_ID)) { return this._APP_ID_15; }
    if ((token === import31.DOCUMENT)) { return this._DOCUMENT_16; }
    if ((token === import12.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_17; }
    if ((token === import13.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_18; }
    if ((token === import13.EventManager)) { return this._EventManager_19; }
    if ((token === import14.DomSharedStylesHost)) { return this._DomSharedStylesHost_20; }
    if ((token === import32.AnimationDriver)) { return this._AnimationDriver_21; }
    if ((token === import15.DomRootRenderer)) { return this._DomRootRenderer_22; }
    if ((token === import33.RootRenderer)) { return this._RootRenderer_23; }
    if ((token === import16.DomSanitizer)) { return this._DomSanitizer_24; }
    if ((token === import34.Sanitizer)) { return this._Sanitizer_25; }
    if ((token === import17.AnimationQueue)) { return this._AnimationQueue_26; }
    if ((token === import18.ViewUtils)) { return this._ViewUtils_27; }
    if ((token === import35.IterableDiffers)) { return this._IterableDiffers_28; }
    if ((token === import36.KeyValueDiffers)) { return this._KeyValueDiffers_29; }
    if ((token === import14.SharedStylesHost)) { return this._SharedStylesHost_30; }
    if ((token === import19.Title)) { return this._Title_31; }
    if ((token === import20.RadioControlRegistry)) { return this._RadioControlRegistry_32; }
    if ((token === import21.FormBuilder)) { return this._FormBuilder_33; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__12.ngOnDestroy();
  }
}
export const GooglePlaceModuleNgFactory:import0.NgModuleFactory<import1.GooglePlaceModule> = new import0.NgModuleFactory(GooglePlaceModuleInjector,import1.GooglePlaceModule);