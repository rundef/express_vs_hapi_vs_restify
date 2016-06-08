Feature: Testing the Hello service

  Scenario: Testing the Hello service using express
    Given My name is "world"
    When I am calling the hello service using express
    Then The response should be "Hello world"

  Scenario: Testing the Hello service using hapi
    Given My name is "world"
    When I am calling the hello service using hapi
    Then The response should be "Hello world"

  Scenario: Testing the Hello service using restify
    Given My name is "world"
    When I am calling the hello service using restify
    Then The response should be "Hello world"