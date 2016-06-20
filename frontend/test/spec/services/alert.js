'use strict';

describe('Service: alert', function () {

  // load the services's module
  beforeEach(module('jwtNewApp'));

  // instantiate services
  var alert;
  beforeEach(inject(function (_alert_) {
    alert = _alert_;
  }));

  it('should do something', function () {
    expect(!!alert).toBe(true);
  });

});
