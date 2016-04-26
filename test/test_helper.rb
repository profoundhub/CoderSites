ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
<<<<<<< HEAD
=======
  #
  # Note: You'll currently still have to declare fixtures explicitly in integration tests
  # -- they do not yet inherit this setting
>>>>>>> 39e8dc1b1707b0335ff9f53b1ab9fac4a0cc1e1f
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
