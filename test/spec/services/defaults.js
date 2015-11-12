'use strict';

describe('Service: Defaults', function () {

  // load the service's module
  beforeEach(module('comoVamosColombiaApp'));

  // instantiate service
  var Defaults;
  beforeEach(inject(function (_Defaults_) {
    Defaults = _Defaults_;
  }));

  it('should do something', function () {
    expect(!!Defaults).toBe(true);
  });

});
