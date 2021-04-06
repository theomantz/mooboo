require 'test_helper'

class Api::PinsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_pins_create_url
    assert_response :success
  end

  test "should get index" do
    get api_pins_index_url
    assert_response :success
  end

  test "should get destroy" do
    get api_pins_destroy_url
    assert_response :success
  end

end
